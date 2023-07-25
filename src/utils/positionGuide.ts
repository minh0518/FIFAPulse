export const getStringMatchResults = (inputValue: string, dropDownList: any) => {
  // [{id: 280155862, name: '세르히오 라모스'}]
  const result = dropDownList.filter((i: any) => {
    return i.name.split(' ').join('').includes(inputValue.split(' ').join(''));
  });

  return result;
};
export const tmp = '';
