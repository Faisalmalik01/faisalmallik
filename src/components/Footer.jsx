import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { personal } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import StarField from "./StarField";

const SOCIALS = [
  { Icon: FaGithub, title: "GitHub", href: personal.github },
  { Icon: FaLinkedin, title: "LinkedIn", href: personal.linkedin },
  { Icon: BsTwitterX, title: "Twitter / X", href: personal.twitter },
];


const FORMSPREE_URL = "https://formspree.io/f/xkjwzqkq";

// fetch("https://formspree.io/f/xkjwzqkq", {
//   method: "POST",
//   headers: { Accept: "application/json", "Content-Type": "application/json" },
//   body: JSON.stringify({ email: "test@example.com", message: "Hello from console" })
// }).then(r => r.json()).then(console.log)

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#050507" }}
    >
      <StarField count={140} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* LEFT — Heading + Big Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-white leading-[1.05]">
              Thank you<br />
              for your<br />
              <span className="italic" style={{ color: "var(--purple-lt)" }}>curiosity</span>!
            </h2>

            <div className="mt-12 flex items-center gap-5">
              {SOCIALS.map(({ Icon, title, href }, i) => (
                <motion.a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border transition-all duration-300"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--purple)";
                    e.currentTarget.style.boxShadow = "0 0 32px rgba(125,122,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon
                    size={26}
                    className="text-white/60 group-hover:text-white transition-colors duration-300"
                  />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                    style={{ background: "var(--purple)" }}
                  >
                    {title}
                  </span>
                </motion.a>
              ))}
            </div>

            <p className="mt-8 text-[13px] max-w-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Open to collaborations, freelance projects, and interesting conversations. Drop a message or find me on socials.
            </p>
          </motion.div>

          {/* RIGHT — Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-2xl border p-6 sm:p-8"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-1" style={{ color: "var(--purple)" }}>
                    Contact
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight">
                    Let's talk
                  </h3>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "var(--purple)" }}
                >
                  <Send size={16} color="#050507" strokeWidth={2.5} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.14em] mb-2.5" style={{ color: "var(--muted)" }}>
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="hello@example.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] text-white placeholder:text-white/20 outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--purple)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.14em] mb-2.5" style={{ color: "var(--muted)" }}>
                    Project details
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your idea, timeline, and budget..."
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] text-white placeholder:text-white/20 outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--purple)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  className="w-full py-3.5 rounded-xl text-[13px] font-semibold tracking-wide text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                  style={{
                    background: status === "success" ? "var(--purple)" : "var(--purple)",
                    opacity: status === "submitting" ? 0.7 : 1,
                  }}
                >
                  {status === "submitting" && (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      Message sent
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </>
                  )}
                  {status === "error" && "Something went wrong — try again"}
                  {status === "idle" && (
                    <>
                      Send message
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-[12px]" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}