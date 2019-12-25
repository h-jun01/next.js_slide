import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page13 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#JSXとJSの範囲" />
              <div className="char">
                <p>JSXとJS ( JavaScript ) の記述部分は分かれている</p>
                <p>
                  - renderメソッドの <span>return内</span>のみ<span>JSX</span>
                  で記述する必要がある
                </p>
                <p>
                  - renderメソッドの <span>returnの外</span>
                  にはJavaScriptを記述できる
                </p>
              </div>
              <div className="sample">
                <img src="/img8.png" alt="JSXとJSの範囲" />
              </div>
            </div>
          </div>
          <Footer back="./Page12" go="./Page14" />
        </div>
      </div>
    );
  }
}

export default Page13;
