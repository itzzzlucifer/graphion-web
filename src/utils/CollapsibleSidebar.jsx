import React, { useState, useEffect } from 'react';

const CollapsibleSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (event.target.id !== 'mySidebar' && !event.target.closest('#mySidebar')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const clickOutsideListener = document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]); // Re-add listener on state change

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button className="toggle-btn" onClick={toggleSidebar}>&#9776;</button>
      <div
        id="mySidebar"
        className={`sidebar ${isOpen ? 'active' : ''}`}
        onClick={(e) => e.stopPropagation()} // Prevent click bubbling
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="content">
        <p>This is the main content of the website.</p>
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
