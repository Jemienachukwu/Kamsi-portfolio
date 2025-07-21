// components/Tools.tsx
import { FaPinterest, FaEnvelope, FaTrello, FaSlack } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

export default function Tools() {
  return (
    <section className="w-full  py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Tools I Work With
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          I rely on a mix of creative, analytical, and collaborative tools to
          keep everything running smoothly.
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {/* Canva */}
          {/* <div className="flex flex-col items-center text-center">
            <FaCanva className="text-3xl text-[#00C4CC] mb-2" />
            <span className="text-sm text-gray-700">Canva</span>
          </div> */}

          {/* CapCut */}
          {/* <div className="flex flex-col items-center text-center">
            <SiCapcut className="text-3xl text-black mb-2" />
            <span className="text-sm text-gray-700">CapCut</span>
          </div> */}

          {/* Pinterest */}
          <div className="flex flex-col items-center text-center">
            <FaPinterest className="text-3xl  mb-2" />
            <span className="text-sm text-gray-700">Pinterest</span>
          </div>

          {/* Gmail */}
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-3xl  mb-2" />
            <span className="text-sm text-gray-700">Gmail</span>
          </div>

          {/* Google Analytics */}
          <div className="flex flex-col items-center text-center">
            <SiGoogleanalytics className="text-3xl  mb-2" />
            <span className="text-sm text-gray-700">Google Analytics</span>
          </div>

          {/* Trello */}
          <div className="flex flex-col items-center text-center">
            <FaTrello className="text-3xl mb-2" />
            <span className="text-sm text-gray-700">Trello</span>
          </div>

          {/* Slack */}
          <div className="flex flex-col items-center text-center">
            <FaSlack className="text-3xl  mb-2" />
            <span className="text-sm text-gray-700">Slack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
