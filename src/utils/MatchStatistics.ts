import React from 'react';
import goalImg from '../images/goalImg.jpg';
import { MatchDetail, matchInfoType } from '../types/api';
import { Position, PositionCordType } from '../types/others';

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

export const convertPosition = (spPosition: number): Position => {
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

export const extractGoalInfo = (shootDetail: MatchDetail['matchInfo'][0]['shootDetail']) => {
  const goalDetails = shootDetail.filter((i) => {
    return i.result === 3;
  });

  return goalDetails
    .sort((a, b) => {
      return a.goalTime - b.goalTime;
    })
    .map((i) => {
      return { ...i, goalTime: calculateGoalTime(i.goalTime) };
    });
};

export const checkOwnGoal = (ownGoal: number): React.ReactNode[] => {
  const imgElement = React.createElement('img', { src: goalImg, width: 18 });
  const listItems = Array.from({ length: ownGoal }, (_, i) =>
    React.createElement('li', { key: i }, imgElement, '자책골'),
  );
  return listItems;
};

export const myPositionCord: PositionCordType = {
  GK: {
    x: 20,
    y: 125,
    nameY: 140,
  },
  LB: {
    x: 60,
    y: 40,
    nameY: 55,
  },
  LWB: {
    x: 60,
    y: 40,
    nameY: 55,
  },
  LCB: {
    x: 60,
    y: 90,
    nameY: 105,
  },
  CB: {
    x: 60,
    y: 125,
    nameY: 140,
  },
  RCB: {
    x: 60,
    y: 160,
    nameY: 175,
  },
  RB: {
    x: 60,
    y: 210,
    nameY: 225,
  },
  RWB: {
    x: 60,
    y: 210,
    nameY: 225,
  },
  SW: {
    x: 55,
    y: 125,
    nameY: 140,
  },

  LDM: {
    x: 100,
    y: 85,
    nameY: 100,
  },
  CDM: {
    x: 95,
    y: 125,
    nameY: 140,
  },
  RDM: {
    x: 100,
    y: 165,
    nameY: 180,
  },

  LM: {
    x: 140,
    y: 35,
    nameY: 50,
  },
  LCM: {
    x: 130,
    y: 75,
    nameY: 90,
  },
  CM: {
    x: 130,
    y: 125,
    nameY: 140,
  },
  RCM: {
    x: 130,
    y: 175,
    nameY: 190,
  },
  RM: {
    x: 140,
    y: 215,
    nameY: 230,
  },

  LAM: {
    x: 160,
    y: 65,
    nameY: 80,
  },
  CAM: {
    x: 160,
    y: 125,
    nameY: 140,
  },
  RAM: {
    x: 160,
    y: 185,
    nameY: 200,
  },

  LW: {
    x: 205,
    y: 35,
    nameY: 50,
  },
  RW: {
    x: 205,
    y: 215,
    nameY: 230,
  },
  LF: {
    x: 190,
    y: 65,
    nameY: 80,
  },
  CF: {
    x: 190,
    y: 125,
    nameY: 140,
  },
  RF: {
    x: 190,
    y: 185,
    nameY: 200,
  },
  LS: {
    x: 215,
    y: 70,
    nameY: 85,
  },
  ST: {
    x: 220,
    y: 125,
    nameY: 140,
  },
  RS: {
    x: 215,
    y: 180,
    nameY: 195,
  },
};

export const otherPositionCord: PositionCordType = {
  GK: {
    x: 480 - myPositionCord.GK.x,
    y: 125,
    nameY: 140,
  },
  LB: {
    x: 480 - myPositionCord.LB.x,
    y: myPositionCord.RB.y,
    nameY: myPositionCord.RB.nameY,
  },
  LWB: {
    x: 480 - myPositionCord.LWB.x,
    y: myPositionCord.RWB.y,
    nameY: myPositionCord.RWB.nameY,
  },
  LCB: {
    x: 480 - myPositionCord.LCB.x,
    y: myPositionCord.RCB.y,
    nameY: myPositionCord.RCB.nameY,
  },
  CB: {
    x: 480 - myPositionCord.CB.x,
    y: 125,
    nameY: 140,
  },
  RCB: {
    x: 480 - myPositionCord.RCB.x,
    y: myPositionCord.LCB.y,
    nameY: myPositionCord.LCB.nameY,
  },
  RB: {
    x: 480 - myPositionCord.RB.x,
    y: myPositionCord.LB.y,
    nameY: myPositionCord.LB.nameY,
  },
  RWB: {
    x: 480 - myPositionCord.RWB.x,
    y: myPositionCord.LWB.y,
    nameY: myPositionCord.LWB.nameY,
  },
  SW: {
    x: 480 - myPositionCord.SW.x,
    y: 125,
    nameY: 140,
  },

  LDM: {
    x: 480 - myPositionCord.LDM.x,
    y: myPositionCord.RDM.y,
    nameY: myPositionCord.RDM.nameY,
  },
  CDM: {
    x: 480 - myPositionCord.CDM.x,
    y: 125,
    nameY: 140,
  },
  RDM: {
    x: 480 - myPositionCord.RDM.x,
    y: myPositionCord.LDM.y,
    nameY: myPositionCord.LDM.nameY,
  },

  LM: {
    x: 480 - myPositionCord.LM.x,
    y: myPositionCord.RM.y,
    nameY: myPositionCord.RM.nameY,
  },
  LCM: {
    x: 480 - myPositionCord.LCM.x,
    y: myPositionCord.RCM.y,
    nameY: myPositionCord.RCM.nameY,
  },
  CM: {
    x: 480 - myPositionCord.CM.x,
    y: 125,
    nameY: 140,
  },
  RCM: {
    x: 480 - myPositionCord.RCM.x,
    y: myPositionCord.LCM.y,
    nameY: myPositionCord.LCM.nameY,
  },
  RM: {
    x: 480 - myPositionCord.RM.x,
    y: myPositionCord.LM.y,
    nameY: myPositionCord.LM.nameY,
  },

  LAM: {
    x: 480 - myPositionCord.LAM.x,
    y: myPositionCord.RAM.y,
    nameY: myPositionCord.RAM.nameY,
  },
  CAM: {
    x: 480 - myPositionCord.CAM.x,
    y: 125,
    nameY: 140,
  },
  RAM: {
    x: 480 - myPositionCord.RAM.x,
    y: myPositionCord.LAM.y,
    nameY: myPositionCord.LAM.nameY,
  },

  LW: {
    x: 480 - myPositionCord.LW.x,
    y: myPositionCord.RW.y,
    nameY: myPositionCord.RW.nameY,
  },
  RW: {
    x: 480 - myPositionCord.RW.x,
    y: myPositionCord.LW.y,
    nameY: myPositionCord.LW.nameY,
  },
  LF: {
    x: 480 - myPositionCord.LF.x,
    y: myPositionCord.RF.y,
    nameY: myPositionCord.RF.nameY,
  },
  CF: {
    x: 480 - myPositionCord.CF.x,
    y: 125,
    nameY: 140,
  },
  RF: {
    x: 480 - myPositionCord.RF.x,
    y: myPositionCord.LF.y,
    nameY: myPositionCord.LF.nameY,
  },
  LS: {
    x: 480 - myPositionCord.LS.x,
    y: myPositionCord.RS.y,
    nameY: myPositionCord.RS.nameY,
  },
  ST: {
    x: 480 - myPositionCord.ST.x,
    y: 125,
    nameY: 140,
  },
  RS: {
    x: 480 - myPositionCord.RS.x,
    y: myPositionCord.LS.y,
    nameY: myPositionCord.LS.nameY,
  },
};

export const mySubPositionCord = [
  { x: 20, y: 275, nameY: 290 },
  { x: 50, y: 275, nameY: 290 },
  { x: 80, y: 275, nameY: 290 },
  { x: 110, y: 275, nameY: 290 },
  { x: 140, y: 275, nameY: 290 },
  { x: 170, y: 275, nameY: 290 },
  { x: 200, y: 275, nameY: 290 },
];

export const otherSubPositionCord = mySubPositionCord.map((i) => {
  return { ...i, x: 480 - i.x };
});
