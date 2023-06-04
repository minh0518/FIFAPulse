import axios from 'axios';
import {
  MatchDetail,
  Maxdivision,
  MetaDataDivision,
  MetaDataMatchtype,
  MetaDataSeasonId,
  MetaDataSpid,
  MetaDataSpposition,
  NexonUserInfo,
  TradeLogInfo,
} from '../types/api';

export default class FIFAData {
  instance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.nexon.co.kr/fifaonline4/v1.0',
      headers: {
        Authorization: import.meta.env.REACT_APP_API_KEY_FIFA,
      },
    });
  }

  getUserId = async <T extends NexonUserInfo>(userNickName: string): Promise<T> => {
    const result = await this.instance.get<T>('users', {
      params: {
        nickname: userNickName,
      },
    });
    return result.data;
  };

  getInfoMetaData = async () => {
    return Promise.all([this.#getMatchtype(), this.#getSeasonId(), this.#getSpid(), this.#getDivision(), this.#getSpposition()]);
  };

  // <이미지 관련한 api는 필요할 때 직접 호출해서 사용합니다>
  // 상반신 미페
  getActionImg = async (spid: number): Promise<string> => {
    // 프록시 사용
    const result = await axios.get(`/live/externalAssets/common/playersAction/p${spid}.png`, {
      headers: {
        Authorization: import.meta.env.REACT_APP_API_KEY_FIFA,
      },
      responseType: 'blob',
    });

    const imgUrl = URL.createObjectURL(result.data);

    return imgUrl;
  };

  // <이미지 관련한 api는 필요할 때 직접 호출해서 사용합니다>
  // (상반신 미페가 없으면) 대갈 미페
  getHeadImg = async (pid: number): Promise<string> => {
    // (pid)가 "0"으로 시작하는 경우, 시작 부분의 0을 모두 제외해야 정상적으로 조회가 가능합니다.
    // (e.g. "000401"일경우, "401"로 조회)
    const result = await axios.get(`/live/externalAssets/common/players/p${pid}.png`, {
      headers: {
        Authorization: import.meta.env.REACT_APP_API_KEY_FIFA,
      },
      responseType: 'blob',
    });

    const imgUrl = URL.createObjectURL(result.data);
    return imgUrl;
  };

  getMaxdivision = async <T extends Maxdivision>(accessId: string): Promise<T[]> => {
    const result = await this.instance.get<T[]>(`users/${accessId}/maxdivision`);
    return result.data;
  };

  getMatchId = async (accessid: string, matchtype: number, offset = 0, limit = 20): Promise<string[]> => {
    const result = await this.instance.get(`users/${accessid}/matches`, {
      params: {
        matchtype,
        offset,
        limit,
      },
    });
    return result.data;
  };

  getMatchDetail = async <T extends MatchDetail>(matchId: string): Promise<T> => {
    const result = await this.instance.get<T>(`matches/${matchId}`);
    return result.data;
  };

  // 이적시장 거래 목록
  getTradeLog = async (accessid: string) => {
    // return Promise.all([this.#getBuyTrageLog(accessid, 20), this.#getSellTrageLog(accessid, 20)]);
    const tradeLog = {
      buy: await this.#getBuyTrageLog(accessid, 50),
      sell: await this.#getSellTrageLog(accessid, 50),
    };
    return tradeLog;
  };

  // 선수 spid
  #getSpid = async <T extends MetaDataSpid>(): Promise<T[]> => {
    const result = await axios.get<T[]>('https://static.api.nexon.co.kr/fifaonline4/latest/spid.json', {
      headers: {
        Authorization: import.meta.env.REACT_APP_API_KEY_FIFA,
      },
    });

    return result.data;
  };

  // 시즌아이디
  #getSeasonId = async <T extends MetaDataSeasonId>(): Promise<T[]> => {
    const result = await axios.get<T[]>('https://static.api.nexon.co.kr/fifaonline4/latest/seasonid.json', {
      headers: {
        Authorization: import.meta.env.REACT_APP_API_KEY_FIFA,
      },
    });

    return result.data;
  };

  // 선수 포지션
  #getSpposition = async <T extends MetaDataSpposition>(): Promise<T[]> => {
    const result = await axios.get<T[]>('https://static.api.nexon.co.kr/fifaonline4/latest/spposition.json', {
      headers: {
        Authorization: import.meta.env.REACT_APP_API_KEY_FIFA,
      },
    });

    return result.data;
  };

  // 공식경기 등급 식별자
  #getDivision = async <T extends MetaDataDivision>(): Promise<T[]> => {
    const result = await axios.get<T[]>('https://static.api.nexon.co.kr/fifaonline4/latest/division.json', {
      headers: {
        Authorization: import.meta.env.REACT_APP_API_KEY_FIFA,
      },
    });

    return result.data;
  };

  // 매치 종류
  #getMatchtype = async <T extends MetaDataMatchtype>(): Promise<T[]> => {
    const result = await axios.get<T[]>('https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json', {
      headers: {
        Authorization: import.meta.env.REACT_APP_API_KEY_FIFA,
      },
    });

    return result.data;
  };

  // /users/{accessid}/markets?tradetype={tradetype}&offset={offset}&limit={limit}
  #getBuyTrageLog = async <T extends TradeLogInfo>(accessid: string, limit: number): Promise<T[]> => {
    const result = await this.instance.get<T[]>(`/users/${accessid}/markets`, {
      params: {
        tradetype: 'buy',
        limit,
      },
    });

    return result.data;
  };

  #getSellTrageLog = async <T extends TradeLogInfo>(accessid: string, limit: number): Promise<T[]> => {
    const result = await this.instance.get<T[]>(`/users/${accessid}/markets`, {
      params: {
        tradetype: 'sell',
        limit,
      },
    });

    return result.data;
  };
}
