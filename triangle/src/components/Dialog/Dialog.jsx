import React from 'react';
import './Dialog.css';

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={e => e.stopPropagation()}>
        <div className="dialog-header">
          <h2 className="dialog-title">{title}</h2>
          <button
            onClick={onClose}
            className="dialog-close-button"
          >
            <svg
              className="close-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="dialog-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog; 