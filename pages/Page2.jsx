import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

class Page2 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="style_back">
          <Title title="React" />
          <Footer back="/" go="./Page3" />
        </div>
      </div>
    );
  }
}

export default Page2;
