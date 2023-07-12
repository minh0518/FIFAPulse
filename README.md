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

<details>
  <summary>
    <h3>2️⃣ 브랜치 컨벤션</h3>
  </summary>

  ✔️스스로 적용해보면서 구상해 본 저만의 컨벤션 입니다

  🔹main
  - 배포가 가능한 상태의 브랜치입니다

  🔹dev
  - 최신 상태를 유지하는 브랜치 입니다. 이슈 단위 기능이 완료될 때마다 main에 PR로 merge 해서 자동 배포 합니다

  🔹dev #이슈번호
  - 각 이슈별 기능을 구현하는 브랜치 입니다. 해당 이슈 구현이 완료되면 dev에 merge하며 이 브랜치들은 삭제됩니다

    <br>
    
  <details>
    <summary><b>브랜치 컨벤션 예시</b></summary>

    - 이슈 37을 생성
    
    - 로컬에 dev-#37 브랜치 생성하고 origin에 push해서 dev-#37 생성
    
    - dev-#37 에서 해당 이슈의 기능 개발
        - 해당 기능 구현이 완료되면 dev-#37브랜치에서 커밋 ( 커밋메세지에 이슈번호 기입 ex) [#37][FEAT] OO기능 구현 ) 
        - origin의 dev-#37에다가 push (origin의 dev-#37에 기능 구현 사항 반영)
        
    - 로컬의 dev 브랜치로 넘어가서 dev-#37와 merge ( 동시에 충돌 확인 )
        - 별 이상이 없다면 origin dev에도 push
        
    - 최종적으로 dev에서 main으로 PR
  </details>

    
  <details>
    <summary><b>브랜치 컨벤션 예외 사항 (이슈 분리)</b></summary>

<p>
<b>
이슈는 최소한의 단위로 작성하지만 , 만약 해당 이슈의 기능구현 도중 의도치 않게 수정 내용이 길어지거나 카테고리가 다양화 된다면 
해당 이슈에서 각 진행사항들을 task로 분리한다
</b>
</p>

> 예를 들어 , 이슈 번호 6번이 있고 만약 여기서 파생된 이슈번호 7,8,9가 생겼을 때

<br>

- 각 파생된 이슈번호에 맞게 브랜치 dev-#7 dev-#8 dev-#9 를 새로 생성한다. 그리고 여기서 각 기능을 구현한다
  > 브랜치 dev-#6는 실제로 존재하지 않게 된다. 왜냐하면 여기서 파생된 dev-#7 dev-#8 dev-#9에서 해당 기능들을 구현하기 때문
    

- 각 브랜치에서 기능구현이 완료되면 커밋하는데 커밋메세지도 각각 기존 방식처럼 이슈 번호를 기재한다
  1. dev-#7 에서 개발한 내용은 커밋 메세지가 [#7] 로 시작하고
  2. dev-#8 은 [#8] 
  3. dev-#9 는  [#9] 로 작성하는 것이다
        
- 그리고 dev-#7 dev-#8 dev-#9 브랜치에서 각각 PR을 날리면서 해당 이슈번호에 대해서만 close한다
  dev-#7 에 대해 PR날릴 땐 파생된 이슈번호 #7의 이슈만 close하는 것이다
  > 기존 이슈인 #6은 close안 하고 냅둔다 dev-#7  에서 구현완료되면 #7에 대해서만 PR날리는 것이다
    
- 그리고 파생된 #7 #8 #9 이슈들이 최종적으로 다 완성되면 #6 이슈는 수동으로 close해준다 
<br>

  </details>

  <details>
    <summary><b>브랜치 컨벤션 예외 사항 (에러 발생)</b></summary>

<p>
<b>
만약 특정 이슈에 대한 개발이 완료되었을 때 , 커밋을 하고 PR을 날릴텐데
로컬에선 문제가 없었지만, 깃허브에서 의도치 않은 에러(ex 배포 에러)가 발생해서 수정을 해야 할 경우
</b>
</p>

> 깃허브의 PR은 close되기 전까지는 해당 브랜치의 변경사항이 실시간으로 자동반영되는 특성을 이용한다

<br>

예를 들어 #188 에 대해 개발을 하고 커밋했지만 배포단계에서 의도치 않은 에러가 발생했을 경우
    
- 해당 dev-#188 에 가서 다시 문제를 수정하고 커밋한다
  - 이 역시 #188 이슈에 대한 구현 과정중 하나이므로 커밋메세지는 그대로 [#188]로 작성한다
    그리고 dev-#188에 다시 push해준다
    
- 최종적으로 에러가 해결이 되면 그때 최종적으로 dev→main에 PR을 날려주는 것이다
    
> **즉, 최종 main으로 PR날리기 전에 해당 브랜치에서 추가 수정 및 커밋을 진행하다가**
> **최종적으로 에러가 다 해결되면 마지막에 dev→main에 PR 날려서 merge하라는 것이다**

![image](https://github.com/minh0518/FIFAPulse/assets/78631876/6726475b-630e-46b8-9929-bdc0ca8bafd8)


  </details>

  
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
