import "./App.css";
import CTASection from "./Components/CTASection";
import FaqSection from "./Components/FaqSection";
import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SteapsSection from "./Components/SteapsSection";
import WhyChooseSection from "./Components/WhyChooseSection";



function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <WhyChooseSection></WhyChooseSection>
      <SteapsSection></SteapsSection>
      <FaqSection></FaqSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </>
  );
}

export default App;
