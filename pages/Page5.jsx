import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page5 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#他との違い" />
              <p className="vue">Vue</p>
              <div className="description">
                <p>- 学習コストが低い</p>
                <p>- シンプルで自由度が高い</p>
                <p>- Laravelと相性が良い</p>
              </div>
              <p className="angular">Angular</p>
              <div className="description">
                <p>- TypeScript</p>
                <p>- フルスタック</p>
                <p>- ライブラリは追加しなくても基本備わっている</p>
              </div>
            </div>
          </div>
          <Footer back="./Page4" go="./Page6" />
        </div>
      </div>
    );
  }
}

export default Page5;
