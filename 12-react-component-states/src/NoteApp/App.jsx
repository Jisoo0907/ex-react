// --------------------------------------------------------------------------
// ✅ 노트 앱 (with React)
// --------------------------------------------------------------------------
// - [ ] 노트 앱, 세부 구성 해설
// - [ ] 노트 생성 (Create)
// - [ ] 노트 리스트 또는 아이템 읽기 (Read)
// - [ ] 노트 수정 (Update)
// - [ ] 노트 삭제 (Delete)
// --------------------------------------------------------------------------

import { useState } from 'react';
import { ROUTES } from './constants/routes';
import NoteListPage from './pages/NoteListPage';
import NoteCreatePage from './pages/NoteCreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NoteEditPage from './pages/NoteEditPage';

function NoteApp() {
  const [routeInfo, setRouteInfo] = useState({
    // 상태 선언
    route: ROUTES.list, // 화면에 표시할 펭지 루트(경로) 식별자
    noteId: null, // 선택된 노트의 ID 식별자
  });

  /* 상태 업데이트 기능 */
  // useState 훅에서 반환된 상태 업데이트 함수는 상태를 교체함(합성X)
  // 그러므로 객체 또는 배열 타입의 데이터를 상태로 관리할 경우 주의가 요구됨
  // 해결책: 개발자가 직접 객체를 합성해야 함
  // https://ko.react.dev/learn/updating-objects-in-state (공식문서 참고)
  const handleChangeRoute = (nextRoute) => {
    setRouteInfo({
      ...routeInfo,
      route: nextRoute,
    });
  };

  // 페이지 경로에 따라 페이지 마크업(JSX) 반환
  switch (routeInfo.route) {
    default:
    case ROUTES.list:
      return <NoteListPage onChange={handleChangeRoute} />;
    case ROUTES.create:
      return <NoteCreatePage />;
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId} />;
    case ROUTES.edit:
      return <NoteEditPage noteId={routeInfo.noteId} />;
  }
}

export default NoteApp;