// components/Tools.tsx
import { FaPinterest, FaEnvelope, FaTrello, FaSlack } from "react-icons/fa";
import { SiGoogleanalytics, SiCanva, SiNotion } from "react-icons/si";
import capcut from "../../../public/capcut-svgrepo-com.svg";
import Image from "next/image";

const tools = [
  {
    name: "Canva",
    icon: <SiCanva className="text-3xl mb-2" />,
  },
  {
    name: "CapCut",
    icon: (
      <Image
        src={capcut}
        alt="capcut"
        width={40}
        height={40}
        className="mb-2"
      />
    ),
  },
  {
    name: "Pinterest",
    icon: <FaPinterest className="text-3xl mb-2" />,
  },
  {
    name: "Notion",
    icon: <SiNotion className="text-3xl mb-2" />,
  },
  {
    name: "Gmail",
    icon: <FaEnvelope className="text-3xl mb-2" />,
  },
  {
    name: "Google Analytics",
    icon: <SiGoogleanalytics className="text-3xl mb-2" />,
  },
  {
    name: "Trello",
    icon: <FaTrello className="text-3xl mb-2" />,
  },
  {
    name: "Slack",
    icon: <FaSlack className="text-3xl mb-2" />,
  },
];
export default function Tools() {
  return (
    <section className="w-full py-20 px-6 md:px-20">
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
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center text-center"
            >
              {tool.icon}
              <span className="text-sm text-gray-700">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
