import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

class Page10 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="style_back">
          <Title title="JSX" />
          <Footer back="/Page9" go="./Page11" />
        </div>
      </div>
    );
  }
}

export default Page10;
