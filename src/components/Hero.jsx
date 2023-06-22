import styles from '../style';
import { service, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row item-center py-[6px] px-4 bg-service-gradient rounded-[10px] mb-2'>
        {/*<img src={service} alt= "service" className='w-[32px] h-[32px]'/>*/}
        <p className={`${styles.paragraph} ml-2`}>
        <span className='text-white'>各式</span>通信電纜{" "}
        <span className='text-white'>器材</span>供應商
        </p>         
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
          資訊通訊<br className='sm:block hidden' />{" "}
          <span className='text-gradient'>電纜器材</span>{" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
          整合規劃
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          辦公室電腦、通訊、事務機、監視設備等整合性系統服務。
          影印機出租。通信電纜器材供應。
        </p>
        
    </div>
    {/*<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="computer" className='w-[100%] h-[100%] relative z-[5]'/>
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 botom-20 blue__gradient' />
    </div>*/}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero