import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        來試試我們的服務！
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>提供創新的電商技術、多元化的產品和整合的服務，以滿足客戶多樣化的需求。
      追求卓越，致力於客戶滿意度和持續改善，透過卓越的品質和可靠的服務，贏得客戶的信任和尊重。</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA