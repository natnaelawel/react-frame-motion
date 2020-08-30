import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollViewport from './ScrollViewport'

function Modal({showModal, setShowModal}) {

    const backdropVariants = {
        hidden:{
            opacity: 0
        },
        visible:{
            opacity: 1
        },
        exit:{

        }
    }

    const modalVariants = {
        hidden:{
            y: '-100vh',
            opacity: 0
        },
        visible:{
            y: '30vh',
            opacity: 1,

            transition:{
                duration: 2,
                delay: 0.5,
                ease: 'easeInOut'
            }
        }
    }



    return (
      <AnimatePresence exitBeforeEnter>
        {showModal && (
        <div style={{ display: 'flex' }}>
        <div style={{ width: 200, backgroundColor: '#3c3' }}>
        view port example
            <ScrollViewport />
        </div> 
        <motion.div
            className="backdrop"
            variants={backdropVariants}
            animate="visible"
            initial="hidden"
            exit="exit"
            style={{ overflowY: 'scroll' }}
          >
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="modal"
              variants={modalVariants}
              exit="hidden"
            >
              <p>Want to make another purchage?</p>
              <Link to="/">
                <motion.button>Start again</motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          </div>
          )} 
        
      </AnimatePresence>
    );
}

export default Modal
