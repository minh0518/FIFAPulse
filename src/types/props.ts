import { MatchDetail } from './api';
import { myDataIndex, selectedUsertStatistics } from './states';

export interface MatchStatisticsProps {
  matchDetail: MatchDetail;
  myDataIndex: myDataIndex;
  selectedUsertStatistics: selectedUsertStatistics;
}
