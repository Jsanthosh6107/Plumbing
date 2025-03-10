import {bill} from '../assets';
import styles, {layout} from '../style';
import FadeInText from './FadeInText';

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5] rounded-20'/>
      </div>
      <div className={layout.sectionInfo}>
        <FadeInText>
        <h2 className={styles.heading2}>
          We Can <span className="text-gradient">Solve</span> <br className='sm:block hidden'/>Any Problem.
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          Trust us, if it can be cleaned, we can do it. We've never had a problem we couldnt solve, and we're confident we can solve yours too.
        </p>    
        </FadeInText>
      </div>
    </section>
  )

export default Billing