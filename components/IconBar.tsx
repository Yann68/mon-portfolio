'use client';

import { FaBars } from 'react-icons/fa6';

interface IconBarProps {
  onClick: () => void;
}

const IconBar = ({ onClick }: IconBarProps) => {
  return (
    <div
      onClick={onClick}
      className="
     fixed
      cursor-pointer
      text-2xl
      right-3
      top-3
      sm:hidden
      hover:opacity-50
      z-20">
      <FaBars />
    </div>
  );
};

export default IconBar;