import BestSeller from "./components/BestSeller";
import Collections from "./components/Collections";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SubscribeSection from "./components/SubscribeSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <BestSeller />
      <Features />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default App;
