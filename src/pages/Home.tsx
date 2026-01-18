import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Education } from "../components/sections/Education";
import { Experience } from "../components/sections/Experience";
// import { Projects } from "../components/sections/Projects";
import { About } from "../components/sections/About";
import { HeroHighlight } from "../components/ui/hero-highlight";

export function Home() {
  return (
    <HeroHighlight className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-16 sm:pt-20">
        <Hero />
        <About />
        <Education />
        <Experience />
        {/* <Projects /> */}
      </main>
      <Footer />
    </HeroHighlight>
  );
}
