import { Link } from 'react-router-dom';
import styled from 'styled-components';
import challenge from '../../images/challenge.png';
import championsLeague from '../../images/championsLeague.jpg';
import myRecord from '../../images/myRecord.png';
import positionGuide from '../../images/positionGuide.jpg';
import userRecord from '../../images/userRecord.jpg';

const ELEMENT_HEIGHT: number = 3500;

// 메인 상단 문구
export const MainSelectContainerDiv = styled.div`
  height: ${ELEMENT_HEIGHT}px;
`;
export const MainMenuDescriptionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  color: black;
  background: linear-gradient(rgba(6, 15, 56, 0.3), rgba(6, 15, 56, 0.5)), url(${championsLeague});
  background-size: cover;
  background-attachment: fixed;

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
  height: 20%;
  box-sizing: border-box;
  padding: 7% 10% 3.5% 0%;
  border-radius: 20px;
`;
export const MyRecordLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  // 따로 MyRecordParagraph 만들어서 적용
  // font-size: 4rem;
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
    url(${myRecord});
  background-size: cover;
  background-position: center;
`;

export const MyRecordParagraph = styled.p`
  font-size: 4rem;
  color: black;
  font-weight: bolder;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.4rem;

  // margin-left: 300px; // 이렇게 직접 뚫어야 하나...
`;

// 다른 유저 검색하기
type UserRecordSlideProps = {
  userRecord: boolean;
};
export const UserRecordDiv = styled.div<UserRecordSlideProps>`
  display: ${(props) => (props.userRecord ? 'block' : 'none')};
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  padding: 3.5% 0% 3.5% 10%; // 윗 컴포넌트 3.5+ 현재컴포넌트 3.5해서 7%을 맞추기 위해
  // padding-top을 3.5로
`;
export const UserRecordLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 1) 100%
    ),
    url(${userRecord});
  background-size: cover;
  background-position: center;
`;

export const UserRecordParagraph = styled.p`
  font-size: 4rem;
  color: black;
  font-weight: bolder;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.4rem;
`;

// 선수 포지션 추천 가이드
type PositionGuideSlideProps = {
  positionGuide: boolean;
};
export const PositionGuideDiv = styled.div<PositionGuideSlideProps>`
  display: ${(props) => (props.positionGuide ? 'block' : 'none')};
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  padding: 3.5% 10% 3.5% 0%;
`;
export const PositionGuideLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 1) 100%
    ),
    url(${positionGuide});
  background-size: cover;
  background-position: center;
`;

export const PositionGuideParagraph = styled.p`
  font-size: 4rem;
  color: black;
  font-weight: bolder;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.4rem;
`;

// 챌린지
type ChallengeSliceProps = {
  gameChallenge: boolean;
};
export const ChallengeDiv = styled.div<ChallengeSliceProps>`
  display: ${(props) => (props.gameChallenge ? 'block' : 'none')};
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  padding: 3.5% 0% 3.5% 10%;
`;
export const ChallengeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 1) 100%
    ),
    url(${challenge});
  background-size: cover;
  background-position: center;
`;
export const ChallengeParagraph = styled.p`
  font-size: 4rem;
  color: black;
  font-weight: bolder;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 1rem;
`;

export const LinkAndDescriptionDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const RightDescriptionHeading = styled.h1`
  padding-top: 10%;
  padding-left: 5%;
  max-width: 20%;
`;

export const LeftDescriptionHeading = styled.h1`
  padding-top: 10%;
  padding-right: 5%;
  max-width: 20%;
`;
