import { feedback } from "../constants"
import styles from "../style"
import FadeInText from "./FadeInText"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} flex-col relative`}>
      <FadeInText>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
        <h1 className={styles.heading2}>What people are <br className="sm:block hidden"/><span className="text-gradient">saying</span> about us</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Find out what the community thinks of us, and why you can trust us to do the job for you! </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
      </FadeInText>
    </section>
)

export default Testimonials