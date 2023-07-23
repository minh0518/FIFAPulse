import React, { useEffect, useState } from 'react';
import { DropDownList, DropDownUl, Input, InputSection } from './PlayerNameInput.styled';
import { getStringMatchResults } from '../../utils/positionGuide';

const arr = ['카림 벤제마', '비니시우스 주니오르', '킬리안 음바페', '토니 크로스', '데이비드 알라바', '데이비드 베컴', '주드 벨링엄'];

const PlayerNameInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState<string[]>([]);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  useEffect(() => {
    const showDropDownList = () => {
      if (inputValue === '') {
        setIsHaveInputValue(false);
        setDropDownList([]);
      }
      if (inputValue !== '') {
        const strList = getStringMatchResults(inputValue, arr);
        setDropDownList(strList);
      }
    };

    showDropDownList();
  }, [inputValue]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue(value);
    setIsHaveInputValue(true);
  };

  const selectDropDownItem = (selectedItem: string) => {
    setInputValue(selectedItem);
    setIsHaveInputValue(false);
  };

  const handleDropDownKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isHaveInputValue) {
      if (event.key === 'ArrowDown' && dropDownList.length - 1 > dropDownItemIndex) {
        setDropDownItemIndex((prev) => prev + 1);
      }
      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0) {
        setDropDownItemIndex((prev) => prev - 1);
      }
      if (event.key === 'Enter' && dropDownItemIndex >= 0) {
        selectDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  return (
    <div>
      {/* <InputSection isHaveInputValue={isHaveInputValue}>
        <Input value={inputValue} onChange={onInputChange} onKeyUp={handleDropDownKey} />
      </InputSection> */}
      {isHaveInputValue && (
        <DropDownUl>
          {dropDownList.length === 0
            ? '해당하는 단어가 없습니다'
            : dropDownList.map((i, index) => {
                return (
                  <DropDownList
                    key={index}
                    onClick={() => selectDropDownItem(i)}
                    onMouseOver={() => setDropDownItemIndex(index)}
                    mouseOverIndex={dropDownItemIndex}
                    listIndex={index}
                  >
                    {i}
                  </DropDownList>
                );
              })}
        </DropDownUl>
      )}
    </div>
  );
};

export default PlayerNameInput;
