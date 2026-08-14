import { motion } from "framer-motion";
import { about, experience, education } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import TextReveal from "./TextReveal";

const photos = {
  left: "/about-portrait.png",
  rightTop: "/about-portrait.png",
  rightBottom: "/about-portrait.png",
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section
      id="about"
      className="pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-36 min-h-screen"
      style={{ background: "var(--canvas)" }}
    >
      <div
        className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        ref={ref}
      >
        {/* KEY FIX: lg:items-start prevents right column from stretching */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_1fr] xl:grid-cols-[minmax(0,400px)_1fr] gap-10 lg:gap-10 xl:gap-14 lg:items-start">

          {/* LEFT — Text (this scrolls) */}
          <div className="w-full max-w-lg mx-auto lg:mx-0">

            {/* Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-5xl tracking-tight mb-6 sm:mb-7 lg:mb-8"
              style={{ color: "var(--ink)" }}
            >
              <span className="italic">{about.greeting}</span>
            </motion.h1>

            {/* Paragraphs */}
            <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-9 lg:mb-10">
              {about.paragraphs.map((p, i) => (
                <TextReveal
                  key={i}
                  text={p}
                  className="text-[13px] sm:text-[14px] leading-[1.75] sm:leading-[1.8]"
                  as="p"
                />
              ))}
            </div>

            {/* MOBILE IMAGE — only shows below lg */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:hidden mb-10 sm:mb-12"
            >
              <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-900">
                <img
                  src={photos.left}
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p
                className="font-serif italic text-base sm:text-lg mb-3.5 sm:mb-4"
                style={{ color: "var(--ink-soft)" }}
              >
                There’s more to me than what I build:
              </p>

              <ul className="space-y-2 sm:space-y-2.5 mb-10 sm:mb-12 lg:mb-14">
                {about.interests.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] sm:text-[13px] leading-[1.65] sm:leading-[1.7] pl-4 relative"
                    style={{ color: "var(--muted)" }}
                  >
                    <span
                      className="absolute left-0 top-[0.55em] w-1 h-1 rounded-full"
                      style={{ background: "var(--purple)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* EXPERIENCE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-10 sm:mb-12 lg:mb-14"
            >
              <h2
                className="font-serif italic text-xl sm:text-2xl lg:text-[1.6rem] xl:text-3xl tracking-tight mb-4 sm:mb-5 lg:mb-6"
                style={{ color: "var(--ink)" }}
              >
                Experience
              </h2>

              <div className="space-y-0">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-baseline
                      sm:justify-between
                      gap-1
                      sm:gap-4
                      py-2.5
                      sm:py-3
                      border-b
                    "
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-[12px] sm:text-[13px] font-medium"
                        style={{ color: "var(--purple)" }}
                      >
                        {exp.company}
                      </span>

                      <span
                        className="text-[12px] sm:text-[13px]"
                        style={{ color: "var(--muted)" }}
                      >
                        {" / "}
                        {exp.role}
                      </span>
                    </div>

                    <span
                      className="font-mono text-[10px] sm:text-[11px] flex-shrink-0"
                      style={{ color: "var(--muted)" }}
                    >
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* EDUCATION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2
                className="font-serif italic text-xl sm:text-2xl lg:text-[1.6rem] xl:text-3xl tracking-tight mb-4 sm:mb-5 lg:mb-6"
                style={{ color: "var(--ink)" }}
              >
                Education
              </h2>

              <div className="space-y-0">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-baseline
                      sm:justify-between
                      gap-1
                      sm:gap-4
                      py-2.5
                      sm:py-3
                      border-b
                    "
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div className="flex-1 min-w-0">
                      {edu.link ? (
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] sm:text-[13px] font-medium hover:underline"
                          style={{ color: "var(--purple)" }}
                        >
                          {edu.institution}
                        </a>
                      ) : (
                        <span
                          className="text-[12px] sm:text-[13px] font-medium"
                          style={{ color: "var(--purple)" }}
                        >
                          {edu.institution}
                        </span>
                      )}

                      <span
                        className="text-[12px] sm:text-[13px]"
                        style={{ color: "var(--muted)" }}
                      >
                        {" / "}
                        {edu.degree}
                      </span>
                    </div>

                    <span
                      className="font-mono text-[10px] sm:text-[11px] flex-shrink-0"
                      style={{ color: "var(--muted)" }}
                    >
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Desktop Photo Collage (STICKY, does NOT scroll) */}
          {/* IMPORTANT: sticky lives on a plain div with no transform/animation on it.
              Framer Motion's x/opacity animation goes on a NESTED child instead —
              a transform on the sticky element itself (even translateX(0) left behind
              after the animation finishes) breaks position:sticky in most browsers. */}
          <div className="hidden lg:block min-w-0 sticky top-20 lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="grid grid-cols-2 grid-rows-2 gap-2.5 lg:gap-3 h-[calc(100vh-6rem)] lg:h-[calc(100vh-7rem)] xl:h-[calc(100vh-8rem)]">

                {/* Left — Tall portrait */}
                <div className="row-span-2 overflow-hidden bg-neutral-900">
                  <img
                    src={photos.left}
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Top */}
                <div className="overflow-hidden bg-neutral-900">
                  <img
                    src={photos.rightTop}
                    alt="Work"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Bottom */}
                <div className="overflow-hidden bg-neutral-900">
                  <img
                    src={photos.rightBottom}
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}