import React, { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";

const Order = ({ pizza, showModal, setShowModal}) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { type: "spring", delay: 0.5 },
    },
  };
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle((prev) => setShowTitle(false));
  }, 400);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, [showModal]);
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.p
        variants={childVariants}
        // we don't have to set initial and animate property because the parent propaget to the
        // children if the property name is the same as the child
      >
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;

// <//AnimatePresence//>
//   //{//showTitle &&
//     <motion.h2
//       exit= {{ y: -1000 }}
//     >Thank you for your order :)</motion.h2>}
// </AnimatePresence>
