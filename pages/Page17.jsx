import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

class Page17 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="style_back">
          <Title title="props" />
          <Footer back="/Page16" go="./Page18" />
        </div>
      </div>
    );
  }
}

export default Page17;
