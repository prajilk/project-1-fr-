"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import MapPin from "../icons/map-pin";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

const Explore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    once: true,
  });

  return (
    <div className="space-y-28" ref={ref}>
      <TextRotate>
        <span className="text-primary">Explore</span> the Schedule of Events and
        List of Speakers
      </TextRotate>
      <div
        className="scrollbar-none flex items-center overflow-x-scroll md:overflow-x-auto lg:justify-center lg:gap-10"
        style={{
          transform: isInView ? "none" : "translateY(-20%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <div className="w-screen flex-shrink-0 p-5 md:w-1/2 lg:w-fit lg:p-0">
          <div
            className="relative aspect-[1/1.5] w-full flex-shrink-0 overflow-hidden rounded-xl border border-zinc-800 lg:h-[40vw] lg:w-[25vw]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(/images/speakers/img1.png)",
              backgroundPosition: "50% 0%",
              backgroundSize: "120% 130%",
            }}
          >
            <div className="absolute bottom-0 right-0 w-11/12 space-y-1 rounded-tl-2xl border-l border-zinc-500 bg-black/30 p-10 backdrop-blur-md">
              <span className="text-sm opacity-60">24/10/2024</span>
              <h3 className="text-xl font-bold">Dan CHUN CHUI</h3>
              <div className="flex items-center gap-1.5">
                <MapPin />
                <span className="text-lg opacity-80">Dubai Marina</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 p-5 md:w-1/2 lg:w-fit lg:p-0">
          <div
            className="relative aspect-[1/1.5] w-full flex-shrink-0 rounded-xl border border-zinc-800 lg:h-[45vw] lg:w-[28vw]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(/images/speakers/img2.png)",
              backgroundPosition: "50% 0%",
              backgroundSize: "110% 120%",
            }}
          >
            <div className="absolute bottom-0 right-0 w-11/12 space-y-1 rounded-tl-2xl border-l border-zinc-500 bg-black/30 p-10 backdrop-blur-md">
              <span className="text-sm opacity-60">24/10/2024</span>
              <h3 className="text-xl font-bold">Juan Carlos Pereira</h3>
              <div className="flex items-center gap-1.5">
                <MapPin />
                <span className="text-lg opacity-80">Dubai Marina</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 p-5 md:w-1/2 lg:w-fit lg:p-0">
          <div
            className="relative aspect-[1/1.5] w-full flex-shrink-0 rounded-xl border border-zinc-800 lg:h-[40vw] lg:w-[25vw]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(/images/speakers/img3.png)",
              backgroundPosition: "50% 0%",
              backgroundSize: "110% 120%",
            }}
          >
            <div className="absolute bottom-0 right-0 w-11/12 space-y-1 rounded-tl-2xl border-l border-zinc-500 bg-black/30 p-10 backdrop-blur-md">
              <span className="text-sm opacity-60">24/10/2024</span>
              <h3 className="text-xl font-bold">Francesca TOTTI</h3>
              <div className="flex items-center gap-1.5">
                <MapPin />
                <span className="text-lg opacity-80">Dubai Marina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

const TextRotate = ({ children }: PropsWithChildren) => {
  const [index, setIndex] = useState(0);
  const text = [children, children];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0;
        return state + 1;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [text.length]);

  return (
    <div className="relative flex w-full items-center justify-center py-4 text-center">
      <AnimatePresence>
        <motion.div
          className="absolute max-w-sm text-2xl font-bold tracking-tight md:max-w-full md:text-4xl"
          key={index}
          initial={{ y: -20, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.8 }}
          transition={{
            ease: "easeInOut",
            delay: 0.2,
            duration: 0.5,
          }}
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
