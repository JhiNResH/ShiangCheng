import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
    <div className='w-full flex justify-between items-center
      md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>顧客評論 <br className='sm:block hidden'/>與用戶體驗</h1>
      <div className='w-full md:mt-0 mt-6'>
      <p className={`${styles.paragraph} text-left max-w-[450px]`}>
      提供創新的電商技術、多元化的產品和整合的服務，以滿足客戶多樣化的需求。
      追求卓越，致力於客戶滿意度和持續改善，透過卓越的品質和可靠的服務，贏得客戶的信任和尊重。
      </p> 
      </div>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials