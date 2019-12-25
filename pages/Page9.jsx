import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page9 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#Hello World" />
              <div className="char">
                <p>
                  ファイルをエディタで開いて<span>src/App.js</span>を書き換える
                </p>
                <p>
                  <span>renderメソッドのreturn内</span>に &lt;h1&gt;Hello
                  World&lt;/h1&gt;と記述すると
                </p>
                <p>ブラウザに Hello World と表示される</p>
              </div>
              <div className="sample">
                <img src="/img6.png" alt="app.js" />
                <img
                  src="/img7.png"
                  alt="ブラウザ"
                  style={{ marginLeft: "50px" }}
                />
              </div>
            </div>
            <Footer back="./Page8" go="./Page10" />
          </div>
        </div>
      </div>
    );
  }
}

export default Page9;
