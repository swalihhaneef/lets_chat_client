// components/Dropdown.js
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ trigger, menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState('bottom-start');
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const updatePlacement = () => {
    if (dropdownRef.current && menuRef.current) {
      const buttonRect = dropdownRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();

      // Default placement to bottom-start
      let newPlacement = 'bottom-start';

      // Check space below
      if (buttonRect.bottom + menuRect.height > window.innerHeight) {
        // Not enough space below, place on top if possible
        newPlacement = 'top-start';
      }

      // Check space above
      if (buttonRect.top - menuRect.height < 0) {
        // Not enough space above, revert to bottom
        newPlacement = 'bottom-start';
      }

      setPlacement(newPlacement);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      updatePlacement();
    }
  }, [isOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={handleToggle}>
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`dropdown-menu show ${placement}`}
          ref={menuRef}
          style={{ position: 'absolute' }}
        >
          {menu}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
