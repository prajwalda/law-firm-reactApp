import React from "react";
import HomePage from "./Component/HomePage/HomePage";
import Attorney from "./Component/Attorney/Attorney";
import Practise from "./Component/Practise/Practise";
import { About } from "./Component/About/About";
import Team from "./Component/Team/Team";
import Faq from "./Component/Faq/Faq";
import Newsletter from "./Component/Newsletter/Newsletter"
import Footer from "./Component/Footer/Footer"

const App = () => {
  return (
    <div className="container">
      <HomePage />
      <Attorney />
      <Practise />
      <About />
      <Team />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
