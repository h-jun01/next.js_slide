import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

class Page24 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="style_back">
          <Title title="合わせて覚えたいもの" />
          <Footer back="/Page23" go="./Page25" />
        </div>
      </div>
    );
  }
}

export default Page24;
