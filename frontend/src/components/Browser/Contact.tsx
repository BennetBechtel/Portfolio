// Contact.tsx
export default function () {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-mocha-lavender">Contact</h2>
      <div className="space-y-3 text-mocha-text">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-mocha-mauve">Email:</h3>
          <a
            href="mailto:bennet.bechtel007@gmail.com"
            className="font-semibold transition-opacity hover:opacity-80"
          >
            bennet.bechtel007@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-mocha-mauve">GitHub:</h3>
          <a
            href="https://github.com/BennetBechtel"
            className="font-semibold transition-opacity hover:opacity-80"
          >
            BennetBechtel
          </a>
        </div>
      </div>
    </section>
  );
}
