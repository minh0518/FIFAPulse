import { MatchDetail } from '../types/api';

export const calcTotalMatchCounts = (
  matchInfos: MatchDetail[],
  myNickname: string,
): { totalMatchLength: number; win: number; drawOrLose: number } => {
  let win = 0;
  let drawOrLose = 0;
  matchInfos.forEach((i) => {
    if (i.matchInfo[0].nickname === myNickname) {
      if (i.matchInfo[0].matchDetail.matchResult === '승') win += 1;
      else drawOrLose += 1;
    }
    if (i.matchInfo[1].nickname === myNickname) {
      if (i.matchInfo[1].matchDetail.matchResult === '승') win += 1;
      else drawOrLose += 1;
    }
  });

  return { totalMatchLength: matchInfos.length, win, drawOrLose };
};

export const calcWinngRate = (totalMatchLength: number, win: number): string => {
  return ((win / totalMatchLength) * 100).toFixed(2);
};
