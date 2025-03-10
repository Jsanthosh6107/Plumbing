import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  const phoneNumber = '731-343-4979';

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer my-5`}
      onClick={handleClick}
    >
      <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Call</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[15px] h-[15px] pl-1 object-contain" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Our Number</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;