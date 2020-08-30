import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Loader from './Loader';

const Home = () => {

  const buttonVariants = {
    visible: {
      // x: [0, -20, 20, -20, 20, 0],
      // transition: { delay: 2 }
    },

    hover: {
      // to use keyframes

      // scale: [1, 1.2, 1, 1.2, 1, 1.2, 1],
      
      scale: 1.2,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",

      transition:{
        // yoyo: 10,
        yoyo: Infinity
      }
    },
  };

  return (
    <motion.div
      // animate={{ marginTop: 200, opacity: 0.2, rotateZ: 180 }}
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      exit={{ 
        x: '-100vw',
        transition: { ease: 'easeInOut'}
      }}
    >
      <motion.h2
      // animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          // animate={{ scale: 1.5 }}

          // with out variant
          // whileHover={{
          //   scale: 1.2,
          //   textShadow: "0px 0px 8px rgb(255,255,255)",
          //   boxShadow: "0px 0px 8px rgb(255,255,255)",
          // }}

          // withh variant

          variants={buttonVariants}
          whileHover="hover"
          animate="visible"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
}

export default Home;