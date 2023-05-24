import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import {
  ChallengeDiv,
  MainMenuDescriptionDiv,
  MainSelectContainerDiv,
  MyRecordDiv,
  PositionGuideDiv,
  UserRecordDiv,
  MyRecordLink,
  PositionGuideLink,
  UserRecordLink,
  ChallengeLink,
  MyRecordParagraph,
  UserRecordParagraph,
  PositionGuideParagraph,
  ChallengeParagraph,
  RightDescriptionHeading,
  LinkAndDescriptionDiv,
  LeftDescriptionHeading,
  ScrollNoticeDiv,
  ScrollNoticeParagraph,
} from './MainSelect.styled';
import Navbar from '../../Components/Navbar';
import FIFAData from '../../Services/FifaData';

const MainSelect = () => {
  const ELEMENT_HEIGHT: number = 3500;

  const [slideInfo, setSlideInfo] = useState({
    heading: true,
    myRecord: false,
    positionGuide: false,
    userRecord: false,
    gameChallenge: false,
  });

  const checkScroll = () => {
    const scrollPosition = window.pageYOffset;
    const animationPoint = Number((scrollPosition / ELEMENT_HEIGHT).toFixed(2));
    console.log(animationPoint);
    console.log(window.pageYOffset);

    // 스크롤을 내릴때만 애니메이션을 적용하기 위해
    // triggerOnce을 적용하고(=1회성 slide), 상위로 올라왔을 때 상태값을 false로 초기화
    // 다시 true로 변경되면 display가 none에서 block이되는 것이므로 1회성 slide가 다시 재생성
    // if (window.pageYOffset < 200)
    if (animationPoint < 0.01) {
      setSlideInfo({
        heading: true,
        myRecord: false,
        positionGuide: false,
        userRecord: false,
        gameChallenge: false,
      });
    }

    if (animationPoint >= 0.01) {
      setSlideInfo((prev) => {
        return { ...prev, myRecord: true };
      });
    }

    if (animationPoint >= 0.23) {
      setSlideInfo((prev) => {
        return { ...prev, userRecord: true };
      });
    }

    if (animationPoint >= 0.41) {
      setSlideInfo((prev) => {
        return { ...prev, positionGuide: true };
      });
    }

    if (animationPoint >= 0.59) {
      setSlideInfo((prev) => {
        return { ...prev, gameChallenge: true };
      });
    }
  };

  useEffect(() => {
    const getMeataData = async () => {
      const fifa = new FIFAData();
      const [matchType, seasonId, spid, division, spPosition] = await fifa.getInfoMetaData();
      localStorage.setItem('MetaData_spid', JSON.stringify(spid));
      localStorage.setItem('MetaData_matchType', JSON.stringify(matchType));
      localStorage.setItem('MetaData_seasonId', JSON.stringify(seasonId));
      localStorage.setItem('MetaData_division', JSON.stringify(division));
      localStorage.setItem('MetaData_spPosition', JSON.stringify(spPosition));
    };

    getMeataData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll); // 컴포넌트 최초 렌더링 후 작동
    return () => window.removeEventListener('scroll', checkScroll); // 컴포넌트가 언마운트 될 때 작동
  }, []);

  return (
    <>
      <Navbar scrollPoint={Number((window.pageYOffset / ELEMENT_HEIGHT).toFixed(2))} page="MainSelect" />
      <MainSelectContainerDiv>
        <MainMenuDescriptionDiv>
          <Fade delay={100}>
            <Slide direction="down" delay={200}>
              <h1>직접 분석하고 , 변화를 추구해 보세요</h1>
              <h2>피파온라인에서 제공하는 다양한 통계를 활용 할 수 있습니다</h2>
            </Slide>
          </Fade>
        </MainMenuDescriptionDiv>
        <ScrollNoticeDiv scrollPoint={Number((window.pageYOffset / ELEMENT_HEIGHT).toFixed(2))}>
          <ScrollNoticeParagraph>스크롤 해서 확인!</ScrollNoticeParagraph>
        </ScrollNoticeDiv>
        <MyRecordDiv myRecord={slideInfo.myRecord}>
          <Fade triggerOnce style={{ height: '100%' }}>
            {/* MyRecordLink의 height를 MyRecordDiv의 height로 사용하기 위해 애니메이션 적용 요소들에 height:100%을 적용 */}
            <Slide triggerOnce direction="left" style={{ height: '100%' }}>
              <LinkAndDescriptionDiv>
                <MyRecordLink to="my-record">
                  <MyRecordParagraph>내 기록</MyRecordParagraph>
                </MyRecordLink>
                <RightDescriptionHeading>
                  매치 종류별 통계와 <br /> 이적시장 기록을 확인 해 보세요!
                </RightDescriptionHeading>
              </LinkAndDescriptionDiv>
            </Slide>
          </Fade>
        </MyRecordDiv>
        <UserRecordDiv userRecord={slideInfo.userRecord}>
          <Fade triggerOnce style={{ height: '100%' }}>
            <Slide triggerOnce direction="right" style={{ height: '100%' }}>
              <LinkAndDescriptionDiv>
                <LeftDescriptionHeading>파파온라인4의 유저들을 검색해 보세요!</LeftDescriptionHeading>
                <UserRecordLink to="user-record">
                  <UserRecordParagraph>다른 유저 검색</UserRecordParagraph>
                </UserRecordLink>
              </LinkAndDescriptionDiv>
            </Slide>
          </Fade>
        </UserRecordDiv>
        <PositionGuideDiv positionGuide={slideInfo.positionGuide}>
          <Fade triggerOnce style={{ height: '100%' }}>
            <Slide triggerOnce direction="left" style={{ height: '100%' }}>
              <LinkAndDescriptionDiv>
                <PositionGuideLink to="position-guide">
                  <PositionGuideParagraph>선수 포지션 추천 가이드</PositionGuideParagraph>
                </PositionGuideLink>
                <RightDescriptionHeading>
                  TOP 1000 랭커들의 데이터를 바탕으로 <br /> 선수들의 최적 포지션을 찾아보세요!
                </RightDescriptionHeading>
              </LinkAndDescriptionDiv>
            </Slide>
          </Fade>
        </PositionGuideDiv>
        <ChallengeDiv gameChallenge={slideInfo.gameChallenge}>
          <Fade triggerOnce style={{ height: '100%' }}>
            <Slide triggerOnce direction="right" style={{ height: '100%' }}>
              <LinkAndDescriptionDiv>
                <LeftDescriptionHeading>매치 데이터를 기반으로 한 챌린지에 도전해 보세요!</LeftDescriptionHeading>
                <ChallengeLink to="challenge">
                  <ChallengeParagraph>챌린지</ChallengeParagraph>
                </ChallengeLink>
              </LinkAndDescriptionDiv>
            </Slide>
          </Fade>
        </ChallengeDiv>
        footer
      </MainSelectContainerDiv>
    </>
  );
};

export default MainSelect;
