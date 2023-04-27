import React, { useEffect, useState } from 'react';
import { useLoginAPI } from '../../Context/Firebase/LoginContext';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { MatchDetail, Maxdivision } from '../../types/api';
import { convertDate, convertDivisionNumberToDivisionName, showMyNickNameFirst, convertDateAndTime } from '../../utils/MyRecord';

const MyRecord = () => {
  const { isLoggedIn, setIsLoggedIn } = useLoginAPI()!;
  const { userObj, setUserObj } = useUserObjAPI()!;

  const [selectedValue, setSelectedValue] = useState(50);
  const [matchId, setMatchId] = useState<string[]>([]);
  const [matchDetail, setMatchDetail] = useState<MatchDetail[]>([]);

  const [maxdivision, setMaxdivision] = useState<Maxdivision[] | null>(null);
  useEffect(() => {
    const updateMaxdivision = async () => {
      const fifa = new FIFAData();
      const maxdivisionResult = await fifa.getMaxdivision(userObj!.FIFAOnlineAccessId);

      setMaxdivision(maxdivisionResult);
    };
    // userObj!.FIFAOnlineAccessId >> 이건  userObj가 null이 아니라는걸 보장한다는걸 알겠는데
    // userObj?.FIFAOnlineAccessId >> 이건 뭐지

    updateMaxdivision();
  }, []);

  useEffect(() => {
    const getMatchId = async () => {
      const fifa = new FIFAData();
      const matchIdPromise = await fifa.getMatchId(userObj!.FIFAOnlineAccessId, selectedValue);
      setMatchId(matchIdPromise);
    };
    getMatchId();
  }, [selectedValue]);

  useEffect(() => {
    const getMatchDetail = async () => {
      if (matchId.length) {
        const fifa = new FIFAData();
        const matchDetailArr: Promise<MatchDetail>[] = matchId.map((i) => {
          return fifa.getMatchDetail(i);
        });
        const matchDetailsPromises: MatchDetail[] = await Promise.all(matchDetailArr);
        setMatchDetail(matchDetailsPromises);
      }
      if (!matchId.length) {
        setMatchDetail([]);
      }
    };
    getMatchDetail();
  }, [matchId]);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setSelectedValue(Number(value));
  };

  console.log(matchDetail);

  return (
    <div>
      <div>
        <div>
          <b>{userObj?.nickname}</b> 구단주님
        </div>
        <div>
          {maxdivision &&
            maxdivision.map((i, index) => {
              return i.matchType === 50 ? (
                <div key={index}>
                  공식경기 최고 기록 : {convertDivisionNumberToDivisionName(i.division)} ({convertDate(i.achievementDate)})
                </div>
              ) : (
                ''
              );
            })}
        </div>
      </div>
      <div>
        <h2>매치 기록</h2>
        <select value={selectedValue} onChange={onSelectChange}>
          <option value={30}>리그 친선 경기</option>
          <option value={40}>클래식 1on1</option>
          <option value={50}>공식경기</option>
          <option value={52}>감독모드</option>
          <option value={60}>공식경기(친선)</option>
        </select>
        <div>
          {matchDetail.length ? (
            matchDetail.map((i, index) => {
              return (
                <div key={index}>
                  <div>
                    <span>
                      {/* 스타일 적용시 분리해서 사용할 시 대비 */}
                      {/* {showMyNickNameFirst([i.matchInfo[0].nickname, i.matchInfo[1].nickname], userObj!.nickname)[0]} VS
                      {showMyNickNameFirst([i.matchInfo[0].nickname, i.matchInfo[1].nickname], userObj!.nickname)[1]} */}
                      {showMyNickNameFirst([i.matchInfo[0].nickname, i.matchInfo[1].nickname], userObj!.nickname).join(' vs ')}
                    </span>

                    <span>
                      {i.matchInfo[0].nickname === userObj!.nickname ? (
                        i.matchInfo[0].matchDetail.matchEndType === 0 ? (
                          <> 결과 : {i.matchInfo[0].matchDetail.matchResult}</>
                        ) : i.matchInfo[0].matchDetail.matchEndType === 1 ? (
                          '결과 : 몰수 승'
                        ) : (
                          '결과 : 몰수 패'
                        )
                      ) : i.matchInfo[1].matchDetail.matchEndType === 0 ? (
                        <> 결과 : {i.matchInfo[1].matchDetail.matchResult}</>
                      ) : i.matchInfo[1].matchDetail.matchEndType === 1 ? (
                        '결과 : 몰수 승'
                      ) : (
                        '결과 : 몰수 패'
                      )}
                    </span>
                    <span> {convertDateAndTime(i.matchDate)}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div>해당 매치 기록이 존재하지 않습니다</div>
          )}
        </div>
      </div>
      <hr />
      <div>
        <h2>거래 목록</h2>
      </div>
    </div>
  );
};

export default MyRecord;
