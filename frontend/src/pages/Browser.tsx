// Browser.tsx
import About from "../components/Browser/About";
import Skills from "../components/Browser/Skills";
import Projects from "../components/Browser/Projects";
import Contact from "../components/Browser/Contact";

interface BrowserProps {
  setPage: Function;
}

export default function ({ setPage }: BrowserProps) {
  return (
    <div className="min-h-dvh bg-mocha-crust pb-3 pt-12">
      <div className="mx-auto max-w-4xl space-y-12 p-8">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div
        onClick={() => setPage("Console")}
        className="mb-5 cursor-pointer text-center text-lg font-semibold text-mocha-pink"
      >
        Switch to Console View
      </div>
    </div>
  );
}
