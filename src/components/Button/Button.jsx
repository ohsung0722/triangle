// Button 컴포넌트 - 다양한 스타일과 기능을 가진 재사용 가능한 버튼 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

// Button 컴포넌트의 props 정의
const Button = ({
  children,          // 버튼 내부 텍스트
  size = 'medium',   // 버튼 크기 (small, medium, large)
  variant = 'primary', // 버튼 스타일 (primary, secondary, outline)
  isLoading = false, // 로딩 상태
  leftIcon,          // 왼쪽 아이콘
  rightIcon,         // 오른쪽 아이콘
  fullWidth = false, // 전체 너비 사용 여부
  className,         // 추가 CSS 클래스
  disabled,          // 비활성화 상태
  to,                // 내부 링크 (React Router)
  href,              // 외부 링크
  ...props
}) => {
  const navigate = useNavigate();

  // 버튼 클릭 핸들러 - 내부/외부 링크 처리
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  // 버튼의 CSS 클래스 조합
  const buttonClassName = `button 
    ${size === 'small' ? 'button-small' : size === 'large' ? 'button-large' : 'button-medium'}
    ${variant === 'primary' ? 'button-primary' : variant === 'secondary' ? 'button-secondary' : 'button-outline'}
    ${(disabled || isLoading) ? 'button-disabled' : ''}
    ${fullWidth ? 'button-full-width' : ''}
    ${className || ''}`;

  return (
    <button
      className={buttonClassName}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {/* 로딩 스피너 표시 */}
      {isLoading ? (
        <svg
          className="button-spinner"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}
      {/* 왼쪽 아이콘 표시 */}
      {!isLoading && leftIcon ? <span className="button-icon-left">{leftIcon}</span> : null}
      {children}
      {/* 오른쪽 아이콘 표시 */}
      {!isLoading && rightIcon ? <span className="button-icon-right">{rightIcon}</span> : null}
    </button>
  );
};

export default Button; 