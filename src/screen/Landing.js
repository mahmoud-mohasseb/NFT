import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Recomandation from "../components/Recomandation";
import Slider from "../components/Slider";

function Landing() {
  return (
    <>
      <Header />
      <Banner />
      <Slider />
      <Products />
      <Recomandation />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Landing;
