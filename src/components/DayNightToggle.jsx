import React from 'react';
import { BsEmojiSunglasses, BsMoonStars } from 'react-icons/bs';

function DayNightToggle({ theme, toggleTheme }) {
  return (
    <button 
      onClick={toggleTheme} 
      style={{ 
        cursor: 'pointer', 
        backgroundColor: 'transparent', 
        border: 'none', 
        borderRadius: '50%', 
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }} 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <BsEmojiSunglasses size={24} />
      ) : (
        <BsMoonStars size={24} />
      )}
    </button>
  );
}

export default DayNightToggle;
