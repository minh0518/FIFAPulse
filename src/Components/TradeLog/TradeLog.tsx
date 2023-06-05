import React, { useEffect, useState } from 'react';
import {
  PlayerInfo,
  PlayerSeasonAndName,
  Table,
  TableContentDiv,
  TableHeaderDiv,
  TablePlayerTd,
  TableTd,
  TableTh,
  TableThParagraph,
  TableTr,
  TradeLogContainerDiv,
} from './TradeLog.styled';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import BronzeCard from '../../images/EnforceImg/BronzeCard';
import { TradeLogInfo } from '../../types/api';
import { convertPlayerName, getSeasonImg } from '../../utils/MatchStatistics';
import { addCommaonMoney, convertDateAndTime } from '../../utils/MyRecord';
import PlayerImg from '../PlayerImg';

const TradeLog = () => {
  const { userObj, setUserObj } = useUserObjAPI()!;

  const [tradeInfo, setTradeInfo] = useState<{ buy: TradeLogInfo[]; sell: TradeLogInfo[] } | null>(null);
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  // console.log(tradeInfo && tradeInfo[tradeType]);

  useEffect(() => {
    const test = async () => {
      const fifa = new FIFAData();
      const result = await fifa.getTradeLog(userObj!.FIFAOnlineAccessId);
      setTradeInfo(result);
    };
    test();
  }, []);

  const onBuySellClick = (tradeType: 'buy' | 'sell') => {
    setTradeType(tradeType);
  };

  console.log(tradeInfo);
  return (
    <TradeLogContainerDiv>
      <h2 style={{ display: 'inline-block' }}>이적 시장 목록</h2>
      <ul style={{ display: 'inline-block' }}>
        <li>
          <button type="button" onClick={(e) => onBuySellClick('buy')}>
            BUY
          </button>
          <button type="button" onClick={(e) => onBuySellClick('sell')}>
            SELL
          </button>
        </li>
      </ul>

      <TableHeaderDiv>
        <Table>
          <thead>
            {/* <tr>
              <th>표로 보기</th>
              <th>차트로 보기</th>
            </tr> */}
          </thead>
        </Table>
      </TableHeaderDiv>

      {tradeInfo && (
        <TableContentDiv>
          <Table>
            <tbody>
              {tradeInfo[tradeType].map((i) => {
                return (
                  <TableTr key={i.saleSn}>
                    {/* PlayerImg 폴더 위치 변경해야 할듯 */}
                    <TablePlayerTd>
                      <PlayerImg spId={i.spid} width={85} height={85} />
                      <PlayerInfo>
                        <PlayerSeasonAndName>
                          <img src={getSeasonImg(i.spid)} alt="시즌 이미지" width={22} height={18} />
                          {convertPlayerName(i.spid)}
                        </PlayerSeasonAndName>
                        <img
                          src={`https://upxowbgcgsnlbdqafwlg.supabase.co/storage/v1/object/public/assets/strong/${i.grade}.png`}
                          alt={`+${i.grade}`}
                          width={30}
                          height={18}
                        />
                      </PlayerInfo>
                    </TablePlayerTd>
                    <TableTd>
                      <b>{addCommaonMoney(i.value)} BP</b>
                    </TableTd>
                    <TableTd>{convertDateAndTime(i.tradeDate)}</TableTd>
                  </TableTr>
                );
              })}
            </tbody>
          </Table>
        </TableContentDiv>
      )}
    </TradeLogContainerDiv>
  );
};

export default TradeLog;
