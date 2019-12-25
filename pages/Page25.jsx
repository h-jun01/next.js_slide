import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page25 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#Redux" />
              <div className="char">
                <p>
                  Reactが扱うstateを
                  <br />
                  <span>一元管理</span>する為のフレームワーク
                </p>
                <p>
                  アプリが大きくなって
                  <br />
                  component 同士が依存し合うようになると
                  <br />
                  stateを管理するのは大変になる
                </p>
                <p>
                  Reduxを使うことでReactのcomponentでは
                  <br />
                  <span>stateを管理せず</span>に<span>propsだけを使う</span>
                  ようにできる
                </p>
              </div>
            </div>
          </div>
          <Footer back="./Page24" go="./Page26" />
        </div>
      </div>
    );
  }
}

export default Page25;
