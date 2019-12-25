import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

class Page15 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="style_back">
          <Title title="component" />
          <Footer back="/Page14" go="./Page16" />
        </div>
      </div>
    );
  }
}

export default Page15;
