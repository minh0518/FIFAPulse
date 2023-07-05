import { MatchDetail, matchInfoType } from './api';
import { myDataIndex, selectedUsertStatistics } from './states';

export interface MatchStatisticsProps {
  // matchDetail: MatchDetail;
  // myDataIndex: myDataIndex;
  // selectedUsertStatistics: selectedUsertStatistics;
  myMatchInfo: matchInfoType;
  otherMatchInfo: matchInfoType;
}

export interface MatchInfos {
  matchInfos: matchInfoType[];
}

// export interface DefenceProps {
//   //  MatchDetail['matchInfo'][0]['defence'] 형태의 데이터가 담긴 배열이므로 뒤에 []사용
//   shortCutDefence: () => MatchDetail['matchInfo'][0]['defence'][];
// }

// export interface PassProps {
//   shortCutPass: () => MatchDetail['matchInfo'][0]['pass'][];
// }

// export interface PlayerProps {
//   shortCutPlayer: () => MatchDetail['matchInfo'][0]['player'][];
// }

// export interface ShootProps {
//   shortCutShoot: () => MatchDetail['matchInfo'][0]['shoot'][];
//   shortCutShootDetail: () => MatchDetail['matchInfo'][0]['shootDetail'][];
// }

export interface PlayerImgProps {
  spId: number;
  width: number;
  height: number;
}

// styled-components
export interface pathNameProps {
  pathName: string;
}

export interface NavBarProps {
  scrollPoint?: number;
  page: string;
}

export interface FooterProps {
  scrollPoint?: number;
  page: string;
}

export interface GameResultProps {
  result: string;
}

export interface tradeTypeProps {
  tradeType: string;
}

export interface MatchLengthProps {
  matchLength: number;
  variant: number;
}

export interface NickNameProps {
  myDataIndex: number;
  selectedUsertStatistics: number;
}

export interface AssistProps {
  assist: boolean;
}
