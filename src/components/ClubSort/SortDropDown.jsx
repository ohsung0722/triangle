// SortDropDown 컴포넌트 - 동아리 목록 정렬 옵션을 제공하는 드롭다운 컴포넌트
import React, { useState, useRef, useEffect } from 'react';
import './SortDropDown.css';

export default function SortDropdown({ onSelect }) {
  // 드롭다운 메뉴 열림/닫힘 상태
  const [isOpen, setIsOpen] = useState(false);
  // 선택된 정렬 옵션 (기본값: 동아리명)
  const [selected, setSelected] = useState('name');
  // 드롭다운 메뉴 참조
  const menuRef = useRef(null);

  // 드롭다운 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 정렬 옵션 선택 처리 함수
  const handleSelect = (type) => {
    setSelected(type);
    onSelect(type);
  };

  return (
    <div className="sort-dropdown" ref={menuRef}>
      {/* 정렬 버튼 */}
      <div className={`sort-button ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(open => !open)}>
        정렬
      </div>

      {/* 정렬 옵션 메뉴 */}
      {isOpen && (
        <div className="sort-menu">
          {/* 동아리명 정렬 옵션 */}
          <button
            className={`sort-item ${selected === 'name' ? 'selected' : ''}`}
            onClick={() => handleSelect('name')}
          >
            동아리명으로 정렬
          </button>
          {/* 카테고리 정렬 옵션 */}
          <button
            className={`sort-item ${selected === 'category' ? 'selected' : ''}`}
            onClick={() => handleSelect('category')}
          >
            카테고리로 정렬
          </button>
        </div>
      )}
    </div>
  );
}
