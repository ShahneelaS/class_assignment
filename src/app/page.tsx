import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import CoursesSection from "./components/CoursesSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <Footer />
    </div>
  );
}