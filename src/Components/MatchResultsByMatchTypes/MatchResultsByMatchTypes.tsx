import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GameResultForfeitLose,
  GameResultForfeitWin,
  GameResultSpan,
  Table,
  TableContentDiv,
  TableHeaderDiv,
  TableTd,
  TableTh,
  TableTr,
} from './MatchResultsByMatchTypes.styled';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { MatchDetail, Maxdivision } from '../../types/api';
import { convertDateAndTime, showMyNickNameFirst } from '../../utils/MyRecord';

const MatchResultsByMatchTypes = () => {
  const { userObj, setUserObj } = useUserObjAPI()!;
  const [selectedValue, setSelectedValue] = useState(50);
  const [matchId, setMatchId] = useState<string[]>([]);
  const [matchDetail, setMatchDetail] = useState<MatchDetail[]>([]);
  const [maxdivision, setMaxdivision] = useState<Maxdivision[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const updateMaxdivision = async () => {
      const fifa = new FIFAData();
      const maxdivisionResult = await fifa.getMaxdivision(userObj!.FIFAOnlineAccessId);

      setMaxdivision(maxdivisionResult);
    };

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

  const onListClick = (matchId: any) => {
    navigate(`/main-select/my-record/${matchId}`);
  };

  return (
    <div>
      <h2>매치 기록</h2>
      <select value={selectedValue} onChange={onSelectChange}>
        <option value={30}>리그 친선 경기</option>
        <option value={40}>클래식 1on1</option>
        <option value={50}>공식경기</option>
        <option value={52}>감독모드</option>
        <option value={60}>공식경기(친선)</option>
      </select>

      <TableHeaderDiv>
        <Table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <TableTh>상대</TableTh>
              <TableTh>결과</TableTh>
              <TableTh>매치 시간</TableTh>
            </tr>
          </thead>
        </Table>
      </TableHeaderDiv>

      {matchDetail.length ? (
        <TableContentDiv>
          <Table cellPadding="0" cellSpacing="0">
            <tbody>
              {matchDetail.map((i, index) => {
                return (
                  <TableTr key={index} onClick={(e) => onListClick(i.matchId)}>
                    {/* <Link to={`/main-select/my-record/${i.matchId}`}> */}
                    <TableTd>
                      <span>
                        {/* 스타일 적용시 요소를 분리해서 적용할 시 대비 */}
                        {/* {showMyNickNameFirst([i.matchInfo[0].nickname, i.matchInfo[1].nickname], userObj!.nickname)[0]} VS
                 {showMyNickNameFirst([i.matchInfo[0].nickname, i.matchInfo[1].nickname], userObj!.nickname)[1]} */}
                        {/* {showMyNickNameFirst([i.matchInfo[0].nickname, i.matchInfo[1].nickname], userObj!.nickname).join(' vs ')} */}
                        VS {showMyNickNameFirst([i.matchInfo[0].nickname, i.matchInfo[1].nickname], userObj!.nickname)[1]}
                      </span>
                    </TableTd>
                    <TableTd>
                      <span>
                        {i.matchInfo[0].nickname === userObj!.nickname ? ( // 내 기록이 i.matchInfo[0]에 있다면
                          i.matchInfo[0].matchDetail.matchEndType === 0 ? ( // 정상 종료라면
                            <GameResultSpan result={i.matchInfo[0].matchDetail.matchResult}>{i.matchInfo[0].matchDetail.matchResult}</GameResultSpan> // 그대로 출력
                          ) : i.matchInfo[0].matchDetail.matchEndType === 1 ? ( // 몰수승이라면
                            <GameResultForfeitWin>몰수 승</GameResultForfeitWin>
                          ) : (
                            <GameResultForfeitLose>몰수 패</GameResultForfeitLose>
                          )
                        ) : // 내 기록이 i.matchInfo[1]에 있다면
                        i.matchInfo[1].matchDetail.matchEndType === 0 ? (
                          <GameResultSpan result={i.matchInfo[1].matchDetail.matchResult}>{i.matchInfo[1].matchDetail.matchResult}</GameResultSpan>
                        ) : i.matchInfo[1].matchDetail.matchEndType === 1 ? (
                          <GameResultForfeitWin>몰수 승</GameResultForfeitWin>
                        ) : (
                          <GameResultForfeitLose>몰수 패</GameResultForfeitLose>
                        )}
                      </span>
                    </TableTd>

                    <TableTd>
                      <span> {convertDateAndTime(i.matchDate)}</span>
                    </TableTd>
                    {/* </Link> */}
                  </TableTr>
                );
              })}
            </tbody>
          </Table>
        </TableContentDiv>
      ) : (
        <div>해당 매치 기록이 존재하지 않습니다</div>
      )}
    </div>
  );
};

export default MatchResultsByMatchTypes;
