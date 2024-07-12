"use client";

import { motion } from "framer-motion";
import Button from "../ui/glowing-button";
import BrandMarquee from "./brand-marquee";

const UnlockTheFuture = () => {
  return (
    <div className="space-y-16 py-40">
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="mx-auto flex aspect-[1/1.7] max-w-[90vw] flex-col items-center justify-center gap-7 rounded-xl border border-zinc-800 bg-[radial-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.9)),url(/images/bg/bg1.png)] bg-cover bg-top p-5 md:aspect-square md:max-w-[80vw] md:p-10 lg:aspect-[2/1]"
      >
        <h2 className="max-w-2xl text-center text-3xl font-bold md:text-4xl">
          <span className="text-primary">Unlock the Future</span> of Business at
          the Annual Innovation Summit 2024
        </h2>
        <p className="max-w-2xl text-center text-xl font-normal text-white/55">
          Engage with industry leaders and gain exclusive insights to drive your
          business forward.
        </p>
        <Button
          size={"lg"}
          className="rounded-[20px] after:rounded-[20px] md:px-[54px] md:py-5"
        >
          DISCOVER
        </Button>
      </motion.div>
      <BrandMarquee />
    </div>
  );
};

export default UnlockTheFuture;
