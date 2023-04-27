import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/button/Button";
import graduated from "../public/images/home/graduados.png";
import AnimatedCard from "../components/animated/AnimatedCard";
import prepa from "../public/images/home/carousel/preparatoria.png";
import secu from "../public/images/home/carousel/secundaria.png";
import uni from "../public/images/home/carousel/universidad.png";

const Home = () => {
  // States
  const [replay, setReplay] = useState(false);

  //Effects
  useEffect(() => {
    const interval = setInterval(() => {
      const timeout = setTimeout(() => {
        setReplay((replay) => !replay);
      }, 2500);

      setReplay((replay) => !replay);
      return () => clearTimeout(timeout);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col items-center justify-center w-full col-span-12 pt-24 lg:pt-0 lg:col-span-6 bg-primary md:h-[44rem]">
        <h1>TERMINA</h1>
        <h2>TUS ESTUDIOS</h2>
        <Button className="mt-8 text-xl transition-all duration-200 w-52 bg-primary-dark hover:!bg-stone-700 hover:text-primary">
          Saber Más
        </Button>
      </div>
      <div className="flex flex-col w-full col-span-12 h-96 md:h-[44rem] lg:col-span-6 bg-primary">
        <div className="relative w-full h-full lg:mt-36">
          <div className="absolute left-0 p-8 md:p-0 md:left-36 lg:left-0 lg:top-0">
            <Image
              src={graduated}
              width={500}
              height={612}
              placeholder="blur"
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 py-28 px-14">
        <div className="relative flex flex-row hidden lg:block h-[33rem]">
          <AnimatedCard
            intialPhase={0}
            title={"Secundaria"}
            description={
              "Termina tu sencundaria de manera online en tan solo 4 meses"
            }
            key={"secucard"}
            imgSource={secu}
          />
          <AnimatedCard
            intialPhase={1}
            title={"Preparatoria"}
            description={
              "Termina tu preparatoria de manera online en tan solo 4 meses"
            }
            key={"prepacard"}
            imgSource={prepa}
          />
          <AnimatedCard
            intialPhase={2}
            title={"Universidad"}
            description={
              "Termina tu carrera universitaria en tan solo 4 cuatrimestres"
            }
            key={"unicard"}
            imgSource={uni}
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:hidden">
          <div className="relative w-full h-64 my-5 rounded-lg shadow-2xl">
            <Image
              className="absolute z-10 my-5"
              alt="secu banner"
              src={secu}
              loading="eager"
              placeholder="blur"
              layout="fill"
            />
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.9 }}
              className="absolute right-0 z-20 flex flex-col items-center justify-center w-full px-6 py-12 top-40 bg-primary"
            >
              <h3>Secundaria</h3>
              <motion.div
                key={`subline-secu`}
                className="h-0.5 my-3 bg-stone-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
              />
              <p className="my-2 text-sm font-light md:text-lg text-stone-700">
                Termina tu sencundaria de manera online en tan solo 4 meses
              </p>
              <Button
                onClick={() => router.push("/servicios")}
                className="mt-8 text-base text-stone-600 transition-all duration-200 w-52 bg-primary-dark hover:!bg-stone-700 hover:text-primary"
              >
                Ver más
              </Button>
            </motion.div>
          </div>
          <div className="relative w-full h-64 my-5 mt-72">
            <Image
              className="absolute z-10 my-5"
              alt="prepa banner"
              src={prepa}
              loading="eager"
              placeholder="blur"
              layout="fill"
            />
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.9 }}
              className="absolute right-0 z-20 flex flex-col items-center justify-center w-full px-6 py-12 top-40 bg-primary"
            >
              <h3>Preparatoria</h3>
              <motion.div
                key={`subline-prepa`}
                className="h-0.5 my-3 bg-stone-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
              />
              <p className="my-2 text-sm font-light md:text-lg text-stone-700">
                Termina tu preparatoria de manera online en tan solo 4 meses
              </p>
              <Button
                onClick={() => router.push("/servicios")}
                className="mt-8 text-xl text-stone-600 transition-all duration-200 w-52 bg-primary-dark hover:!bg-stone-700 hover:text-primary"
              >
                Ver más
              </Button>
            </motion.div>
          </div>
          <div className="relative w-full h-64 my-5 mt-72">
            <Image
              className="absolute z-10 my-5"
              alt="uni banner"
              src={uni}
              loading="eager"
              placeholder="blur"
              layout="fill"
            />
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.9 }}
              className="absolute right-0 z-20 flex flex-col items-center justify-center w-full px-6 py-12 top-40 bg-primary"
            >
              <h3>Universidad</h3>
              <motion.div
                key={`subline-uni`}
                className="h-0.5 my-3 bg-stone-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
              />
              <p className="my-2 text-sm font-light md:text-lg text-stone-700">
                Termina tu carrera universitaria en tan solo 4 cuatrimestres
              </p>
              <Button
                onClick={() => router.push("/servicios")}
                className="mt-8 text-xl text-stone-600 transition-all duration-200 w-52 bg-primary-dark hover:!bg-stone-700 hover:text-primary"
              >
                Ver más
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
