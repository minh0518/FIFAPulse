import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import challenge from '../../images/challenge.png';
import championsLeague from '../../images/championsLeague.jpg';
import myRecord from '../../images/myRecord.png';
import positionGuide from '../../images/positionGuide.jpg';
import userRecord from '../../images/userRecord.jpg';

const ELEMENT_HEIGHT: number = 3500;

// 메인 상단 문구
export const MainSelectContainerDiv = styled.div`
  height: ${ELEMENT_HEIGHT}px;
  background-color: #e9ebee; //최상위 App에서는 높이가 100vh이므로 이 높이까지만
  //적용이 됨. 그러므로 이 페이는 3500px이니까 나머지 부분까지 채우기 위해서
  //여기에 추가로 동일한 색상 적용
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

// 스크롤 안내 문구
// 스크롤해서 메뉴가 뜨게 되면 어차피 display:none이 되므로
// 아래 메뉴들에 연관된 padding이나 margin을 고려 할 필요 없음
type scrollPointProps = {
  scrollPoint: number;
};
export const ScrollNoticeDiv = styled.div<scrollPointProps>`
  width: 100%;
  display: ${(props) => (props.scrollPoint > 0.01 ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;

export const ScrollNoticeParagraph = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

// 내 기록
type MyRecordSlideProps = {
  myRecord: boolean;
};

export const MyRecordDiv = styled.div<MyRecordSlideProps>`
  display: ${(props) => (props.myRecord ? 'block' : 'none')};

  height: 17%;
  box-sizing: border-box;
  width: 80%; // 한 메뉴 전체의 폭을 80%해서 양 옆 여백을 줌
  padding: 3.5% 0% 3.5% 0%; // 나머지 메뉴들과 비율 통일
  margin: 0 auto;
`;
export const MyRecordLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center; // 내 기록이라 적힌 MyRecordParagraph을 Link 영역 정중앙 배치
  width: 70%; // Link버튼 영역을 100%->70%으로 줄여서 옆에 RightDescriptionHeading의 구역을 확보
  height: 100%;
  text-decoration: none;

  // 투명도가 0일때는 rgb로 설정한 색상적용 안 되며
  // 투명도가 1일때는 rgb로 설정한 색상으로 되는 것이다
  background: linear-gradient(
      to right,
      rgba(233, 235, 238, 0) 10%,
      rgba(233, 235, 238, 0) 25%,
      rgba(233, 235, 238, 0) 40%,
      rgba(233, 235, 238, 0.2) 50%,
      rgba(233, 235, 238, 0.4) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    linear-gradient(
      to left,
      rgba(233, 235, 238, 0) 10%,
      rgba(233, 235, 238, 0) 25%,
      rgba(233, 235, 238, 0) 40%,
      rgba(233, 235, 238, 0.2) 50%,
      rgba(233, 235, 238, 0.4) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    url(${myRecord});
  background-size: 60% 100%;
  background-repeat: no-repeat;
  background-position: left; // MyRecordLink 영역에서 살짝 왼쪽에 배치
  /* background-size: cover;
  background-position: center; */
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

  height: 17%;
  box-sizing: border-box;
  width: 80%;
  padding: 3.5% 0% 3.5% 0%; // 윗 컴포넌트 3.5+ 현재컴포넌트 3.5해서 7%을 맞추기 3.5를 사용
  margin: 0 auto;
`;
export const UserRecordLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  text-decoration: none;

  background: linear-gradient(
      to right,
      rgba(233, 235, 238, 0) 10%,
      rgba(233, 235, 238, 0) 25%,
      rgba(233, 235, 238, 0) 40%,
      rgba(233, 235, 238, 0) 50%,
      rgba(233, 235, 238, 0.4) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    linear-gradient(
      to left,
      rgba(233, 235, 238, 0) 10%,
      rgba(233, 235, 238, 0) 25%,
      rgba(233, 235, 238, 0) 40%,
      rgba(233, 235, 238, 0) 50%,
      rgba(233, 235, 238, 0.4) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    url(${userRecord});
  background-size: 60% 100%;
  background-repeat: no-repeat;
  background-position: right;
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

  height: 17%;
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;
  padding: 3.5% 0% 3.5% 0%;
`;
export const PositionGuideLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  text-decoration: none;

  background: linear-gradient(
      to right,
      rgba(233, 235, 238, 0) 10%,
      rgba(233, 235, 238, 0) 25%,
      rgba(233, 235, 238, 0) 40%,
      rgba(233, 235, 238, 0.2) 50%,
      rgba(233, 235, 238, 0.4) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    linear-gradient(
      to left,
      rgba(233, 235, 238, 0) 10%,
      rgba(233, 235, 238, 0) 25%,
      rgba(233, 235, 238, 0) 40%,
      rgba(233, 235, 238, 0.2) 50%,
      rgba(233, 235, 238, 0.4) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    url(${positionGuide});
  background-size: 60% 100%;
  background-repeat: no-repeat;
  background-position: left;
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

  height: 17%;
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;
  padding: 3.5% 0% 3.5% 0%;
`;
export const ChallengeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  text-decoration: none;

  background: linear-gradient(
      to right,
      rgba(233, 235, 238, 0) 10%,
      rgba(233, 235, 238, 0) 25%,
      rgba(233, 235, 238, 0) 40%,
      rgba(233, 235, 238, 0.2) 50%,
      rgba(233, 235, 238, 0.4) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    linear-gradient(
      to left,
      rgba(233, 235, 238, 0) 10%,
      rgba(233, 235, 238, 0) 25%,
      rgba(233, 235, 238, 0) 40%,
      rgba(233, 235, 238, 0.2) 50%,
      rgba(233, 235, 238, 0.4) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    url(${challenge});
  background-size: 60% 100%;
  background-repeat: no-repeat;
  background-position: right;
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
  //width: 50%;
`;

export const LeftDescriptionHeading = styled.h1`
  padding-top: 10%;
  padding-right: 5%;
  max-width: 20%;
`;
