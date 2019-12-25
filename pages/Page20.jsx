import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

class Page20 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="style_back">
          <Title title="state" />
          <Footer back="/Page19" go="./Page21" />
        </div>
      </div>
    );
  }
}

export default Page20;
