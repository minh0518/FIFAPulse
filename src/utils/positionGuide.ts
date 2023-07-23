export const getStringMatchResults = (inputValue: string, dropDownList: string[]): string[] => {
  const result = dropDownList.filter((i) => {
    return i.split(' ').join('').includes(inputValue.split(' ').join(''));
  });

  return result;
};
export const tmp = '';
