import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import FadeInText from "./FadeInText";

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[20px] h-[20px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-gradient">(731){" "}</span>
            <span className="text-white">513-4192</span>
          </p>
        </div>
        <FadeInText>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            One Of The Best <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Pressure Washers</span>{" "}
          </h1> 
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          In West TN.
        </h1>
        <p className={`${styles.paragraph}font-poppins font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        Led by quality and customer satisfaction, we will do anything we can to ensure you get what you want. 
        </p>
        </FadeInText>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 relative`}>
        <img src={robot} alt="billing" className="w-[70%] relative z-[5] pr-2 pt-2" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );

export default Hero;