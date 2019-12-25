import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page12 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#JSXの注意点" />
              <div className="char">
                <p>JSXはほとんどHTMLと似ているが いくつか違いがある</p>
                <p>
                  左の図のように&ensp;<span>return内に複数の要素</span>
                  &ensp;があるとエラー
                </p>
                <p>
                  複数の要素がある場合は 右の図のように&lt;div&gt;タグ等で囲んで
                  <span>1つの要素にまとめる</span>
                </p>
              </div>
              <div className="sample">
                <img src="/img3.png" alt="ダメな例" />
                <img
                  src="/img4.png"
                  alt="オッケーな例"
                  style={{ marginLeft: "50px" }}
                />
              </div>
            </div>
          </div>
          <Footer back="./Page11" go="./Page13" />
        </div>
      </div>
    );
  }
}

export default Page12;
