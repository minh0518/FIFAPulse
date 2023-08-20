import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CalcResultContainerDiv,
  GameResultForfeitLose,
  GameResultForfeitWin,
  GameResultSpan,
  NoResultDiv,
  Table,
  TableContentDiv,
  TableTd,
  TableTr,
} from './CalcResult.styled';
import { useUserObjAPI } from '../../../Context/UserObj/UserObjContext';
import FIFAData from '../../../Services/FifaData';
import { MatchDetail } from '../../../types/api';
import { CalcResultProps } from '../../../types/props';
import { calcTotalMatchCounts, calcWinngRate } from '../../../utils/MatchResultsByMatchTypes';
import { convertDateAndTime, showMyNickNameFirst } from '../../../utils/MyRecord';

const CalcResult = ({ otherUserInfo }: CalcResultProps) => {
  const [calcResult, setCalcResult] = useState<{ totalMatchLength: number; win: number; drawOrLose: number } | null>(null);
  const [recordWithOtherUser, setRecordWithOtherUser] = useState<MatchDetail[] | null>(null);
  const { userObj, setUserObj } = useUserObjAPI()!;
  const navigate = useNavigate();

  useEffect(() => {
    const getMatchId = async () => {
      const fifa = new FIFAData();
      const response = await fifa.getMatchId(userObj!.FIFAOnlineAccessId, 40, 0, 100);

      if (response.length) {
        const matchDetails: MatchDetail[] = await Promise.all(
          response.map((i) => {
            return fifa.getMatchDetail(i);
          }),
        );

        const filterWithOtherUser = matchDetails.filter((i) => {
          return i.matchInfo[0].nickname === otherUserInfo?.nickname || i.matchInfo[1].nickname === otherUserInfo?.nickname;
        });

        setRecordWithOtherUser(filterWithOtherUser);
      }
    };

    if (otherUserInfo) getMatchId();
  }, [otherUserInfo]);

  useEffect(() => {
    const calcMatchResult = () => {
      let calcReult;
      if (recordWithOtherUser) {
        calcReult = calcTotalMatchCounts(recordWithOtherUser, userObj!.nickname);
        setCalcResult(calcReult);
      }
    };
    if (recordWithOtherUser) calcMatchResult();
  }, [recordWithOtherUser]);

  const onListClick = (matchId: any) => {
    navigate(`/main-select/my-record/match-statistics?matchId=${matchId}`);
    // navigate(`/main-select/my-record/${matchId}`);
  };

  return (
    <CalcResultContainerDiv>
      {otherUserInfo && recordWithOtherUser?.length && calcResult ? (
        <>
          <div>
            <p>{otherUserInfo?.nickname}님 과의 상대 전적</p>
            <p>승률 : {calcWinngRate(calcResult!.totalMatchLength, calcResult!.win)}%</p>
            <p>
              {calcResult!.totalMatchLength}전 {calcResult!.win}승
            </p>
          </div>
          <TableContentDiv>
            <Table cellPadding="0" cellSpacing="0">
              <tbody>
                {recordWithOtherUser!.map((i, index) => {
                  return (
                    <TableTr key={index} onClick={(e) => onListClick(i.matchId)}>
                      <TableTd>
                        <span>VS {showMyNickNameFirst([i.matchInfo[0].nickname, i.matchInfo[1].nickname], userObj!.nickname)[1]}</span>
                      </TableTd>
                      <TableTd>
                        <span>
                          {i.matchInfo[0].nickname === userObj!.nickname ? ( // 내 기록이 i.matchInfo[0]에 있다면
                            i.matchInfo[0].matchDetail.matchEndType === 0 ? ( // 정상 종료라면
                              <GameResultSpan result={i.matchInfo[0].matchDetail.matchResult}>
                                {i.matchInfo[0].matchDetail.matchResult}
                              </GameResultSpan> // 그대로 출력
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
                    </TableTr>
                  );
                })}
              </tbody>
            </Table>
          </TableContentDiv>
        </>
      ) : (
        <NoResultDiv>
          <p>해당 유저와의 기록이 없습니다</p>
        </NoResultDiv>
      )}
    </CalcResultContainerDiv>
  );
};

export default CalcResult;
