![championsLeague](https://github.com/minh0518/FIFAPulse/assets/78631876/816fbff0-4558-4f01-ab72-92ca4fc612bc)

<div align='center'>
    <h1>FIFAPulse</h1>

```
FIFAOnline4 Open API를 이용한 개인 프로젝트
(2023년 4월 9일 ~ 개발중)
```

<br>

[🏆FIFAPulse 홈페이지](https://fifa-pulse.vercel.app/)

</div>
<br>
<br>
<br>

## 🗒️목차

1. [👨🏻‍💻 프로젝트 소개](#%EF%B8%8F-프로젝트-소개)

<br>

2. [🖥️ 프로젝트 화면](#%EF%B8%8F-프로젝트-화면)

<br>

3. [🛠️ 기술 스택](#%EF%B8%8F-기술-스택)

<br>

4. [🛣️ 컨벤션](#%EF%B8%8F-컨벤션)

<br>

5. [👨🏻‍💻 개발 기록](#-개발-기록)

<br>

6. [💬 구현 이슈 로그](#-구현-이슈-로그)

<br>

7. [📁 폴더 구조](#-폴더-구조)

<br>

<br><br>

# 🗒️ 프로젝트 소개

<br>

<h3>▶️ 개발 동기</h3>
<br>
<b>
피파온라인4 라는 게임 플랫폼을 이용할 때 단순히 게임만 하는 것을 넘어서 , 2차적인 서비스로 제가 만든 웹을 통해 유저들에게 추가적인 경험을 제공해 보고 싶어서 시작한 프로젝트 입니다
</b>

<br>
<br>

<h3>📊 매치 분석</h3>
<br>
<b>
자신이 진행했던 자세한 수치를 기반으로 한 경기 분석 및 통계 , 이적시장 활동 로그의 기록들을 제공하며 피파온라인4의 유저들이 실제 축구 경기에서 제공하는 각 매치별 분석 통계를 자신의 파피온라인 플레이로부터 받아 볼 수 있고 ,
<br> 더 나아가 이런 통계를 기반으로 자신의 플레이를 분석 할 수 있으며 다른 유저들 검색 또한 가능합니다
</b>

<br>
<br>

<h3>🙆🏻‍♂️ 선수 포지션 추천 가이드</h3>
<br>
<b>
 상위 구간 플레이어들 (top 10000) 실제 선수 기용 기록들을 기반으로 피파온라인에서 사용되고 있는
 각 선수가 어떠한 포지션에서 사용할 때 가장 효율적인지에 대해 추천해주는 기능입니다
</b>

<br>
<br>

<h3>🕹️ 챌린지</h3>
<br>
<b>
보다 나은 플레이를 장려하기 위해 현재 피파온라인4에서 서비스하고 있는 플레이 판 수를 기반으로 한 것이 아닌, 실질적인 플레이 실력에 대한 (ex 각 경기당 패스성공률 90%이상 도전하기 , 헤딩골 몇골 이상 넣기 등) 챌린지 기능도 있습니다
</b>

<br><br><br>

# 🖥️ 프로젝트 화면

(현재 개발 중 입니다)

<br><br><br>

# 🛠️ 기술 스택

<br><br><br>

# 🛣️ 컨벤션

<details><summary><h3>1️⃣ 코드 컨벤션</h3></summary>
<div markdown="1">

    ✔️Airbnb

    - Airbnb Eslint를 따릅니다.

</details>

<details><summary><h3>2️⃣ 브랜치 컨벤션</h3></summary>
<div markdown="1">

    ✔️GitHub Flow를 따릅니다

    🔹main
      - 배포가 가능한 상태의 브랜치입니다

    🔹dev
      - 최신 상태를 유지하는 브랜치 입니다
        이슈 단위 기능이 완료될 때마다 main에 PR로 merge 합니다

    🔹dev #이슈번호
      - 각 이슈별 기능을 구현하는 브랜치 입니다
        해당 이슈 구현이 완료되면 dev에 merge하며 이 브랜치들은 삭제됩니다

</details>
<details><summary>브랜치 컨벤션 예시</summary>

- 이슈 37을 작성
- 로컬에 dev-#37 브랜치 생성하고 origin 에 push해서 dev-#37 생성
- dev-#37 에서 해당 이슈번호 기능 개발
- 완료되면 dev-#37에서 커밋하고 , dev-#37 를 origin에 push
  (커밋메세지에 이슈번호 기입해주기 [#37][FEAT] OO기능 구현 완료)
- checkout dev로 넘어가서 dev-#37와 merge (동시에 충돌 확인)
- origin dev에 push
- dev에서 main으로 PR

- 만약 #37 기능구현 도중 너무 길어진다면 각 진행사항들을 task로 분리하고
- 새롭게 생긴 각 task 이슈번호대로 커밋
- 즉 , dev-#37 에서 파생된 task인 #38 , #39가 있다면 dev-#37브랜치에서 #38,#39에 대해 커밋을 하고
  최종적으로 PR

</details>

<details><summary><h3>3️⃣ 이슈 컨벤션</h3></summary>
<div markdown="1">

    ✔️ 기능 구현

    - [Feat] : 제목

        1. 구현 기능(최대한 자세히)

        2. 진행 사항
        2. 진행 사항

        3. 참고 사항


    ✔️ 리팩토링

    - [Refactor] : 제목

        1. 개선 사항 및 이유 (최대한 자세히)

        2. 진행 상황

        3. 참고 사항


    ✔️ 버그 픽스

    - [BUG] : 제목

        1. 문제점 (최대한 자세히)

        2. 수정 사항 및 이론 (최대한 자세히)

        3. 배운 점


    ✔️ DOCS 문서 작성

    - [DOCS] : # 이슈번호 , 제목

        1. 작성 사항

> **하나의 이슈에서 task로 분리됐을 경우 , 각 분리된 이슈들은 제목 앞에 (Tracked by #파생된 번호) 라는 접두어가 붙습니다**

</details>

<details><summary><h3>4️⃣ Commit 컨벤션</h3></summary>
<div markdown="1">

<br>

✔️ Gitmoji 사용

<br>

- FEAT : 새로운 기능을 추가할 경우

<br>

- FIX: 버그를 고친 경우

<br>

- DOCS: 문서 수정 (README.md 작성)

<br>

- DESIGN : CSS 등 사용자 UI 디자인 변경

<br>

- STYLE: 코드 포맷 변경( 오타 수정 , 탭 사이즈 변경 , 변수명 변경 등… )

<br>

- REFACTOR: 코드 리펙토링

<br>

- TEST: 테스트 코트, 테스트 코드 리팩토링

<br>

- CHORE: 빌드 업무 수정, 패키지 매니저 수정( package.json 수정 , .gitignore 수정 , 모듈 변경)

<br>

- (폴더 구조 변경에 대한 사항은 기록하지 않습니다)

<br>

</details>

<br><br><br>

# 👨🏻‍💻 개발 기록

[✒️ 블로그 링크](https://velog.io/@minh0518?tag=FIFAPulse)

<br><br><br>

# 💬 구현 이슈 로그

[🪡 깃허브 이슈 로그 ](https://github.com/minh0518/FIFAPulse/issues?q=is%3Aissue+is%3Aclosed)

<br><br><br>

# 📁 폴더 구조

<br>

```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂Components
 ┃ ┣ 📂AskNickNameModal
 ┃ ┃ ┣ 📜AskNickNameModal.styled.ts
 ┃ ┃ ┣ 📜AskNickNameModal.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.styled.ts
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Forfeit
 ┃ ┃ ┣ 📜Forfeit.styled.ts
 ┃ ┃ ┣ 📜Forfeit.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Loading
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Loading.styled.ts
 ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┣ 📂MatchResultsByMatchTypes
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜MatchResultsByMatchTypes.styled.ts
 ┃ ┃ ┗ 📜MatchResultsByMatchTypes.tsx
 ┃ ┣ 📂Navbar
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Navbar.styled.ts
 ┃ ┃ ┗ 📜Navbar.tsx
 ┃ ┣ 📂PlayerImg
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜PlayerImg.styled.ts
 ┃ ┃ ┗ 📜PlayerImg.tsx
 ┃ ┣ 📂Statistics
 ┃ ┃ ┣ 📂Defence
 ┃ ┃ ┃ ┣ 📜Defence.styled.ts
 ┃ ┃ ┃ ┣ 📜Defence.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂Pass
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜Pass.styled.ts
 ┃ ┃ ┃ ┗ 📜Pass.tsx
 ┃ ┃ ┣ 📂Player
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜Player.styled.ts
 ┃ ┃ ┃ ┗ 📜Player.tsx
 ┃ ┃ ┣ 📂Shoot
 ┃ ┃ ┃ ┣ 📂SoccerField
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜SoccerField.styled.ts
 ┃ ┃ ┃ ┃ ┗ 📜SoccerField.tsx
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜Shoot.styled.ts
 ┃ ┃ ┃ ┗ 📜Shoot.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Statistics.styled.ts
 ┃ ┃ ┗ 📜Statistics.tsx
 ┃ ┗ 📂TradeLog
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜TradeLog.styled.ts
 ┃ ┃ ┗ 📜TradeLog.tsx
 ┣ 📂Context
 ┃ ┣ 📂Firebase
 ┃ ┃ ┗ 📜LoginContext.tsx
 ┃ ┣ 📂Modal
 ┃ ┃ ┗ 📜ModalContext.tsx
 ┃ ┗ 📂UserObj
 ┃ ┃ ┗ 📜UserObjContext.tsx
 ┣ 📂images
 ┃ ┣ 📂EnforceImg
 ┃ ┃ ┗ 📂BronzeCard
 ┃ ┃ ┃ ┣ 📜BronzeCard.styled.ts
 ┃ ┃ ┃ ┣ 📜BronzeCard.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📜challenge.png
 ┃ ┣ 📜championsLeague.jpg
 ┃ ┣ 📜championsLeagueBackgroundImg.webp
 ┃ ┣ 📜dummyProfile.jpg
 ┃ ┣ 📜FIFAONLINELogo.png
 ┃ ┣ 📜FIFAPulseLogo.png
 ┃ ┣ 📜goalImg.jpg
 ┃ ┣ 📜LoadingSpinner.gif
 ┃ ┣ 📜myRecord.png
 ┃ ┣ 📜positionGuide.jpg
 ┃ ┗ 📜userRecord.jpg
 ┣ 📂Pages
 ┃ ┣ 📂Challenge
 ┃ ┃ ┣ 📜Challenge.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂ChooseModeAndLogin
 ┃ ┃ ┣ 📜ChooseModeAndLogin.styled.ts
 ┃ ┃ ┣ 📜ChooseModeAndLogin.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Guest
 ┃ ┃ ┣ 📜Guest.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂MainSelect
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜MainSelect.styled.ts
 ┃ ┃ ┗ 📜MainSelect.tsx
 ┃ ┣ 📂MatchStatistics
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜MatchStatistics.styled.ts
 ┃ ┃ ┗ 📜MatchStatistics.tsx
 ┃ ┣ 📂MyRecord
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜MyRecord.styled.ts
 ┃ ┃ ┗ 📜MyRecord.tsx
 ┃ ┣ 📂PositionGuide
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜PositionGuide.tsx
 ┃ ┗ 📂UserRecord
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜UserRecord.tsx
 ┣ 📂Services
 ┃ ┗ 📜FifaData.ts
 ┣ 📂types
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜context.ts
 ┃ ┣ 📜props.ts
 ┃ ┗ 📜states.ts
 ┣ 📂utils
 ┃ ┣ 📜getErrorMessage.ts
 ┃ ┣ 📜MatchStatistics.ts
 ┃ ┗ 📜MyRecord.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
