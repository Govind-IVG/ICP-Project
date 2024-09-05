import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Searc = () => {
  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #333',
    // borderRadius: '25px',
    overflow: 'hidden',
    width: '100px',
    transition: 'width 0.3s ease',
  };

  const inputStyles = {
    border: 'none',
    outline: 'none',
    padding: '10px',
    width: '80px',
  };

  const buttonStyles = {
    backgroundColor: '#333',
    border: 'none',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyles}>
      <input 
        type="text" 
        placeholder="Search..." 
        style={inputStyles}
      />
      <button 
        style={buttonStyles}
      >
        Search
      </button>
    </div>
  );
};

export default Searc;
