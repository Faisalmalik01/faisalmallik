import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

function StickyNote({ children, color, rotate, x, y, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate - 5 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="absolute block"
      style={{ left: x, top: y }}
    >
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [rotate, rotate + 2, rotate] }}
        transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
        className="px-5 py-4 rounded-xl shadow-lg max-w-[220px]"
        style={{ background: color, transformOrigin: "center center" }}
      >
        <p className="text-[12px] leading-relaxed font-mono" style={{ color: "#1a1a2e" }}>
          {children}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16"
      style={{ background: "var(--canvas)" }}
    >
      {/* Floating sticky notes */}
      <StickyNote color="#D4F472" rotate={-8} x="8%" y="18%" delay={0.4}>
            MERN Stack<br/>Developer :)
      </StickyNote>
      <StickyNote color="#C4B5FD" rotate={6} x="78%" y="22%" delay={0.6}>
            Currently thinking<br/>about system design<br/>and scalable APIs.
      </StickyNote>
      <StickyNote color="#60A5FA" rotate={-4} x="72%" y="62%" delay={0.8}>
            Open to<br/>opportunities!
      </StickyNote>
      <StickyNote color="#FDE047" rotate={5} x="12%" y="60%" delay={1.0}>
            Based in<br/>Kashmir, India
      </StickyNote>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-sm mb-8"
          style={{ color: "var(--muted)" }}
        >
          I'm {personal.name.split(" ")[0]}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
          style={{ color: "var(--ink)" }}
        >
          I build{" "}
          <span className="italic" style={{ color: "var(--purple)" }}>products</span>,{" "}
          <span className="italic" style={{ color: "var(--purple)" }}>systems</span>, and{" "}
          <span className="italic" style={{ color: "var(--purple)" }}>interfaces</span>
          <br className="hidden sm:block" />{" "}
          for the web.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <div
            className="w-1 h-12 rounded-full"
            style={{ background: "var(--border)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}