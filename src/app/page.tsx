import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Tools from "./sections/Tools";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Tools />
      {/* Add other sections as needed */}
    </div>
  );
}
