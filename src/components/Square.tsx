import React, { ReactNode } from "react";

interface SquareProps {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
}

const Square: React.FC<SquareProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      className={` flex items-center justify-center h-[160px] border-2 border-gray-300 rounded-md font-semibold cursor-pointer text-8xl text-gray-500`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Square;
