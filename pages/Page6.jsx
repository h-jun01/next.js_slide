import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

class Page6 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="style_back">
          <Title title="Hello World" />
          <Footer back="/Page5" go="./Page7" />
        </div>
      </div>
    );
  }
}

export default Page6;
