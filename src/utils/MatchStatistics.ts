import { MatchDetail, matchInfoType } from '../types/api';

export const convertYardtoMeter = (yd: number): number => {
  return Number((yd * 0.9144).toFixed(2));
};

// 분모(시도 수) , 분자(성공 수)
export const calculatePercent = (denominator: number, numerator: number) => {
  if (denominator === 0) return 0;
  return Math.round((numerator / denominator) * 100);
};

export const calculateGoalTime = (num: number): string => {
  let min: string;
  let sec: string;

  if (num >= 16777216 && num < 16777216 * 2) {
    num -= 16777216;
    num += 45 * 60;
  }
  if (num >= 16777216 * 2 && num < 16777216 * 3) {
    num -= 16777216 * 2;
    num += 90 * 60;
  }
  if (num >= 16777216 * 3 && num < 16777216 * 4) {
    num -= 16777216 * 3;
    num += 105 * 60;
  }
  if (num >= 16777216 * 4 && num < 16777216 * 5) {
    num -= 16777216 * 4;
    num += 120 * 60;
  }
  min = String(Math.floor(num / 60));
  sec = String(Math.floor(num % 60));

  min = min.length === 1 ? `0${min}` : min;
  sec = sec.length === 1 ? `0${sec}` : sec;
  return `${min}:${sec}`;
};

export const getSeasonImg = (spid: number) => {
  const seasonId = Number(String(spid).slice(0, 3));
  let result = JSON.parse(localStorage.getItem('MetaData_seasonId')!);
  result = result.filter((i: any) => {
    return i.seasonId === seasonId;
  });

  return result[0].seasonImg;
};

export const convertPosition = (spPosition: number) => {
  let spPositionInfo = JSON.parse(localStorage.getItem('MetaData_spPosition')!);
  spPositionInfo = spPositionInfo.filter((i: any) => {
    return i.spposition === spPosition;
  });

  return spPositionInfo[0].desc;
};

export const convertPlayerName = (spid: number) => {
  let spidInfo = JSON.parse(localStorage.getItem('MetaData_spid')!);
  spidInfo = spidInfo.filter((i: any) => {
    return i.id === spid;
  });
  return spidInfo[0].name;
};

export const changeSpidToPid = (spid: number): number => {
  const pid = Number(String(spid).split('').slice(3).join(''));
  return pid;
};

//  matchInfo: [matchInfoType, matchInfoType];
export const showWinningpercentage = (matchDetail: MatchDetail[], userAccessId: string) => {
  const totalMatchCount = matchDetail.length;
  let winCount = 0;

  matchDetail.forEach((i) => {
    let myData = {} as matchInfoType;
    i.matchInfo[0].accessId === userAccessId ? (myData = { ...i.matchInfo[0] }) : (myData = { ...i.matchInfo[1] });

    if (myData.matchDetail.matchResult === '승') {
      winCount += 1;
    }
  });

  const result = {
    winCount,
    totalMatchCount,
    winningpercentage: Math.floor((winCount / totalMatchCount) * 100),
  };

  // return result;
  return `${result.winningpercentage}% ( ${result.winCount}/${result.totalMatchCount} )`;
};
