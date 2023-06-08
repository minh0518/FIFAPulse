import React, { useEffect, useState } from 'react';
import { Select } from '@mantine/core';
import {
  BuyButton,
  ChooseBuyOrSellUl,
  HeadingAndButtonDiv,
  LoadingDiv,
  PlayerInfo,
  PlayerSeasonAndName,
  SellButton,
  Table,
  TableContentDiv,
  TableHeaderDiv,
  TablePlayerTd,
  TableTd,
  TableTr,
  TradeLogContainerDiv,
  TradeLogHeading,
} from './TradeLog.styled';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';

import { TradeLogInfo } from '../../types/api';
import { convertPlayerName, getSeasonImg } from '../../utils/MatchStatistics';
import { addCommaonMoney, convertDateAndTime } from '../../utils/MyRecord';
import Loading from '../Loading';
import PlayerImg from '../PlayerImg';

const TradeLog = () => {
  const { userObj, setUserObj } = useUserObjAPI()!;
  const [selectedValue, setSelectedValue] = useState<string | null>('latest');
  const [tradeInfo, setTradeInfo] = useState<{ buy: TradeLogInfo[]; sell: TradeLogInfo[] } | null>(null);
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  // 1. 타입은 최소한 작은 단위로 TradeLogInfo >> useState의 객체배열 ,  아래 sortFunctions의 a,b의 타입

  // console.log(tradeInfo && tradeInfo[tradeType]);

  useEffect(() => {
    const test = async () => {
      const fifa = new FIFAData();
      const result = await fifa.getTradeLog(userObj!.FIFAOnlineAccessId);
      setTradeInfo(result);
    };
    test();
  }, []);

  useEffect(() => {
    if (!tradeInfo) return;
    const copyTradeInfo = JSON.parse(JSON.stringify(tradeInfo));

    type SelectedValue = 'priceDown' | 'priceUp' | 'latest' | 'oldest';

    const sortFunctions: { [K in SelectedValue]: (a: TradeLogInfo, b: TradeLogInfo) => number } = {
      priceDown: (a, b) => b.value - a.value,
      priceUp: (a, b) => a.value - b.value,
      latest: (a, b) => new Date(b.tradeDate).getTime() - new Date(a.tradeDate).getTime(),
      oldest: (a, b) => new Date(a.tradeDate).getTime() - new Date(b.tradeDate).getTime(),
    };

    ['buy', 'sell'].forEach((i) => {
      // selectedValue가 null인 경우를 체크하고 type assertion을 사용
      if (selectedValue && sortFunctions[selectedValue as SelectedValue]) {
        copyTradeInfo[i].sort(sortFunctions[selectedValue as SelectedValue]);
      }
    });

    setTradeInfo(copyTradeInfo);
  }, [selectedValue]);

  const onBuySellClick = (tradeType: 'buy' | 'sell') => {
    setTradeType(tradeType);
  };

  console.log(tradeInfo);
  return (
    <TradeLogContainerDiv>
      <HeadingAndButtonDiv>
        <TradeLogHeading>이적 시장 목록</TradeLogHeading>
        <ChooseBuyOrSellUl>
          <li>
            <BuyButton type="button" onClick={(e) => onBuySellClick('buy')} tradeType={tradeType}>
              BUY
            </BuyButton>
          </li>
          <li>
            <SellButton type="button" onClick={(e) => onBuySellClick('sell')} tradeType={tradeType}>
              SELL
            </SellButton>
          </li>
        </ChooseBuyOrSellUl>
      </HeadingAndButtonDiv>
      <Select
        value={selectedValue}
        onChange={setSelectedValue}
        transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
        radius="md"
        style={{ width: '25%' }}
        data={[
          { value: 'priceDown', label: '가격 내림차순' },
          { value: 'priceUp', label: '가격 오름차순' },
          { value: 'latest', label: '최신순' },
          { value: 'oldest', label: '오래 된 순' },
        ]}
      />

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

      {tradeInfo ? (
        <TableContentDiv>
          <Table>
            <tbody>
              {tradeInfo[tradeType].map((i) => {
                return (
                  <TableTr key={i.saleSn}>
                    <TablePlayerTd>
                      <PlayerImg spId={i.spid} width={85} height={85} />
                      <PlayerInfo>
                        <PlayerSeasonAndName>
                          <img src={getSeasonImg(i.spid)} alt="시즌 이미지" width={22} height={18} />
                          &nbsp;
                          <b>{convertPlayerName(i.spid)}</b>
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
      ) : (
        <LoadingDiv>
          <Loading />
        </LoadingDiv>
      )}
    </TradeLogContainerDiv>
  );
};

export default TradeLog;
