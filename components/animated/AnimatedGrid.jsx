import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { list } from "../../utils/animation-values";

const AnimatedGrid = () => {
  //States
  const [photos, setPhotos] = useState([]);
  const [isVisible, setIsVisible] = useState(true)

  //Effects
  useEffect(() => {
   
  }, [])

  //Methods
  const getRandomImages = () => {

  }
  return (
    <div className="w-full h-full p-4">
      <AnimatePresence>
        {isVisible && 
          <motion.div
            variants={list}
            animate = 'visible'
            exit='hidden' 
            onAnimationComplete={() => console.log('animation complete' + isVisible)} 
            className="grid grid-cols-12 grid-rows-6 gap-2"
          >
            
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}