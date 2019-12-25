import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page8 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#環境構築" />
              <div className="char">
                <p>この画面が出てくればOK！</p>
                <p>
                  <img
                    src="/img5.png"
                    alt="hello world"
                    width="600"
                    style={{ paddingTop: "20px" }}
                  />
                </p>
              </div>
            </div>
            <Footer back="./Page7" go="./Page9" />
          </div>
        </div>
      </div>
    );
  }
}

export default Page8;
