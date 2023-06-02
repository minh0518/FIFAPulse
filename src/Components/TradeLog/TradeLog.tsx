import React, { useEffect, useState } from 'react';
import { TradeLogContainerDiv } from './TradeLog.styled';
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

  return (
    <TradeLogContainerDiv>
      <h2>이적 시장 목록</h2>

      <div>
        <table>
          <thead>
            <tr>
              <th>BUY</th>
              <th>SELL</th>
            </tr>
          </thead>
        </table>
      </div>

      {tradeInfo && (
        <div>
          <table>
            <tbody>
              {tradeInfo[tradeType].map((i) => {
                return (
                  <tr key={i.saleSn}>
                    {/* PlayerImg 폴더 위치 변경해야 할듯 */}
                    <PlayerImg spId={i.spid} />
                    <td>+{i.grade}</td>
                    <td>{convertDateAndTime(i.tradeDate)}</td>
                    <td>{addCommaonMoney(i.value)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </TradeLogContainerDiv>
  );
};

export default TradeLog;
