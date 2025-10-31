import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SliderTemplate from "../reuseableTemplate/SliderTemplate";

export default function MotivationSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const slides = [
    {
      heading: "Stay motivated and reach your goals",
      paragraph:
        "Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.",
      videoUrl:
        "https://speak-web.b-cdn.net/61a88c135006e8345b005efd%2F684f160ec92027ed2eb5253d_Card_motiv-transcode.mp4",
    },
    {
      heading: "Talk about anything, anytime, anywhere",
      paragraph:
        "Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche.",
      videoUrl:
        "https://speak-web.b-cdn.net/61a88c135006e8345b005efd/65820a653b087bcc26b94dfc_5_Card_ENG-transcode.mp4",
    },
    {
      heading: "Build a relationship with your tutor",
      paragraph:
        "Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level.",
      videoUrl:
        "https://speak-web.b-cdn.net/61a88c135006e8345b005efd%2F684f152d745501284eb2d631_Card_tutor-transcode.mp4",
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-[#FAFAFA]">
      {/* 🧭 total scroll = (slides.length - 1) * 100vh */}
      <div style={{ height: `${(slides.length - 1) * 100}vh` }}>
        {/* sticky viewport */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {slides.map((slide, i) => {
            // slide timing
            const start = i / (slides.length - 1);
            const end = (i + 1) / (slides.length - 1);

            // vertical motion
            const y = useTransform(scrollYProgress, [start, end], ["0%", "-100%"]);

            // opacity: fade out near the end of its segment
            const opacity = useTransform(
              scrollYProgress,
              [start, end - 0.15, end],
              [1, 1, 0]
            );

            return (
              <motion.div
                key={i}
                style={{
                  y,
                  opacity,
                  zIndex: slides.length - i,
                  position: "absolute",
                }}
                className="inset-0 flex items-center justify-center will-change-transform"
              >
                <SliderTemplate
                  heading={slide.heading}
                  paragraph={slide.paragraph}
                  videoUrl={slide.videoUrl}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
