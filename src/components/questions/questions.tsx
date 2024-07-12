"use client";

import { useState } from "react";
import ArrowDown from "../icons/arrow-down";
import { motion } from "framer-motion";

const QnA = [
  {
    question: "What is the Business Innovation Summit 2024?",
    answer:
      "The Business Innovation Summit 2024 is an exclusive event bringing together industry leaders, innovators, and professionals to explore the latest trends, strategies, and technologies shaping the future of business.",
  },
  {
    question: "Where and when will the event take place?",
    answer:
      "The event will be held virtually on July 15, 2024, from 9:00 AM to 5:00 PM (PST). Attendees can join from anywhere in the world.",
  },
  {
    question: "What is included in the Standard Access pass?",
    answer:
      "The Standard Access pass includes full access to keynote sessions, participation in panel discussions, entry to networking events, digital event materials, and complimentary refreshments.",
  },
  {
    question: "What additional benefits do I get with the Premium Access pass?",
    answer:
      "The Premium Access pass includes all Standard Access features plus VIP seating at keynote sessions, exclusive Q&A sessions with speakers, access to the VIP lounge, a premium networking dinner, a personalized event kit, and early access to digital event materials.",
  },
  {
    question: "How do I register for the event?",
    answer:
      'You can register for the event by clicking the "Register Now" button on our landing page and filling out the registration form with your details.',
  },
];

const Questions = () => {
  return (
    <div className="mb-24 mt-48 space-y-20">
      <h2 className="mx-auto text-center text-2xl font-bold capitalize md:text-4xl">
        Answer to our most
        <br /> frequently asked question
      </h2>
      <ul className="mx-auto max-w-2xl space-y-10 px-5 lg:max-w-[54rem]">
        {QnA.map((list, i) => (
          <QuestionList index={i} {...list} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Questions;

type QuestionListProps = {
  index: number;
  question: string;
  answer: string;
};

const QuestionList = ({ index, question, answer }: QuestionListProps) => {
  const [open, setOpen] = useState<number | null>(null);
  const isItemOpen = index === open;

  return (
    <li>
      <div
        className="mx-auto flex max-w-sm cursor-pointer items-center justify-between gap-5 md:mx-0 md:max-w-full md:gap-0"
        onClick={() => setOpen((prev) => (prev === index ? null : index))}
      >
        <h3 className="max-w-2xl text-xl font-medium md:text-[32px] md:leading-10">
          {question}
        </h3>
        <ArrowDown
          className={`${isItemOpen ? "-rotate-180" : "rotate-0"} size-12 flex-shrink-0 transition-transform duration-300 md:size-auto`}
        />
      </div>
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={isItemOpen ? { height: "fit-content", opacity: 1 } : {}}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="mx-auto max-w-sm overflow-hidden md:mx-0 md:max-w-full"
      >
        <hr className="my-7 border-primary/50" />
        <p className="text-lg opacity-70">{answer}</p>
      </motion.div>
    </li>
  );
};
