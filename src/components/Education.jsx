import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-28 sm:py-36" style={{ background: "var(--canvas-alt)" }}>
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-[0.14em] mb-4"
          style={{ color: "var(--purple)" }}
        >
          Education
        </motion.p>

        <h2
          className="font-serif text-4xl sm:text-5xl tracking-tight mb-16"
          style={{ color: "var(--ink)" }}
        >
          Academic background<span style={{ color: "var(--purple)" }}>.</span>
        </h2>

        <div className="relative">
          <div className="absolute left-[19px] top-4 bottom-4 hidden sm:block w-px" style={{ background: "var(--border)" }} />

          <div className="space-y-10">
            {education.map((edu, index) => (
              <motion.article
                key={edu.institution}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full items-center justify-center z-10"
                  style={{ background: "var(--canvas)", border: "1px solid var(--border)" }}
                >
                  <GraduationCap size={16} style={{ color: "var(--purple)" }} />
                </div>

                <div
                  className="sm:ml-16 rounded-3xl border p-6 sm:p-8"
                  style={{ background: "var(--canvas)", borderColor: "var(--border)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <h3 className="font-semibold text-xl" style={{ color: "var(--ink)" }}>
                        {edu.institution}
                      </h3>
                      <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{edu.degree}</p>
                    </div>
                    <span
                      className="px-4 py-1.5 rounded-full font-mono text-[11px] self-start"
                      style={{ background: "var(--panel)", border: "1px solid var(--border)", color: "var(--ink-soft)" }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {edu.highlights.map((h, i) => (
                      <p key={i} className="text-[13.5px] leading-[1.75] pl-4 relative" style={{ color: "var(--muted)" }}>
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full" style={{ background: "var(--purple)" }} />
                        {h}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}