export interface NexonUserInfo {
  accessId: string;
  nickname: string;
  level: number;
}

// 이런 데이터가 여러개 있으므로 ,사용할때 배열로 사용
// {id: 101000250, name: "데이비드 베컴"}
export interface MetaDataSpid {
  id: number;
  name: string;
}

// {className: "22 UCL (22 UEFA Champions League)",seasonId:280,seasonImg: "https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/season/22ucl.png"}
export interface MetaDataSeasonId {
  seasonId: number;
  className: string;
  seasonImg: string;
}

// {spposition: 18, desc: "CAM"}
export interface MetaDataSpposition {
  spposition: number;
  desc: string;
}

// {divisionId: 800, divisionName: "슈퍼챔피언스"}
export interface MetaDataDivision {
  divisionId: number;
  divisionName: string;
}

// {matchtype: 50, desc: "공식경기"}
export interface MetaDataMatchtype {
  matchtype: number;
  desc: string;
}

// {achievementDate:"2020-07-22T18:18:04" , division:2200 , matchType: 50}
export interface Maxdivision {
  achievementDate: string;
  division: number;
  matchType: number;
}

// 1vs1 매치에서의 각 유저 통계
export type matchInfoType = {
  // 유저 accessId
  accessId: string;
  // 유저 닉네임
  nickname: string;
  // 경기 전체 정보
  matchDetail: {
    averageRating: number; // 경기 평균 평점
    controller: string; // 사용한 컨트롤러 (keyboard / pad / etc 중 1)
    cornerKick: number; // 코너킥 수
    dribble: number; // 드리블 거리 (야드) >> 경기 종합인가? 뭘 의미?
    foul: number; // 파울 수
    injury: number; // 부상 수
    matchEndType: number; // 매치종료 타입 (0: 정상종료, 1: 몰수승, 2:몰수패)
    matchResult: string; // 매치 결과 (“승”, “무”, “패”)
    offsideCount: number; // 오프사이드 수
    possession: number; // 점유율
    redCards: number;
    yellowCards: number;
    seasonId: number; // 시즌ID ??
    systemPause: number; // 게임 일시정지 수
  };
  defence: { blockTry: number; blockSuccess: number; tackleTry: number; tackleSuccess: number };
  pass: {
    passSuccess: number; // 전체 패스 성공 수
    passTry: number; // 전체 패스 시도 수
    bouncingLobPassSuccess: number; // 바운싱 롭 패스 성공 수
    bouncingLobPassTry: number; // 	바운싱 롭 패스 시도 수
    drivenGroundPassSuccess: number; // 드리븐 땅볼 패스 성공 수
    drivenGroundPassTry: number; // 	드리븐 땅볼 패스 시도 수
    lobbedThroughPassSuccess: number; // 	로빙 스루 패스 성공 수
    lobbedThroughPassTry: number; // 	로빙 스루 패스 시도 수
    longPassSuccess: number; // 롱 패스 성공 수
    longPassTry: number; // 롱 패스 시도 수
    shortPassSuccess: number; // 숏 패스 성공 수
    shortPassTry: number; // 숏 패스 시도 수
    throughPassSuccess: number; // 스루패스 성공 수
    throughPassTry: number; // 스루패스 시도 수
  };
  player: readonly {
    // 각 선수들에 대한 정보 (후보선수 포함)

    spId: number; // 선수 spid
    spPosition: number; // 그 판에서 기용된 포지션
    spGrade: number; // 선수 강화 등급
    status: {
      // 선수 경기 스탯

      spRating: number; // 선수 평점
      aerialSuccess: number; // 공중볼 경합 성공 수
      aerialTry: number; // 공중볼 경합 시도 수
      assist: number; // 어시스트 수
      goal: number; // 득점 수
      ballPossesionSuccess: number; // 볼 소유 성공 수
      ballPossesionTry: number; // 볼 소유 시도 수
      block: number; // 블락 성공 수
      blockTry: number; // 블락 시도 수
      defending: number; // 디펜딩 수
      dribble: number; // 드리블 거리 (야드) >> 0으로 잡히는 경우가 종종 있는건가?
      dribbleSuccess: number; // 드리블 성공 수
      dribbleTry: number; // 드리블 시도 수
      shoot: number; // 슛 시도 수
      effectiveShoot: number; // 유효 슛 수
      intercept: number; // 인터셉트 수
      passSuccess: number; // 패스 성공 수
      passTry: number; // 패스 시도 수
      yellowCards: number;
      redCards: number;
      tackle: number; // 태클 성공 수
      tackleTry: number; // 태글 시도 수
    };
  }[]; // 위의 MetaDataSpid같은 타입들의 경우 , MetaDataSpid자체를 사용할 때 배열로 선언하면 되지만
  // 이처럼 matchInfoType 안에 있는 일부 값들이 배열로 사용되고 있는 경우, matchInfoType을 사용할때 따로 특정 하위 값들만 배열로 선언할 수 없기에
  // 여기서 직접 배열로 선언

  shoot: {
    // 해당 매치 전체 슛 정보

    shootTotal: number; // 총 슛 수
    effectiveShootTotal: number; // 	총 유효슛 수
    goalFreekick: number; // 프리킥 골 수
    goalHeading: number; // 헤딩 골 수
    goalInPenalty: number; // 인패널티 골 수
    goalOutPenalty: number; // 아웃패널티 골 수
    goalPenaltyKick: number; //	패널티킥 골 수
    goalTotal: number; //	총 골 수 (실제 골 수, goalInPenalty+goalOutPenalty+goalPenaltyKick)
    goalTotalDisplay: number; // 	게임 종료 후 유저에게 노출되는 골 수 (자책골 반영까지 된 최종 결과)
    ownGoal: number; // 자책골
    shootFreekick: number; // 프리킥 슛 수
    shootHeading: number; // 해딩 슛 수
    shootInPenalty: number; // 인패널티 슛 수
    shootOutPenalty: number; // 아웃패널티 슛 수
    shootOutScore: number; // 승부차기 슛 수
    shootPenaltyKick: number; // 패널티킥 슛 수
  };
  shootDetail: readonly {
    // 각 슛에 대한 세부 정보(shoot : shootTotal로 찍힌 각 슈팅에 대한 정보)

    result: number; // 슛 결과 (1 : ontarget(유효슛) , 2 : offtarget(빗나간 슛) , 3 : goal)
    assist: boolean; // 어시스트 받은 골 여부. (받음 : true, 안받음 : false)
    assistSpId: number; // 어시스트 선수 spid
    assistX: number; // 어시스트 x좌표
    assistY: number; // 어시스트 y좌표
    goalTime: number; // 슛 시간
    hitPost: boolean; // 골포스트 맞춤 여부. (맞춤 : true, 못 맞춤 : false)
    inPenalty: boolean; // 패널티박스 안에서 넣은 슛 여부 (안 : true, 밖 : false)
    spGrade: number; // 슈팅 선수 강화 등급
    spId: number; // 슈팅 선수 spid
    spIdType: boolean; // 슈팅 선수 임대 여부 (임대선수 : true, 비임대선수 : false)
    spLevel: number; // 슈팅 선수 레벨
    type: number; // 	슛 종류 1: normal 2: finesse 3: header 4: lob (로빙슛)
    // 5: flare (플레어슛) 6: low (낮은 슛) 7: volley (발리)
    // 8: free-kick (프리킥) 9: penalty (페널티킥)
    // 10: KNUCKLE (무회전슛)) 11: BICYCLE(바이시클킥) 12: super(파워샷)
    x: number; //	슛 x좌표 (전체 경기장 기준)
    y: number; // 슛 y좌표 (전체 경기장 기준)
  }[];
};

export interface MatchDetail {
  matchDate: string;
  matchId: string;
  matchType: number;
  matchInfo: readonly [matchInfoType, matchInfoType]; // 길이가 고정적이므로 튜플 사용
}

// { "tradeDate": "2023-05-31T01:07:25",
// "saleSn": "64761f3cad134d6873034f84",
// "spid": 265204024,
// "grade": 1,
// "value": 499000000 }
// TradeLogInfo역시 실제로 객체 배열 형태로 반환되므로 위의 MatchDetail의 하위 타입들처럼 []형태로 사용해도 되는데
// 우선은 최소 단위로 사용해보고자 객체 형태로 선언하고 사용할때 []를 붙여서 사용
export interface TradeLogInfo {
  tradeDate: string;
  saleSn: string;
  spid: number;
  grade: number;
  value: number;
}

export interface RankerPlayerInfoStatus {
  assist: number;
  block: number;
  dribble: number;
  dribbleSuccess: number;
  dribbleTry: number;
  effectiveShoot: number;
  goal: number;
  matchCount: number;
  passSuccess: number;
  passTry: number;
  shoot: number;
  tackle: number;
}

// top 10,000 랭커 플레이 정보
export interface RankerPlayerInfo {
  createDate: string;
  spId: number;
  spPosition: number;
  status: RankerPlayerInfoStatus;
}

export interface ErrorRankerPlayerInfo {
  type: string;
  createDate: string;
  errorPositionId: number;
}
