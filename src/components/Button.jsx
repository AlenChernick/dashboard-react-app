import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
      onClick={() => setIsClicked(initialState)}
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`w-${width} text-${size} p-3 hover:drop-shadow-xl`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
