import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Count from "../components/Count";

class Page23 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#stateの値の変更" />
              <div className="char">
                <p>
                  <span>stateの値を変更</span>
                </p>
                <p>- this.setState(&#123; プロパティ名: 値 &#125;)</p>
              </div>
              <div className="sample">
                <img src="/img15.png" alt="app.js" />
                <Count />
              </div>
            </div>
          </div>
          <Footer back="./Page22" go="./Page24" />
        </div>
      </div>
    );
  }
}

export default Page23;
