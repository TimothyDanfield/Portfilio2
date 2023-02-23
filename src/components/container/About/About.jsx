import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/portfolio.jpg"
const About = () => {


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

    <p>My name is Timothy Danfield, and I am a full-stack web developer with experience in React, HTML/CSS, Java, and JavaScript. I have a passion for creating beautiful and functional websites that are both user-friendly and visually appealing. I specialize in React, which is a JavaScript library used to create user interfaces. With React, I can create dynamic web applications that are fast and responsive. I also have experience with HTML/CSS, which allows me to create the structure and styling of websites.In addition to React, I also have experience with Java and JavaScript. With these two languages, I can create powerful back-end applications that can interact with databases and APIs. I am always looking for new challenges and opportunities to learn more about web development. If you're looking for someone who is passionate about creating amazing websites using the latest technologies, then look no further!</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a href='#' download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About