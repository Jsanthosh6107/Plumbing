import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
import FadeInText from './FadeInText'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
      <FadeInText>
        <h2 className={styles.heading2}> No one matches our <br className='sm:block  hidden' /><span className='text-gradient'>Speed</span> and <span className='text-gradient'> Service</span></h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>Our speed is unparalleled to the competition. We'll arrive in record time and get the job done. If you have not already, call us so we can get started now, and we'll be there in no time flat.</p>
        <Button styles='mt-10'/>
      </FadeInText>
      </div>
      <div className={layout.sectionImg}>
      <div className="absolute z-[0] w-[90%] h-[90%] -right-[-5%] rounded-full blue__gradient"/>
        <img src={card} alt="card" className='w-[100%] h-[100%] z-[1]'/>
      </div>
    </section>
  )

export default CardDeal