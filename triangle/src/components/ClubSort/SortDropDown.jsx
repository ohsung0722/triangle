import React, { useState, useRef, useEffect } from 'react';
import './SortDropDown.css';

export default function SortDropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('name');
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (type) => {
    setSelected(type);
    onSelect(type);
  };

  return (
    <div className="sort-dropdown" ref={menuRef}>
      <div className={`sort-button ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(open => !open)}>
        정렬
      </div>

      {isOpen && (
        <div className="sort-menu">
          <button
            className={`sort-item ${selected === 'name' ? 'selected' : ''}`}
            onClick={() => handleSelect('name')}
          >
            동아리명으로 정렬
          </button>
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
