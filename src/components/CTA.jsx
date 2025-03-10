import styles from '../style'
import Button from './Button'
import FadeInText from './FadeInText'

const CTA = () =>(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <FadeInText>
      <h2 className={styles.heading2}>So what are you <span className='text-gradient'>Waiting</span> for?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Contact us now, and we'll take care of your problem</p>
      </FadeInText>
    </div>
    <div>
      <Button className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}/>
    </div>
  </section>
)

export default CTA