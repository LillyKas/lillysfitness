import React, { useState, useEffect } from 'react';

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;



  
  const containerStyles = {
    height: 15,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    margin: "-50%"
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1.3333s ease-in-out',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
   <div style={containerStyles}>
      <div style={fillerStyles}>
        
      </div>
    </div>
  );
};

export default ProgressBar;