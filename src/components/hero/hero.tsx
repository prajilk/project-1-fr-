"use client";

import { motion } from "framer-motion";
import GlowingButton from "../ui/glowing-button";
import HeroMarquee from "./hero-marquee";
import Ellipse from "../icons/ellipse";
import EllipseGroup from "../icons/ellipse-group";
import Line from "../icons/line";

const Hero = () => {
  return (
    <section className="relative flex h-screen flex-col pt-20 md:h-[40rem] md:gap-32">
      <div className="absolute left-1/2 top-0 flex max-w-xs -translate-x-1/2 items-center md:hidden">
        <EllipseGroup />
        <Line />
      </div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex flex-1 flex-col items-center justify-center gap-9"
      >
        <h1 className="max-w-sm text-center text-4xl font-bold md:max-w-full md:text-5xl">
          Connect, Learn, Grow at Business{" "}
          <span className="text-primary">Summit 2024</span>
        </h1>
        <p className="max-w-sm text-center text-2xl text-white/60 md:max-w-full md:text-3xl lg:text-4xl">
          Discover the latest trends and strategies with top
          <br />
          entrepreneurs and experts.
        </p>
        <GlowingButton
          className="rounded-[20px] px-[54px] py-5 uppercase after:rounded-[20px]"
          size={"sm"}
        >
          JOIN
        </GlowingButton>
      </motion.div>
      <Ellipse className="absolute md:hidden" />
      <HeroMarquee />
    </section>
  );
};

export default Hero;
