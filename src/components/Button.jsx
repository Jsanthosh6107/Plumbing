import React from 'react';

const Button = ({ styles }) => {
  const phoneNumber = '731-513-4192';

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {phoneNumber}
    </button>
  );
};

export default Button;