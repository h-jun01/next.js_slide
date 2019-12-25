import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

class Page27 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="style_back">
          <Title title="おわり！😊" />
          <Footer back="/Page26" />
        </div>
      </div>
    );
  }
}

export default Page27;
