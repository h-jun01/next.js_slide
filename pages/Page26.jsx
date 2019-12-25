import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page26 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#TypeScript" />
              <div className="char">
                <p>
                  マイクロソフトが作った言語
                  <br />
                  JavaScriptに対して<span>静的型付け</span>ができる
                </p>
                <p>TypeScript -> JavaScriptにコンパイルが必要</p>
                <p>ReactNativeも TypeScriptに対応したりと最近人気</p>
                <p>Angularの標準対応でもある</p>
              </div>
            </div>
          </div>
          <Footer back="./Page25" go="./Page27" />
        </div>
      </div>
    );
  }
}

export default Page26;
