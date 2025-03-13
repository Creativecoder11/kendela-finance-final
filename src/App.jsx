import "./App.css";
import CTASection from "./Components/CTASection";
import FaqSection from "./Components/FaqSection";
import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SteapsSection from "./Components/SteapsSection";
import WhyChooseSection from "./Components/WhyChooseSection";
import { PopupProvider } from "./Hook/PopupContext";
import WaitlistPopup from "./Hook/WaitlistPopup";



function App() {
  return (
    <>
    <PopupProvider>
      <Navbar></Navbar>
      <WaitlistPopup></WaitlistPopup>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <WhyChooseSection></WhyChooseSection>
      <SteapsSection></SteapsSection>
      <FaqSection></FaqSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </PopupProvider>
    </>
  );
}

export default App;
