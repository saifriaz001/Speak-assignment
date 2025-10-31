import React from "react";

export default function Hero() {
  return (
    <section className="relative h-full w-full bg-white">
      <div className="mx-auto max-w-hero px-6 md:px-8 h-full flex flex-col items-center justify-center text-center">
        <h1
          className="
            font-display text-4xl sm:text-5xl md:text-6xl xl:text-[72px]
            leading-[1.1] md:leading-[1.08] xl:leading-[1.06]
            tracking-tightish text-ink-900
          "
          style={{ wordSpacing: "0.02em" }}
        >
          <span className="block font-heading">Introducing Speak</span>
          <span className="block font-heading">Tutor. The world’s</span>
          <span className="block font-heading">best language</span>
          <span className="block font-heading">teacher.</span>
        </h1>

        {/* Subcopy */}
        <p
          className="
            mt-6 md:mt-7 max-w-[46rem] text-base sm:text-lg md:text-xl
            leading-relaxed text-ink-600 font-paragraph
          "
        >
          Speak Tutor is your very own language tutor, dedicated to helping you improve
          24/7. It may surprise you with all of its unique abilities.
        </p>
      </div>

      {/* Soft bottom fade like in your screenshot */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 bottom-0 h-28
          bg-gradient-to-b from-transparent to-black/5
        "
      />
    </section>
  );
}
