import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCard";
import TextReveal from "./TextReveal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [ref, inView] = useInView({ threshold: 0.02 });

  const filtered =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="work" className="py-28 sm:py-36" style={{ background: "var(--canvas)" }}>
      <div className="max-w-[95%] 2xl:max-w-[92%] mx-auto px-6" ref={ref}>
        <div className="flex justify-center mb-12">
          <TextReveal
            text="I Work across"
            className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight justify-center"
            as="h2"
          />
        </div>

        <FilterTabs active={activeFilter} onChange={setActiveFilter} />

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}