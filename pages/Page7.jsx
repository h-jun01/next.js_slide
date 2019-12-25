import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page7 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#環境構築" />
              <div className="char">
                <p>① Node.jsをインストール</p>
                <div class="hello">
                  <p>
                    <a href="https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09">
                      - MacにNode.jsをインストール
                    </a>
                  </p>
                  <p>
                    <a href="https://qiita.com/Masayuki-M/items/840a997a824e18f576d8">
                      - windows10にNode.jsをインストールする
                    </a>
                  </p>
                </div>
                <p style={{ paddingTop: "40px" }}>
                  ② Create React Appという雛形を使う
                </p>
                <div className="hello">
                  <p>- npx create-react-app プロジェクト名</p>
                  <p>- cd プロジェクト名</p>
                  <p>- npm start</p>
                </div>
                <p style={{ paddingTop: "40px" }}>③ localhost:3000にアクセス</p>
              </div>
            </div>
          </div>
          <Footer back="./Page6" go="./Page8" />
        </div>
      </div>
    );
  }
}

export default Page7;
