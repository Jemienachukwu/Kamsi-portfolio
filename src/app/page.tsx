import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Tools from "./sections/Tools";
import Testimonials from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Tools />
      <Testimonials />
      <Contact />
      <Footer />
      {/* Add other sections as needed */}
    </div>
  );
}
