import React, { useEffect, useState } from 'react';
import { DeleteButton, DropDownList, DropDownUl, Input, InputSection } from './PlayerNameInput.styled';
import { getStringMatchResults } from '../../utils/positionGuide';

// const arr = ['카림 벤제마', '비니시우스 주니오르', '킬리안 음바페', '토니 크로스', '데이비드 알라바', '데이비드 베컴', '주드 벨링엄'];

const PlayerNameInput = ({ seasonId, setConfirmedPlayerNameInput, playerListBySeason }: any) => {
  const [inputValue, setInputValue] = useState('');
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState<{ id: number; name: string }[]>([]);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  useEffect(() => {
    const showDropDownList = () => {
      if (inputValue === '') {
        // 입력 값이 없으면 드롭다운 박스를 안 보여줌
        setIsHaveInputValue(false);
        // setDropDownList([]);
      }
      if (inputValue !== '') {
        // 입력 값이 있을때 매치되는 문자열 탐색 후 드롭다운 박스로 보여줌
        const strList = getStringMatchResults(inputValue, playerListBySeason);
        setDropDownList(strList);
      }
    };

    showDropDownList();
  }, [inputValue]);

  useEffect(() => {
    const checkChangeSeasonId = () => {
      setInputValue('');
      setIsHaveInputValue(false);
      setConfirmedPlayerNameInput(null);
    };

    checkChangeSeasonId();
  }, [seasonId]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue(value);
    setIsHaveInputValue(true);
  };

  // 최종적으로 입력값을 적용하는 함수
  const selectDropDownItem = (selectedItem: { id: number; name: string }) => {
    setConfirmedPlayerNameInput(selectedItem);
    setInputValue(selectedItem.name);
    setIsHaveInputValue(false);
  };

  const onClickDeleteButton = () => {
    setInputValue('');
    setIsHaveInputValue(false);
  };

  // 키보드로 선택했을 때
  const handleDropDownKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isHaveInputValue) {
      if (event.key === 'ArrowDown' && dropDownList.length - 1 > dropDownItemIndex) {
        setDropDownItemIndex((prev) => prev + 1);
      }
      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0) {
        setDropDownItemIndex((prev) => prev - 1);
      }

      // 엔터키로 선택했을 때 (방향키로 이동 후 엔터)
      if (event.key === 'Enter' && dropDownItemIndex >= 0 && dropDownList.length) {
        selectDropDownItem(dropDownList[dropDownItemIndex]);

        // 음수로 바꿔줘야 드롭다운의 영역을 아예 벗어난 것이 됨
        setDropDownItemIndex(-1);
      }

      // 엔터키로 선택했을 때 (방향키로 드롭다운 선택하는게 아니라 인풋창에 이름만 치고 엔터)
      // '카렘벤제마' 로 입력해도 '카림 벤제마' 가 리스트에서 선택되어야 하므로 띄워쓰기 제거후 비교
      if (
        event.key === 'Enter' &&
        dropDownItemIndex === -1 &&
        dropDownList.length &&
        inputValue.split(' ').join('') === dropDownList[0].name.split(' ').join('')
      ) {
        selectDropDownItem(dropDownList[0]);
        setDropDownItemIndex(-1);
      }
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <InputSection isHaveInputValue={isHaveInputValue}>
        <Input
          value={seasonId === 0 ? '시즌을 먼저 선택 해 주세요' : inputValue}
          onChange={onInputChange}
          onKeyUp={handleDropDownKey}
          disabled={seasonId === 0}
        />

        <DeleteButton onClick={onClickDeleteButton}>&times;</DeleteButton>
      </InputSection>
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
                    {i.name}
                  </DropDownList>
                );
              })}
        </DropDownUl>
      )}
    </div>
  );
};

export default PlayerNameInput;
