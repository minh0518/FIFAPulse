import React, { useEffect, useState } from 'react';
import { Table, TableContentDiv, TableHeaderDiv, TableTd, TableTr, TradeLogContainerDiv } from './TradeLog.styled';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { TradeLogInfo } from '../../types/api';
import { addCommaonMoney, convertDateAndTime } from '../../utils/MyRecord';
import MatchResultsByMatchTypes from '../MatchResultsByMatchTypes';
import PlayerImg from '../MatchStatistics/Player/PlayerImg';

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

  const onBuySellClick = (value: 'buy' | 'sell') => {
    setTradeType(value);
  };

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
                    <TableTd>
                      <PlayerImg spId={i.spid} width={100} height={100} />
                    </TableTd>
                    <TableTd>+{i.grade}</TableTd>
                    <TableTd>{addCommaonMoney(i.value)}</TableTd>
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
