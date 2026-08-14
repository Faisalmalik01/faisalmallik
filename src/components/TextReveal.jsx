import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextReveal({ text, className = "", as: Tag = "p" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word key={i} progress={scrollYProgress} start={start} end={end}>
            {word}
          </Word>
        );
      })}
    </Tag>
  );
}

function Word({ children, progress, start, end }) {
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  return (
    <span className="mr-[0.28em] inline-block">
      <motion.span style={{ opacity }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}