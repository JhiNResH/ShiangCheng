import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          營業項目 <br className='sm:block hidden'/></h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          辦公室系統整合規劃 |
          企業電腦定期維護 |
          企業網路資源整合 |
          機房代管雲端服務 |
          電腦軟硬體維修 |
          數位電話交換機系統 |
          數位監控系統 |
          門禁考勤系統 |
          投影機及會議影音系統 |
          網路規劃機房設計施工 |
          全彩影印機出租
          </p>
          <Button styles='mt-10' />
      </div>
    </section>
  )
}

export default Business