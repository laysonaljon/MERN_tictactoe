import React from 'react'

const Button = ({ onClick, title, styles }) => {
  return (
    <button className={styles} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button