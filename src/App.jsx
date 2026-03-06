import { Route, Routes } from "react-router-dom";
import BestSeller from "./components/BestSeller";
import Collections from "./components/Collections";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SubscribeSection from "./components/SubscribeSection";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Collections />
              <BestSeller />
              <SubscribeSection />
              <Features />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
