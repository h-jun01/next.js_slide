import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page4 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#利用している企業" />
              <img
                src="/img2.png"
                alt="利用している企業"
                width="600"
                className="company"
              />
            </div>
            <Footer back="./Page3" go="./Page5" />
          </div>
        </div>
      </div>
    );
  }
}

export default Page4;
