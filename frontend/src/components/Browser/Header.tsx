// Header.tsx
import { MapPin, GithubIcon, Mail } from "lucide-react";

export default function () {
  return (
    <header className="mb-16 text-center">
      <h1 className="mb-2 text-5xl font-bold text-mocha-lavender">Bennet Bechtel</h1>
      <h2 className="mb-1 text-xl text-mocha-mauve">Full Stack Javascript Developer</h2>
      <h3 className="mb-6 flex items-center justify-center gap-1 text-mocha-text">
        <MapPin size={14} /> Kiel, Germany
      </h3>
      <div className="mb-8 flex justify-center gap-6">
        <a
          href="https://github.com/BennetBechtel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mocha-text transition-opacity hover:opacity-80"
        >
          <GithubIcon size={28} />
        </a>
        <a
          href="mailto:bennet.bechtel007@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mocha-text transition-opacity hover:opacity-80"
        >
          <Mail size={28} />
        </a>
      </div>
      <div className="mx-auto max-w-2xl">
        <p className="text-lg text-mocha-text">
          Full-stack developer focused on building real-world solutions that matter. I specialize in
          creating web applications that combine robust backend architecture with polished,
          functional frontend interfaces.
        </p>
      </div>
    </header>
  );
}
