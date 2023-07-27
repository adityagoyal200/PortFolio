// Transition.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Transition = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility of the component
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Transition;


