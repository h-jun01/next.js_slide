import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page16 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#componentとは" />
              <div className="char">
                <p>再利用可能なパーツ</p>
                <p>自分で自分の状態を管理する</p>
                <p>
                  基本的にcomponentを組み合わせてアプリケーションを作っていく
                </p>
                <p>同じcomponentでも受け取る値によって表示が変わる</p>
              </div>
              <div className="color_char">
                <p>JSX等を使って記述する</p>
              </div>
            </div>
          </div>
          <Footer back="./Page15" go="./Page17" />
        </div>
      </div>
    );
  }
}

export default Page16;
