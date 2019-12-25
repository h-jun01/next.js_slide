import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page21 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#stateとは" />
              <div className="char">
                <p>
                  <span>動的</span>に値を変化させられるオブジェクト
                </p>
                <p>component内で所持</p>
                <p>
                  <span>constructor</span>の中で オブジェクトとして定義する
                </p>
                <p>ここで定義したオブジェクトがstateの初期値になる</p>
                <p>
                  <span>stateの初期化（constructor内）</span>
                </p>
                <p>- this.state = &#123; プロパティ名: 値 &#125;</p>
              </div>
            </div>
          </div>
          <Footer back="./Page20" go="./Page22" />
        </div>
      </div>
    );
  }
}

export default Page21;
