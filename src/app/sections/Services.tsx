// components/Services.tsx
import {
  PiStrategyBold,
  PiPencilLineBold,
  PiPaintBrushBold,
} from "react-icons/pi";

export default function Services() {
  return (
    <section id="services" className="w-full py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What I Offer
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          I help brands grow with intentional, creative strategies tailored to
          connect with real people not just algorithms.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Strategy */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <PiStrategyBold className="text-3xl text-[#000] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Social Media Strategy
            </h3>
            <p className="text-gray-600 text-sm">
              Data-backed strategies that align with your goals, voice, and
              audience built for growth and engagement.
            </p>
          </div>

          {/* Content Creation */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <PiPencilLineBold className="text-3xl text-[#000] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Content Creation
            </h3>
            <p className="text-gray-600 text-sm">
              Copywriting, design, and short-form video that feels human,
              on-brand, and scroll-worthy.
            </p>
          </div>

          {/* Visual Design with Canva */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <PiPaintBrushBold className="text-3xl text-[#000] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Visual Design (Canva)
            </h3>
            <p className="text-gray-600 text-sm">
              Clean, consistent designs for posts, stories, and reels made in
              Canva for speed and impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
