import React from "react";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-white py-20 px-6 flex flex-col items-center justify-center text-center">
      
      {/* Avatar + Name */}
      <div className="flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-full px-5 py-2 mb-8">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Jessica Park"
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover"
        />
        <span className="font-paragraph text-[14px] sm:text-[16px] md:text-[17px] text-[#12205A] font-medium">
          Jessica Park
        </span>
      </div>

      {/* Quote */}
      <blockquote
        className="
          max-w-[1100px] 
          font-heading text-[#12205A]
          text-[20px] sm:text-[24px] md:text-[40px] lg:text-[52px]
          leading-[1.4] sm:leading-[1.3] md:leading-[1.25] lg:leading-[1.2]
          font-normal
          px-2 sm:px-4 md:px-6
        "
      >
        “The first time I used Speak Tutor, I couldn’t believe it wasn’t a real
        person. It feels like it understands my motivations at a deep level and
        every lesson is made just for me.”
      </blockquote>
    </section>
  );
}
