import "../App.css";
import Banner from "../components/Banner";
import CostAndStats from "../components/Cost&Stats";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Resources from "../components/Resources";
import Review from "../components/Reviews";

function App() {
  return (
    <>
      <Hero
        heading="The Easiest Place To Hire Local Movers"
        para="Radical pricing transparency. Fast and easy booking. Massive time
        savings. Guaranteed service."
      />
      <Review />
      <Banner />
      {/* <Banner2 /> */}
      <Resources />
      <CostAndStats />
      <Hero
        heading="Book Local Movers Today."
        para="If you don't have the time or the muscle, let our professionals handle your move."
      />
      <Footer />
    </>
  );
}

export default App;
