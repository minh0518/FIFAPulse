export const getStringMatchResults = (inputValue: string, dropDownList: any) => {
  // [{id: 280155862, name: '세르히오 라모스'}]
  const result = dropDownList.filter((i: any) => {
    return i.name.split(' ').join('').includes(inputValue.split(' ').join(''));
  });

  return result;
};
export const tmp = '';

export const getMaxInfo = (rankerInfo: any) => {
  const maxInfo = {
    shoot: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.shoot - a[0].status.shoot;
      })[0][0].status.shoot,
    ),
    effectiveShoot: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.effectiveShoot - a[0].status.effectiveShoot;
      })[0][0].status.effectiveShoot,
    ),
    assist: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.assist - a[0].status.assist;
      })[0][0].status.assist,
    ),
    goal: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.goal - a[0].status.goal;
      })[0][0].status.goal,
    ),
    dribbleTry: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.dribbleTry - a[0].status.dribbleTry;
      })[0][0].status.dribbleTry,
    ),
    dribbleSuccess: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.dribbleSuccess - a[0].status.dribbleSuccess;
      })[0][0].status.dribbleSuccess,
    ),
    passTry: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.passTry - a[0].status.passTry;
      })[0][0].status.passTry,
    ),
    passSuccess: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.passSuccess - a[0].status.passSuccess;
      })[0][0].status.passSuccess,
    ),
    block: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.block - a[0].status.block;
      })[0][0].status.block,
    ),
    tackle: Number(
      [...rankerInfo].sort((a, b) => {
        return b[0].status.tackle - a[0].status.tackle;
      })[0][0].status.tackle,
    ),
  };
  return maxInfo;
};
