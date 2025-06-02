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
</br>
</br>

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
</br>
</br>

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

</br></br>

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

</br>

4️⃣ 개발 서버 실행
```bash
npm start
```
CRA(Create React App) 기반으로 개발 서버가 실행되며, 기본적으로 http://localhost:3000에서 어플리케이션이 열립니다.

5️⃣ 브라우저에서 바로 접근하기 </br></br>
[세모 홈페이지 바로가기](도메인) </br>
위 도메인에 접속하여 **세모** 홈페이지로 접속이 가능합니다.(배포 후 추가)

## 📁 프로젝트 구조
|프로젝트 구조 이미지|
|:---:|
|![alt text](/src/assets/images/image.png)|
|세모 프로젝트의 구성 폴더 이미지입니다.|

- assets
    - 이미지, SVG, 폰트 등 프로젝트에서 사용하는 정적 파일을 보관합니다.

- components
    - 버튼, dialog, chatbot 등 재사용 가능한 컴포넌트를 정의합니다.

- constants
    - enum, chatbot prompt, json 등 정적 값들을 관리합니다.

- layouts
    - 공통 레이아웃 컴포넌트(Header, Footer)등을 구성하며 Outlet 기반의 뼈대를 정의합니다.

- pages
    - 실제 라우팅되는 페이지 단위 컴포넌트입니다. 각 페이지는 레이아웃 하위에서 구성됩니다.

- services
    - API, 외부 라이브러리 연동 등의 비즈니스 로직을 모듈화하여 관리합니다.

- router
    - react-router-dom 기반의 라우팅 설정이 정의되어 있습니다. 전체 앱의 경로 구조를 관리합니다.

</br></br>

## 🛠️ 사용 기술

### Front-end
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/JavaScript.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/React.png?raw=true" width="80">
<img src="https://velog.velcdn.com/images/ebing/post/41aa481e-d816-45b9-a845-d6dd98ddbb72/image.png" width="200">
</div>

### Tools
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Github.png?raw=true" width="80">
<img src="https://github.com/user-attachments/assets/546dfce4-17ee-4935-9ceb-2a78f55be45f" width='80'>
</div>

</br></br>

## 🖥️ 화면 구성 및 세부 소개

### 화면 구성

#### 랜딩 페이지 흐름 영상
https://github.com/user-attachments/assets/13b3599d-1b33-411e-8316-ada79b1aace1

'세모' 서비스의 전체적인 기능을 한눈에 확인할 수 있는 랜딩페이지 입니다.</br>
'세모'의 대표 기능인 챗봇, 대시보드, 즐겨찾기 기능을 확인할 수 있습니다.
</br></br>

|메인 페이지|
|:---:|
|<img width="1495" alt="image" src="https://github.com/user-attachments/assets/a5d7c94b-1ec4-4b0f-b7d9-7d1f91d32217" />|
|'세모'의 메인 페이지로 분과, 세부 카테고리를 기준으로 교내 동아리를 간편하게 확인할 수 있습니다.|


|동아리 상세 페이지|
|:---:|
|<img width="1503" alt="image" src="https://github.com/user-attachments/assets/3f96e9b6-3dd9-4a99-9add-17eec1e29375" />|
|각 동아리의 상세 소개 페이지로 동아리 이미지, 자세한 소개글 등 세부 정보를 확인할 수 있습니다.|

|즐겨찾기|
|:---:|
|<img width="1193" alt="image" src="https://github.com/user-attachments/assets/17c51163-6f07-4452-a4a3-dfc1c5b243aa" />|
|즐겨찾기 한 동아리를 필터를 통해 한눈에 확인할 수 있습니다.|

|대시보드|
|:---:|
|<img width="1504" alt="image" src="https://github.com/user-attachments/assets/11c65d63-ca9b-4bf2-9b12-b7953af9d474" />|
|대시보드를 통해 세종대 동아리 현황과 즐겨찾기 동아리 현황을 확인할 수 있습니다.|

|챗봇|
|:---:|
|<img width="341" alt="image" src="https://github.com/user-attachments/assets/e88eb4dc-0126-403c-b7a8-9dc9d72a0b03" />|
|챗봇을 활용해 세종대 동아리와 관련된 정보를 얻을 수 있습니다.|

<br />
<br />

## 💁‍♂️ 프로젝트 팀원
|Frontend|Frontend|Frontend|Frontend|
|:---:|:---:|:---:|:---:|
| ![](https://github.com/ohsung0722.png?size=120) | ![](https://github.com/SangHyeok0908.png?size=120) |![] |![] |
|[권오성](https://github.com/ohsung0722)|[서상혁](https://github.com/SangHyeok0908)|[신혜연](https://github.com/shymirr)|[윤지영](https://github.com/yoon764)|

</br></br>

## 🤝 협업 툴 및 협업 규칙

본 프로젝트는 **GitHub**과 **Discord**를 기반으로 효율적인 협업을 진행하였습니다.

### **🛠 사용 도구**

| **도구** | **용도** |
| --- | --- |
| [GitHub](https://github.com/) | 코드 버전 관리, 이슈 및 프로젝트 관리, 코드 리뷰 |
| [Discord](https://discord.com/) | 실시간 소통, 회의, 공지 전달 |

---

### **📌 브랜치 전략:**

### **Git Flow**

```
main         ← 최종 배포 브랜치
develop      ← 통합 개발 브랜치
feature/*    ← 개별 기능 개발
release/*    ← 배포 전 테스트
hotfix/*     ← 긴급 수정 사항 처리
```

---

### **🗓 협업 진행 방식**

**✅ 매주 금요일 회의**
- 주요 목표 설정 및 회의록 정리
- 역할 분담 후 각자 GitHub Issue 생성</br>

|디스코드 회의 캡처 화면|
|:---:|
|![image](https://github.com/user-attachments/assets/130e9842-107f-41e6-a69e-090b4fa87c38)|
|매주 정기적 회의 및 건의,논의 사항이 있을 때마다 디스코드 툴 적극 활용|


**📌 작업 방식**
1. GitHub Issue 생성 → Assignee & Label 지정
2. 기능 개발 → feature/ 브랜치에서 작업
3. Pull Request 생성 → 코드 리뷰 요청
4. 리뷰 승인 후 develop 또는 main으로 병합</br>

**🔖 사용 라벨**

| **Label** | **설명** |
| --- | --- |
| bug | 기능 버그 및 오류 수정 |
| feature | 신규 기능 추가 |
| refactor | 코드 리팩토링 |
| docs | 문서 및 주석 작성/수정 |
| FE | 프론트 이슈 |
| release | 출시 이슈 |
| chore | 빌드, 기타 설정 이슈 |

---

### **🧩 템플릿 및 프로젝트 활용**

- **이슈 템플릿**

|이슈 템플릿 활용|
|:---:|
|<img width="712" alt="image" src="https://github.com/user-attachments/assets/fe1260a9-4f61-461d-8186-6ba013083b86" />|
|<img width="1231" alt="image" src="https://github.com/user-attachments/assets/728caa97-2865-4260-aac9-fd6a2c3942ac" />|
|<img width="1124" alt="image" src="https://github.com/user-attachments/assets/4f7c2e76-5f62-405b-9f82-19dd909bcaed" />|
|일관된 Issue 등록을 위한 작성 형식 제공 [실제 이슈 64번 링크](https://github.com/SejongOSS/triangle/issues/64)|
    
- **PR 템플릿**

|PR 템플릿 활용|
|:---:|
|<img width="1007" alt="image" src="https://github.com/user-attachments/assets/98c60818-30f1-4b9c-b7df-1e6717cf78ba" />|
|<img width="1193" alt="image" src="https://github.com/user-attachments/assets/1acc4f73-da42-423b-8df2-ad1e30a20e28" />|
|<img width="894" alt="image" src="https://github.com/user-attachments/assets/baa66aac-6501-42dd-b56c-09750c66cc08" />|
|PR 템플릿 작성 형식을 제공하고, merge 시 충돌 혹은 버그에 대한 코드리뷰 작성 및 resolve[실제 이슈 64번에 대한 PR 링크](https://github.com/SejongOSS/triangle/pull/66)|
    
    
    
- **Project Board**
    
    GitHub Project의 칸반 보드로 작업 흐름 시각화
    
    → No Status, To do, In Progress, Review, Done 으로 분류

  <img width="1508" alt="image" src="https://github.com/user-attachments/assets/742f0cc4-c7f6-4d12-a69d-546b39f8be09" />


- **Milestone**

    프로젝트 목표 과제 정리 및 마감 기한 표시를 위한 milestone 설정 (총 2번의 milestone 설정)

  <img width="1010" alt="image" src="https://github.com/user-attachments/assets/7d56e9a2-ec6a-4220-8ff9-e134997fb7ca" />

    
    

> 예시 보기 👉
> 
> 
> [🔗 GitHub Project Board 보기](https://github.com/orgs/SejongOSS/projects/1)
> 

</br></br>

## 라이센스
MIT 라이센스 (LICENSE 에서 확인 가능)
