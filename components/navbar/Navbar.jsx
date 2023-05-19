import Image from 'next/image';
import Button from '../button/Button';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import {BiMenu, BiX} from 'react-icons/bi'
import Link from 'next/link';

const Navbar = (props) => {

  // States
  const [isShowing, setIsShowing] = useState(true);
  const [isShowingDrawer, setIsShowingDrawer] = useState(false);
  const [y, setY] = useState(0)

  // Hooks 
  const router = useRouter();

  // Effects

  // Functions
   function handleRouteActive(activeRoute) {
      if(router.pathname === activeRoute)
      {
        return '!text-primary'
      }
      return ''
   }

   function handleRouteActiveRes(activeRoute) {
      if(router.pathname === activeRoute)
      {
        return '!text-underline-offset-4 decoration-white decoration-solid decoration-1'
      }
      return ''
   }

  // Animations Configs

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const responsiveContainer = {
    initial: { x: "100vw", transition: { staggerChildren: 0.2, when: "beforeChildren", duration: 0.5}  },
    hidden: { x: "100vw", transition: { staggerChildren: 0.2, when: "beforeChildren", duration: 0.5}  },
    show: {
      x: "50vw",
      transition: {
        staggerChildren: 0.15,
      }
    }
  }
  
  const item = {
    initial: { opacity: 0, x:200 },
    hidden: { opacity: 0, x:200 },
    show: { opacity: 1, x:0 }
  }

  return (
    <div className={`transform transition-all duration-200 fixed top-0 left-0 right-0 z-50 bg-primary ${isShowing ? '' : '-translate-y-32 opacity-0'}`}>
      <div className='relative flex items-center justify-between w-screen px-10 py-1'>
        <motion.div className='flex flex-row items-center justify-center p-1 lg:hidden' transition={{duration: 0.3, ease: "circOut"}} whileTap={{scale: 0.85}} whileHover={{scale: 0.90}}>
          <Image className='transition-all duration-200 cursor-pointer hover:invert' onClick={() => router.push('/')} src={'/images/navbar_logo@2x.png'} width = {50} height = {40}/>
          <h4 className='mt-2 ml-2 text-4xl font-black tracking-wider text-stone-800'>UVIC</h4>
        </motion.div>
        <AnimatePresence exitBeforeEnter = {true}>
          { isShowing &&
            <motion.ol variants={container} initial = "hidden" animate = "show" exit="hidden" className='flex-row items-center justify-around hidden w-full py-2 list-none lg:flex pl-14'>
              <motion.li variants={item}>
                <Link href="/services">
                  <a className={`transition duration-300 text-2xl font-helvetica text-stone-600 mr-8 ${handleRouteActive('/services')}`}>Servicios</a>
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/about-us">
                  <a className={`transition duration-300 text-2xl font-helvetica text-stone-600 mr-8 ${handleRouteActive('/about-us')}`}>¿Quienes Somos?</a>
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Image className='transition-all duration-200 cursor-pointer hover:invert' onClick={() => router.push('/')} src={'/images/navbar_logo@2x.png'} width = {63} height = {58}/>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/study-plan">
                  <a className={`transition duration-300 text-2xl font-helvetica text-stone-600 mr-8 ${handleRouteActive('/study-plan')}`}>Plan de Estudios</a>
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/directory">
                  <a className={`transition duration-300 text-2xl font-helvetica text-stone-600 mr-8 ${handleRouteActive('/directory')}`}>Directorio</a>
                </Link>
              </motion.li>
              <motion.li 
                  transition={{duration: 1.5, ease: 'easeInOut'}}
                  initial = {{opacity:0, y:150}}
                  animate = {{opacity:1, y: 0}}
                  exit = {{opacity: 0, y:150}} 
                  className='flex flex-row items-center justify-around ml-12 w-fit h-fit'
                >
                  <Button className="px-5 py-3 text-base !text-primary bg-stone-800 hover:bg-stone-300 hover:!text-black" onClick={() => router.push('/login') }>Iniciar Sesión</Button>
                </motion.li>
            </motion.ol>
          }
        </AnimatePresence>

        {/**Responsive menu */}
          <motion.div transition={{duration: 0.3, ease: "circOut"}} whileTap={{scale: 0.90}}>
            <BiMenu size={'2.5rem'} onClick={() => setIsShowingDrawer(true)} className='float-right mr-3 duration-300 cursor-pointer transition-color hover:text-white lg:hidden text-stone-600'/>
          </motion.div>
          <AnimatePresence exitBeforeEnter = {true}>
            {isShowingDrawer &&
              <motion.ol transition={{duration: 1, ease: "easeInOut"}} variants={responsiveContainer} initial="initial" animate = "show" exit="hidden" className='absolute list-none inset-y-0 flex flex-col items-center justify-start w-[50vw] h-screen p-8 bg-primary-dark lg:hidden left-0'>
                <motion.li className='flex justify-end float-right w-full h-fit' transition={{duration: 1.5, ease: 'easeInOut'}} initial={{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}}>
                  <BiX onClick={() => setIsShowingDrawer(false)} size={'2.5rem'} className='text-white duration-300 cursor-pointer hover:text-white/70 transition-color' />
                </motion.li>
                <motion.li className='mt-24 align-center' variants={item}>
                  <Link href="/services">
                    <a className={`transition duration-300 hover:text-stone-300 text-sm md:text-lg font-helvetica text-white ${handleRouteActiveRes('/services')}`}>Servicios</a>
                  </Link>
                </motion.li>
                <motion.li className='mt-5' variants={item}>
                  <Link href="/about-us">
                    <a className={`transition duration-300 hover:text-stone-300 text-sm md:text-lg font-helvetica text-white ${handleRouteActiveRes('/about-us')}`}>¿Quienes Somos?</a>
                  </Link>
                </motion.li>
                <motion.li className='mt-5' variants={item}>
                  <Link href="/study-plan">
                    <a className={`transition duration-300 hover:text-stone-300 text-sm md:text-lg font-helvetica text-white ${handleRouteActiveRes('/study-plan')}`}>Plan de Estudios</a>
                  </Link>
                </motion.li>
                <motion.li className='mt-5' variants={item}>
                  <Link href="/directory">
                    <a className={`transition duration-300 hover:text-stone-300 text-sm md:text-lg font-helvetica text-white ${handleRouteActiveRes('/directory')}`}>Directorio</a>
                  </Link>
                </motion.li>
                <motion.li 
                  transition={{duration: 1.5, ease: 'easeInOut'}}
                  initial = {{opacity:0, y:150}}
                  animate = {{opacity:1, y: 0}}
                  exit = {{opacity: 0, y:150}} 
                  className='flex flex-col items-center justify-around mt-24 md:w-9/12'
                >
                  <Button className="px-5 py-3 text-xs md:text-sm !text-primary bg-stone-800 hover:bg-stone-300 hover:!text-black" onClick={() => router.push('/session') }>Iniciar Sesión</Button>
                </motion.li>
              </motion.ol>

            }
          </AnimatePresence>
      </div>
    </div>
  );

}

export default Navbar;