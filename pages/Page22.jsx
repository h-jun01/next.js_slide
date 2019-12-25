import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page22 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#stateの表示" />
              <div className="char">
                <p>
                  定義したstateは <span>this.state</span>で取得することができる
                </p>
                <p>
                  <span>stateのcountを表示</span>
                </p>
                <p>
                  - &lt;div&gt; &#123; this.state.プロパティ名 &#125;
                  &lt;/div&gt;
                </p>
              </div>
              <div className="sample">
                <img src="/img13.png" alt="app.js" />
                <img
                  src="/img14.png"
                  alt="ブラウザ"
                  style={{ marginLeft: "50px" }}
                />
              </div>
            </div>
          </div>
          <Footer back="./Page21" go="./Page23" />
        </div>
      </div>
    );
  }
}

export default Page22;
