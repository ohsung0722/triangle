<div align="center">

<!-- logo -->
![image](https://github.com/user-attachments/assets/fb6c032b-2b12-4808-b7c6-d2966a729be3)


### 프로젝트 '세모 '🖍️

[<img src="https://img.shields.io/badge/-readme.md-important?style=flat&logo=google-chrome&logoColor=white" />]() [<img src="https://img.shields.io/badge/-OpenSW project-blue?style=flat&logo=google-chrome&logoColor=white" />]() [<img src="https://img.shields.io/badge/release-v2.0.0-ㅎㄱㄷ두?style=flat&logo=google-chrome&logoColor=white" />]() 
<br/> [<img src="https://img.shields.io/badge/프로젝트 기간-2025.05.05~2025.06.02-fab2ac?style=flat&logo=&logoColor=white" />]()

</div> 

## 📝 Project
세종대 동아리 추천 플랫폼 '세모' 입니다.

## 📚 Contents
- 프로젝트 소개
- Node.js 설치 가이드
- 프로젝트 설치 및 실행 방법
- 프로젝트 구조
- 사용 기술
- 화면 구성과 세부 소개
- 개발 팀 소개
- 협업 툴 및 협업 규칙
- 라이센스

## 🌟 Introduction
**세모(SeMo)** 는 세종대학교 동아리 정보를 쉽고 직관적으로 탐색할 수 있도록 설계된 React 기반의 웹 애플리케이션입니다.
사용자 친화적인 UI와 AI 챗봇 기능을 통해 학생들이 동아리를 보다 효과적으로 찾고,
각 동아리의 활동 현황을 대시보드와 그래프 시각화를 통해 한눈에 파악할 수 있습니다.

> 본 프로젝트는 JavaScript와 npm을 기반으로 개발되었으며,</br>
> 실시간 상호작용과 유연한 사용자 경험을 핵심으로 설계되었습니다.

### 🔑 주요 제공 기능
- 🎯 동아리 정보 통합 제공: 세종대 내 다양한 동아리의 정보를 분류/정렬해 열람 가능</br>
- 🤖 AI 챗봇 지원: 사용자의 질문에 즉각적으로 응답하여 정보 탐색을 돕는 AI 챗봇</br>
- 📊 데이터 기반 시각화: 동아리별 활동 및 인기 현황을 그래프로 시각화</br>
- 🧾 맞춤형 문항 생성: 지원 폼 및 문항 커스터마이징 기능 포함</br>

## 📦 Node.js 설치 가이드
이 프로젝트는 npm 기반으로 빌드 및 실행되며, 사전에 **Node.js** 가 시스템에 설치되어 있어야 합니다.
아래의 절차에 따라 Node.js를 설치하고 환경 구성을 완료하세요.

### ✅ 권장 버전
- Node.js v20 이상
- npm v10 이상 (Node.js 설치 시 기본 포함)

### 🔧 설치 방법

---
</br>

💻 **Windows / 일반 사용자**
1. [🔗 Node.js 공식 웹사이트](https://nodejs.org/ko)에 접속합니다.
2. 운영체제에 맞는 **LTS(Long-Term Support)** 버전을 다운로드하여 설치합니다.
3. 설치 완료 후, 터미널 또는 명령 프롬프트에서 아래 명령어로 정상 설치 여부를 확인합니다.
``` bash
node -v
npm -v
```
위 입력어를 입력했을 때 버전 정보가 출력된다면 정상적으로 설치된 것입니다.

---
</br>

🍎 **macOS 사용자 (Homebrew 사용)**
</br></br>
Homebre가 설치되어 있다면, 다음 명령어를 통해 간편하게 Node.js를 설치할 수 있습니다.

``` bash
brew install node
```
설치 후 아래 명령어로 설치 확인:

``` bash
node -v
npm -v
```

>Homebrew가 설치되어 있지 않다면 [공식 홈페이지](https://brew.sh/ko/)에서 설치 안내를 참고하세요

## 프로젝트 설치 및 실행 방법
아래 단계는 프로젝트의 루트 디렉터리를 기준으로 진행됩니다.</br>
Node.js 및 npm이 정상적으로 설치되어 있는지 먼저 확인하세요.

1️⃣ 프로젝트 클론
```bash
git clone https://github.com/SejongOSS/triangle.git
cd triangle
```

2️⃣ 의존성 패키지 설치
```bash
npm install
```
필요한 라이브러리 및 모듈이 자동으로 설치됩니다.

3️⃣ env 설정 </br>
.gitignore과 같은 위치에 env 파일을 생성 후 api key를 입력해야합니다. (key는 조교에게 직접 전달)

4️⃣ 개발 서버 실행
```bash
npm start
```
CRA(Create React App) 기반으로 개발 서버가 실행되며, 기본적으로 http://localhost:3000에서 어플리케이션이 열립니다.

5️⃣ 브라우저에서 바로 접근하기 </br></br>
[세모 홈페이지 바로가기](도메인) </br>
위 도메인에 접속하여 **세모** 홈페이지로 접속이 가능합니다.

## 📁 프로젝트 구조
|프로젝트 구조 이미지|
|:--:|
|![alt text](image.png)|
|세모 프로젝트의 구성 폴더 이미지입니다.|

### 화면 구성
|메인 페이지|
|:---:|
|![image](https://github.com/user-attachments/assets/eed9fd9f-795b-4211-aae5-21344ed241e0)|
|'세모'의 메인 페이지로 분과, 세부 카테고리를 기준으로 교내 동아리를 간편하게 확인할 수 있습니다.|


|동아리 상세 페이지|
|:---:|
|![image](https://github.com/user-attachments/assets/25c19d44-2c1b-492a-8fb7-06efd2793d44)|
|각 동아리의 상세 소개 페이지로 동아리 이미지, 자세한 소개글 등 세부 정보를 확인할 수 있습니다.|

<br />

## ⚙ 기술 스택
> skills 폴더에 있는 아이콘을 이용할 수 있습니다.
### Front-end
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/JavaScript.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/React.png?raw=true" width="80">
<img src="https://velog.velcdn.com/images/ebing/post/41aa481e-d816-45b9-a845-d6dd98ddbb72/image.png" width="200">
</div>

### Tools
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Github.png?raw=true" width="80">
<img src="https://github.com/user-attachments/assets/546dfce4-17ee-4935-9ceb-2a78f55be45f" width='80')
</div>

<br />

## 💁‍♂️ 프로젝트 팀원
|Frontend|Frontend|Frontend|Frontend|
|:---:|:---:|:---:|:---:|
| ![](https://github.com/ohsung0722.png?size=120) | ![](https://github.com/SangHyeok0908.png?size=120) |![] |![] |
|[권오성](https://github.com/ohsung0722)|[서상혁](https://github.com/SangHyeok0908)|[신혜연](https://github.com/shymirr)|[윤지영](https://github.com/yoon764)|
