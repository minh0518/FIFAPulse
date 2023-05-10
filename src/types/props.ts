import { MatchDetail, matchInfoType } from './api';
import { myDataIndex, selectedUsertStatistics } from './states';

export interface MatchStatisticsProps {
  matchDetail: MatchDetail;
  myDataIndex: myDataIndex;
  selectedUsertStatistics: selectedUsertStatistics;
}

export interface PassProps {
  shortCutPass: () => MatchDetail['matchInfo'][0]['pass'];
}

export interface DefenceProps {
  shortCutDefence: () => MatchDetail['matchInfo'][0]['defence'];
}
export interface PlayerProps {
  shortCutPlayer: () => MatchDetail['matchInfo'][0]['player'];
}

export interface ShootProps {
  shortCutShoot: () => MatchDetail['matchInfo'][0]['shoot'];
  shortCutShootDetail: () => MatchDetail['matchInfo'][0]['shootDetail'];
}

export interface PlayerImgProps {
  spId: number;
}
