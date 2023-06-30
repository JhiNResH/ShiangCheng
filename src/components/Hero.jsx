import styles from '../style';
import { service, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from 'framer-motion';
import { ComputersCanvas } from "./canvas";

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

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <ComputersCanvas />
    </div>

    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href="#features">
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
