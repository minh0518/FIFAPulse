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
