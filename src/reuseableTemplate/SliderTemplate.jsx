import React from "react";

export default function SliderTemplate({
  heading = "Stay motivated and reach your goals",
  paragraph = "Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.",
  videoUrl = "https://speak-web.b-cdn.net/61a88c135006e8345b005efd%2F684f160ec92027ed2eb5253d_Card_motiv-transcode.mp4",
}) {
  return (
    <section className="w-full bg-[#FAFAFA] flex justify-center mt-5">
      {/* Side padding responsive */}
      <div className="w-full pl-[30px] pr-[30px] lg:pl-[200px] lg:pr-[200px]">
        {/* Main Card */}
        <div className="relative mx-auto w-full max-w-[1510px] h-[640px] rounded-[36px] shadow-xl bg-white overflow-hidden flex">
          
          {/* Content Grid */}
          <div className="m-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 px-8 md:px-12 lg:px-16">
            
            {/* LEFT — Text */}
            <div className="flex flex-col justify-between">
              <div>
                <h2
                  className="font-heading text-center lg:text-left font-normal sm:font-medium
                             text-[24px] leading-[26px] md:text-[37px] md:leading-[48px]
                             lg:text-[40px] lg:leading-[44px]
                             text-[var(--color-heading)]"
                >
                  {heading}
                </h2>
              </div>

              <p
                className="font-paragraph text-center lg:text-left mt-5 font-semibold
                           text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px]
                           text-[var(--color-paragraph)] max-w-[620px]"
              >
                {paragraph}
              </p>
            </div>

            {/* RIGHT — Video Card */}
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-[686/680] rounded-[26px] md:rounded-[32px] lg:rounded-[26px] bg-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
