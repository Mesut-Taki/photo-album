import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";

import Body from "./components/body/Body";
import Slider from "./components/body/Slider";

const App = () => {
  return (
    <div>
      <Header />

      <Body />
      {/* <Slider /> */}

      <Footer />
    </div>
  );
};

export default App;
