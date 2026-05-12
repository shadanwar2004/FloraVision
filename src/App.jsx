import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import TrendingSection from "./sections/TrendingSection";
import TopSellingSection from "./sections/TopSellingSection";
import ReviewSection from "./sections/ReviewSection";
import OxygenSection from "./sections/OxygenSection";

import Footer from "./components/Footer";

function App() {

  return (

    <main className="bg-[#02120B] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <TrendingSection />

      <TopSellingSection />

      <ReviewSection />

      <OxygenSection />

      <Footer />

    </main>
  )
}

export default App;