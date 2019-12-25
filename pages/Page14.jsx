import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page14 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#JSXにJSを埋め込む" />
              <div className="char">
                <p>returnの中でも JSXにJavaScriptを埋め込むことができる</p>
                <p>
                  JSXにJavaScriptを埋め込むには JavaScriptの部分を
                  <span>中括弧&#123;&#125;</span>で囲む
                </p>
                <p>
                  タグの属性の値も 同様に<span>中括弧&#123;&#125;</span>
                  を使ってJavaScriptを記述することができる
                </p>
              </div>
              <div className="sample">
                <img src="/img9.png" alt="JSXとJSの範囲" />
                <img
                  src="/img10.png"
                  alt="ブラウザ"
                  style={{ marginLeft: "50px" }}
                />
              </div>
            </div>
          </div>
          <Footer back="./Page13" go="./Page15" />
        </div>
      </div>
    );
  }
}

export default Page14;
