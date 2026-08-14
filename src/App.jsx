import { useState } from "react";
import { ThemeContext, useThemeState } from "./hooks/useTheme";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const themeState = useThemeState();

  // Controls which actual view is rendered
  const [view, setView] = useState("work");

  // Controls which navbar item is visually active
  const [activeNav, setActiveNav] = useState(null);

  return (
    <ThemeContext.Provider value={themeState}>
      <ScrollProgress />

      <Navbar
        view={view}
        setView={setView}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {view === "work" ? (
        <main>
          <Hero />
          <Projects />
          <Skills />
        </main>
      ) : (
        <main>
          <About />
        </main>
      )}

      <Footer />
      <ThemeToggle />
    </ThemeContext.Provider>
  );
}