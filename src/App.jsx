import "./App.css";
import FaqSection from "./Components/FaqSection";
import FeaturesSection from "./Components/FeaturesSection";
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
    </>
  );
}

export default App;
