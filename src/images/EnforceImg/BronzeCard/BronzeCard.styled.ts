import styled from 'styled-components';

export const BronzeCardContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(silver, #b0b0b0);
  width: 30px;
  height: 18px;
  border: 1px solid #b0b0b0;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

export const EnhancementNumberParagraph = styled.p`
  font-size: 0.8em; /* 텍스트 크기를 늘림 */
  color: #4e545e;
  font-weight: 100;
  line-height: 1; /* 텍스트가 박스를 꽉 채우도록 설정 */
  text-shadow: 1px 1px 2px #000000;
`;
