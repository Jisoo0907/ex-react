import { useId } from 'react';
import { string, func, bool } from 'prop-types';
import './UserSearchBox.css';

UserSearchBox.propTypes = {
  searchTerm: string.isRequired,
  isInstantSearch: bool,
  onSearch: func,
  onReset: func,
};

function UserSearchBox({ searchTerm, isInstantSearch = false, onSearch }) {
  const id = useId(); // React Hook, 컴포넌트 고유의 ID 생성

  const handleSearch = (e) => {
    // 검색 폼 제출할 때 호출되는 함수
    e.preventDefault();
    // Side Effects
    // DOM 접근, 속성 값 읽기
    const button = input.closest('form').querySelector('[type="submit"]');
    const input = document.getElementById(id);
    const value = input.value.trim();

    onSearch?.(value);
    // if (value.length > 0) {
    // } else {
    //   alert('검색어를 입력해주세요.');
    // }
  };

  return (
    <div className="UserSearchBox">
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input
          id={id}
          type="search"
          placeholder="사용자 정보 입력"
          defaultValue={searchTerm}
          // value={searchTerm}
          onChange={handleChange}
          // readOnly
        />
      </div>
      <button type="button" onClick={handleSearch}>
        찾기
      </button>
    </div>
  );
}

export default UserSearchBox;
