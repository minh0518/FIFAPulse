export const convertDivisionNumberToDivisionName = (input: number) => {
  const result = JSON.parse(localStorage.getItem('MetaData_division')!);

  let divisionName = '';
  result.forEach((i: any) => {
    if (i.divisionId === input) {
      divisionName = i.divisionName;
    }
  });
  return divisionName;
};

export const showMyNickNameFirst = (nicknames: string[], currentLoginUser: string): string[] => {
  return nicknames[0] === currentLoginUser ? [nicknames[0], nicknames[1]] : [nicknames[1], nicknames[0]];
};

// export const showResult = (my: string, opponent: string, matchResult:string) => {};

export const convertDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export const convertDateAndTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${year}.${month}.${day} ${hours}:${minutes}`;
};
