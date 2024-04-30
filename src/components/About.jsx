import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const SeviceCard = ( {index, title, icon} ) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] fount-bold text-center'>{title}</h3>
        </div>
      </motion.div>  
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.dev variants ={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.dev>

    <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      An enthusiastic, result-driven Software engineer who enjoys providing solutions to complex issues. Excel in developing robust code, enhancing software performance, and developing new software. Always eager to learn new technologies and incorporate them into existing systems to increase their reliability and efficiency. Having four years of professional experience, an extensive knowledge of software development processes, and a track record of producing high-quality code on time. My technical expertise spans multiple programming languages, frameworks, and technologies, allowing me to adapt quickly to new projects and technologies. Committed to delivering tangible results and making a significant impact on business outcomes. 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {
        services.map((service,index) => (
          <SeviceCard key={service.title} index={index} {...service} />
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");