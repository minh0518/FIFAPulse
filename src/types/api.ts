export interface NexonUserInfo {
  accessId: string;
  nickname: string;
  level: number;
}

// {id: 101000250, name: "데이비드 베컴"}
export interface MetaDataSpid {
  id: number;
  name: string;
}

// {className: "22 UCL (22 UEFA Champions League)",seasonId:280,seasonImg: "https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/season/22ucl.png"}
export interface MetaDataSeasonId {
  seasonId: number;
  className: string;
  seasonImg: string;
}

// {spposition: 18, desc: "CAM"}
export interface MetaDataSpposition {
  spposition: number;
  desc: string;
}

// {divisionId: 800, divisionName: "슈퍼챔피언스"}
export interface MetaDataDivision {
  divisionId: number;
  divisionName: string;
}

// {matchtype: 50, desc: "공식경기"}
export interface MetaDataMatchtype {
  matchtype: number;
  desc: string;
}
