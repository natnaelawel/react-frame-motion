import React from 'react';
import {motion} from 'framer-motion'

const Header = () => {

  const svgVariants = {
    hidden: {
      rotate: -360
    },
    visible: {
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 1
      }

    },
    exit:{

    }
  }

  const pathVariants = {
    hidden:{
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1, 
      transition: {duration: 2, ease: 'easeInOut'}
    }
  }

  return (
    <header>
      <motion.div className="logo"
        drag
        dragConstraints={{ left: 0, top: 0, right: 1000, bottom: 0}}
        dragElastic={2}
      >
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          variants={svgVariants}
          animate="visible"
          initial="hidden"
          // exit="exit"
        >
          <motion.path
            variants={ pathVariants }
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={ pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div 
      className="title"
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ 
        delay: 0.2,
        // type: 'tween'
        // the default is spring
        // if we are using spring we can use the stiffness property
        type: 'spring',
       stiffness: 120
       // the default value of stiffnet is about 100 the higher the number the more stify the object it is


      }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;