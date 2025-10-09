'use client';

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
        <motion.div 
            key={pathname}
            className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { duration: 0.2, ease: "easeInOut"},
            }}
            exit={{ 
                opacity: 0,
                transition: { duration: 0.2, ease: "easeInOut"}
            }}
        >
            <Stairs />
        </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;