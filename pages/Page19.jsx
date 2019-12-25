import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page18 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#サンプル" />
              <div className="char">
                <p>AppComponentがImageComponentへ値を渡して表示している</p>
              </div>
              <div>
                <img src="/img11.png" alt="component" height="400" />
                <img
                  src="/img12.png"
                  alt="ブラウザ"
                  style={{ marginLeft: "10px", marginTop: "50px" }}
                  height="400"
                />
              </div>
            </div>
          </div>
          <Footer back="./Page18" go="./Page20" />
        </div>
      </div>
    );
  }
}

export default Page18;
