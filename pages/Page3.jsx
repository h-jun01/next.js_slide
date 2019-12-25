import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page3 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#Reactとは" />
              <div className="char">
                <p>Facebook製のオープンソース</p>
                <p>Angular, Vue.js とよく比較される</p>
                <p>JavaScriptで UIを作る為のライブラリ</p>
                <p>
                  JavaScriptは ES6の文法である importやclass
                  アロー関数を取り入れている
                </p>
                <p>
                  JavaScriptの 中に直接HTML/XMLを記述する JSXという技術を利用
                </p>
              </div>
              <div className="emphasis">
                <p>- Componentを作るだけ</p>
                <p>- データの流れが単一方向</p>
                <p>- 仮想DOMで処理を行う</p>
              </div>
            </div>
          </div>
          <Footer back="./Page2" go="./Page4" />
        </div>
      </div>
    );
  }
}

export default Page3;
