import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page11 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#JSXとは" />
              <div className="char">
                <p>Reactで使われている構文</p>
                <p>これもFacebook製</p>
                <p>JavaScriptの構文中に XHL風のものをそのまま書ける</p>
              </div>
              <div className="color_char">
                <p>HTMLと似ているので</p>
                <p>慣れたらデザイナーでも分かりやすい！</p>
              </div>
            </div>
          </div>
          <Footer back="./Page10" go="./Page12" />
        </div>
      </div>
    );
  }
}

export default Page11;
