# React Router 기능 구현

## 데모

[🚀데모페이지](https://glittering-madeleine-0389e3.netlify.app/)

## 실행방법

```
yarn
yarn dev
```

## 과제 내용

### 목표

React와 History API를 사용하여 SPA Router 기능 구현

### 기간

2022.10.04 ~ 10.07

### 요구사항

- [x] 1. 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.

- `/` → `root` 페이지
- `/about` → `about` 페이지

- [x] 2. 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.

- [x] 3. Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.

```
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

- [x] 4. 최소한의 push 기능을 가진 useRouter Hook을 작성한다.

### 해결방법

- context api를 활용하여 주소가 변경될 경우 리렌더링 될 수 있도록 상태 관리
- useState를 사용하여 주소 값의 변경이 일어날 경우 값을 변경
- useRouter 훅을 생성하여 페이지 이동 버튼을 클릭할 경우 발생될 push 기능 구현
- `History API(pushState)`를 사용하여 push가 일어날 경우 url 주소 변경
- `window.onpopstate`를 사용하여 뒤로가기 이벤트가 발생될 경우 url 주소 변경
- `window.location.pathname`을 사용하여 현재 주소 값을 확인 후 Router path와 동일할 경우 컴포넌트가 보여질 수 있도록 구현

## 폴더구조

```
│  App.css
│  App.jsx
│  index.css
│  main.jsx
│
├─assets
│      react.svg
│
├─components
│      About.jsx
│      Root.jsx
│
├─hooks
│      useRouter.js
│
└─router
        Route.jsx
        Router.jsx
        RouterContext.js
```
