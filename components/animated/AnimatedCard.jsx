import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../button/Button";
import Image from "next/image";
import { useRouter } from "next/router";

const AnimatedCard = ({ intialPhase, imgSource, title, description, uri }) => {

  const router = useRouter();
  //States
  const [phaseNumber, setPhaseNumber] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const phaseNumberRef = useRef()

  //Effects
  useEffect(() => {
    setPhaseNumber(intialPhase)
  }, []);

  useEffect(() => {
    phaseNumberRef.current = phaseNumber;
  }, [phaseNumber])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(phaseNumberRef.current === 1)
      {
        setShowDetails(true);
      }
    }, 2400)
    
    return () => clearTimeout(timeout);
  }, [phaseNumber]);

  useEffect(() => {
   const timeout =  setTimeout(() => {
      setShowDetails(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [showDetails])

  useEffect(()=>{
    const interval = setInterval(() => {
      if(phaseNumberRef.current<=1)
      {
        setPhaseNumber(val => val + 1);
      }
      else
      {
        setPhaseNumber(0)
      }
    }, 12000)

    return () => clearInterval(interval);
  }, [])

  const phases = [
    {
      animateParent: {
        x: 170,
        top: 75,
        height: "22rem",
        zIndex: 8
      },
      animateChild: {
        top: 0,
        left: '40rem',
        height: "22rem",
        width: '4rem'
      },
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeatDelay: 1
      },
      transitionChild: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    {
      animateParent: {
        top: 15,
        x: 0,
        zIndex: 20,
        boxShadow: '0px 10px 10px 10px rgba(0, 0, 0, 0.2)'
      },
      animateChild: {
        top: 0,
        marginTop: -25, 
        right: 0,
        width: ['6rem', '10rem', '20rem'],
        height: ['22rem', '26rem', '30rem'],
        boxShadow: '0px 10px 10px 10px rgba(0, 0, 0, 0.2)'
      },
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
      transitionChild: {
        duration: 0.5,
        ease: "linear",
      }
    },
    {
      animateParent: {
        x: -300,
        top: 75,
        height: "22rem",
        zIndex: 10
      },
      animateChild: {
        top: 0,
        left: 0,
        height: '22rem',
        width: '4rem'
      },
      transition: {
        duration: 2,
        ease: "easeInOut",
        
      },
      transitionChild: {
        duration: 0.5,
        ease: "easeInOut",
      }
    }
  ]
  return (
    <motion.div 
      layout
      className=" absolute h-[26rem] w-[40rem] right-60"
      animate = {phases[phaseNumber].animateParent}
      transition={phases[phaseNumber].transition}
    >
      <div className="relative w-full h-full">
        {imgSource &&
          <Image alt={`card-${title}`} src={imgSource} placeholder="blur" loading="eager" layout="fill" />
        }
        <motion.div
          layout
          animate = {phases[phaseNumber].animateChild}
          transition={phases[phaseNumber].transitionChild} 
          className="absolute right-0 flex flex-col items-center justify-center px-8 py-2 bg-primary h-fit w-fit"
        >
          <motion.div className=" w-fit h-fit"
            key={`title-${title}`} 
            animate = {{ rotate: phaseNumber === 1 ? 0 : -90}}
            transition={{duration: 0.4, ease: 'easeInOut'}}
          >
            <h3>{title || 'Without'}</h3>
          </motion.div>
          <AnimatePresence>
            {showDetails && (
            <>
              <motion.div
                key={`subline-${title}`}
                className="h-0.5 my-3 bg-stone-600"
                initial ={{width: 0}}
                animate= {{width: '100%'}}
                exit={{width: 0}}
                transition={{duration: 0.5, ease: 'easeInOut', delay: showDetails ? 1 : 0}}
              />
              <motion.p 
                key={`description-${title}`}
                className="my-2 text-lg font-light text-stone-700"
                initial={{y:-15, opacity: 0}}
                animate = {{y: 0, opacity: 1}}
                exit={{y:-10, opacity: 0}}
                transition={{duration: 0.5, ease: 'easeInOut', delay: showDetails ? 1 : 0}}
              >
                {description}
              </motion.p>
              <motion.div
                initial={{y:-15, opacity: 0}}
                animate = {{y: 0, opacity: 1}}
                exit={{y:-10, opacity: 0}}
                transition={{duration: 0.5, ease: 'easeInOut', delay: showDetails ? 1 : 0}}
              >
                <Button onClick = {() => router.push('/servicios') } className="mt-8 text-xl text-stone-600 transition-all duration-200 w-52 bg-primary-dark hover:!bg-stone-700 hover:text-primary">
                  Ver más
                </Button>
              </motion.div>
            </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
} 

export default AnimatedCard;