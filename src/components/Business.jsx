import { features } from "../constants";
import styles, {layout} from "../style";
import Button from "./Button";
import FadeInText from "./FadeInText";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card group hover:text-white`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[25px] h-[25px] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gradient text-[18px] leading-[23px] mb-1 group-hover:text-white">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-500 text-[16px] leading-[24px] mb-1 group-hover:text-white">
        {content}
      </p>
    </div>
  </div>
);


const Business = () => (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <FadeInText>
        <h2 className={styles.heading2}>Local, Industral, Detailing,<br className="sm:block hidden"/> We Do It<span className="text-gradient"> All</span>.</h2>
        <p className={`${styles.paragraph}max-w-[470px] mt-5`}>
          There are so many services that we provide, whatever problem you have we can solve!
        </p>
        <Button styles="mt-10"/>
        </FadeInText>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )


export default Business