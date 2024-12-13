// Browser.tsx
import Header from "../components/Browser/Header";
import Skills from "../components/Browser/Skills";
import Projects from "../components/Browser/Projects";
import Contact from "../components/Browser/Contact";

export default function () {
  return (
    <div className="min-h-screen bg-mocha-crust pb-3 pt-12">
      <div className="mx-auto max-w-4xl space-y-12 p-8">
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
