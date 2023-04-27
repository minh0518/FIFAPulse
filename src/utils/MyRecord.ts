export const convetDivisionNumberToDivisionName = (input: number) => {
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
