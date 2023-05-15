import styled from 'styled-components';

export const MainHeading = styled.h1`
  width: 100%;
  height: 600px;
  border: 1px solid black;
`;

type MyRecordSlideProps = {
  myRecord: boolean;
};
export const MyRecordDiv = styled.div<MyRecordSlideProps>`
  display: ${(props) => (props.myRecord ? 'block' : 'none')};
  width: 100%;
  height: 500px;
`;

type PositionGuideSlideProps = {
  positionGuide: boolean;
};
export const PositionGuideDiv = styled.div<PositionGuideSlideProps>`
  display: ${(props) => (props.positionGuide ? 'block' : 'none')};
  width: 100%;
  height: 500px;
`;

type UserRecordSlideProps = {
  userRecord: boolean;
};
export const UserRecordDiv = styled.div<UserRecordSlideProps>`
  display: ${(props) => (props.userRecord ? 'block' : 'none')};
  width: 100%;
  height: 500px;
`;

type ChallengeSliceProps = {
  gameChallenge: boolean;
};

export const ChallengeDiv = styled.div<ChallengeSliceProps>`
  display: ${(props) => (props.gameChallenge ? 'block' : 'none')};
  width: 100%;
  height: 500px;
`;
