-타입스크립트와 테스트 코드 X
-AppTemplate는 Header와 Content 컴포넌트를 props 넘겨줌
-Header는 경로에 따라 Title State를 업데이트 합니다.
-Content는 HomeContent와 EditContent를 라우팅 합니다.
-HomeContent에서 오픈 날씨 API로 받아온 데이터와 추가된 이번주 할 일 데이터를 props로 WeatherContent와 TodoListItem 컴포넌트로 넘겨줍니다. -날씨 정보는 데이터를 가져오는 동안에 loading 화면을 보여줍니다.
-API통신은 axios의 인터셉터로 전역으로 관리하고 get 함수를 불러와서 사용합니다.
-Web API로 구현한 localStorage.js를 recoil atom의 effects에 설정하여 새로고침해도 데이터를 로컬 스토리지에 저장 시켰습니다.

-서류 합격과 사전과제 기회를 주신 점 다시 한번 감사의 말씀을 드립니다.
