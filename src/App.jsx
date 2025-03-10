import styles from "./style";

import { Billing, Business, Button, CardDeal, CTA, FeedbackCard, Footer, GetStarted, Hero, Navbar, Stats, Testimonials } from './components';

const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Stats />
         <Business />
         <Billing />
         <CardDeal />
         <Testimonials />
         <CTA />
         <Footer />
        </div>
      </div>

    </div>
  );
};

export default App;

