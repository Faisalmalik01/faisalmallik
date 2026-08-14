import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import TextReveal from "./TextReveal";

const CHAPTERS = [
  {
    n: "01",
    title: "MERN Stack",
    story:
      "The JavaScript ecosystem where I design databases, architect APIs, and craft interfaces that feel alive.",
    items: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
  },
  {
    n: "02",
    title: "Toolkit",
    story:
      "The invisible infrastructure that keeps code clean, deployments fast, and collaboration seamless.",
    items: ["Git", "GitHub", "Vercel", "Postman", "Render", "REST API", "JWT", "Authentication"],
  },
  {
    n: "03",
    title: "On the horizon",
    story:
      "Always stretching. Currently obsessed with type safety, containers, and systems that survive scale.",
    items: ["TypeScript", "Docker", "AWS", "System Design"],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section
      id="skills"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: "var(--canvas)" }}
    >
      <div className="max-w-[95%] 2xl:max-w-[90%] mx-auto px-6 sm:px-10" ref={ref}>
        {/* Section opener — centered single line */}
        <div className="flex justify-center mb-24 sm:mb-32">
          <TextReveal
            text="The stack behind the work."
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center"
            as="h2"
          />
        </div>

        {/* Chapters */}
        <div className="space-y-24 sm:space-y-32">
          {CHAPTERS.map((chapter, i) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Chapter header */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-10 sm:mb-14">
                <div className="flex items-baseline gap-5 sm:gap-6">
                  <span
                    className="font-mono text-sm sm:text-base font-medium"
                    style={{ color: "var(--purple)" }}
                  >
                    {chapter.n}
                  </span>
                  <h3
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {chapter.title}
                  </h3>
                </div>

                <p
                  className="font-serif italic text-base sm:text-lg lg:text-xl leading-relaxed max-w-md lg:pb-2 lg:text-right"
                  style={{ color: "var(--muted)" }}
                >
                  {chapter.story}
                </p>
              </div>

              {/* Skills as pure typography */}
              <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6 gap-y-2">
                {chapter.items.map((item, j) => (
                  <span key={item} className="flex items-baseline gap-x-4 sm:gap-x-6">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.15 + j * 0.04, duration: 0.5 }}
                      className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight cursor-default transition-colors duration-300 hover:text-[var(--purple)]"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {item}
                    </motion.span>

                    {j < chapter.items.length - 1 && (
                      <span
                        className="text-xs sm:text-sm font-mono translate-y-[-2px]"
                        style={{ color: "var(--purple)" }}
                      >
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {/* Animated rule */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="origin-left mt-14 sm:mt-20 h-px w-full"
                style={{ background: "var(--border)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}