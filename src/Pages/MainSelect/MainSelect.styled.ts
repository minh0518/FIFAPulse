import { link } from 'fs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 메인 상단 문구
export const MainSelectContainerDiv = styled.div`
  height: 3500px;
`;
export const MainMenuDescriptionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  border: 1px solid black;

  h1 {
    text-align: center;
    font-size: 3.5rem;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
  }
`;

// 내 기록
type MyRecordSlideProps = {
  myRecord: boolean;
};
export const MyRecordDiv = styled.div<MyRecordSlideProps>`
  display: ${(props) => (props.myRecord ? 'block' : 'none')};
  width: 100%;
  height: 18%;
`;
export const MyRecordLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // font-size: 4rem;
  text-decoration: none;
  /* color: black;
  font-weight: bolder; */

  // 투명도가 0일때는 rgb로 설정한 색상적용 안 되며
  // 투명도가 1일때는 rgb로 설정한 색상으로 되는 것이다
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 1) 100%
    ),
    url('src/images/myRecord.png');
  background-size: cover;
  background-position: center;
`;

export const MyRecordParagraph = styled.p`
  font-size: 4rem;
  color: black;
  font-weight: bolder;
  margin-left: 300px; // 이렇게 직접 뚫어야 하나...
`;

// 선수 포지션 추천 가이드
type PositionGuideSlideProps = {
  positionGuide: boolean;
};
export const PositionGuideDiv = styled.div<PositionGuideSlideProps>`
  display: ${(props) => (props.positionGuide ? 'block' : 'none')};
  width: 100%;
  height: 18%;
`;
export const PositionGuideLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 1) 100%
    ),
    url('src/images/positionGuide.jpg');
  background-size: cover;
  background-position: center;
`;

// 다른 유저 검색하기
type UserRecordSlideProps = {
  userRecord: boolean;
};
export const UserRecordDiv = styled.div<UserRecordSlideProps>`
  display: ${(props) => (props.userRecord ? 'block' : 'none')};
  width: 100%;
  height: 18%;
`;
export const UserRecordLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 1) 100%
    ),
    url('src/images/userRecord.jpg');
  background-size: cover;
  background-position: center;
`;

// 챌린지
type ChallengeSliceProps = {
  gameChallenge: boolean;
};
export const ChallengeDiv = styled.div<ChallengeSliceProps>`
  display: ${(props) => (props.gameChallenge ? 'block' : 'none')};
  width: 100%;
  height: 18%;
`;
export const ChallengeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 1) 100%
    ),
    url('src/images/challengeImg.png');
  background-size: cover;
  background-position: center;
`;
