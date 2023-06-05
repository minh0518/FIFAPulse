import styled from 'styled-components';

// type scrollPointProps = {
//     scrollPoint: number;
//   };
//   export const ScrollNoticeDiv = styled.div<scrollPointProps>`
//     width: 100%;
//     display: ${(props) => (props.scrollPoint > 0.01 ? 'none' : 'flex')};
//     justify-content: center;
//     align-items: center;
//   `;

type imgSize = {
  width: number;
  height: number;
};

export const Img = styled.img<imgSize>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
`;

export const tmp = '';
