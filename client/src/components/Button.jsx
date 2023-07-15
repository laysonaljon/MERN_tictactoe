import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ onClick, title, styles, icon, page }) => {
  return (
  <button className={styles} onClick={onClick}>
    <div className="flex items-center justify-center">
      {icon && (
        <img
          src={icon}
          alt="icon"
          width={20}
          height={20}
          className="object-contain mr-2"
        />
      )}
      <span>{title}</span>
    </div>
  </button>
  );
};

export default Button;
