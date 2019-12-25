import React from "react";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Page18 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#propsとは" />
              <div className="char">
                <p>component 生成時に親から渡されるオブジェクト</p>
                <p>
                  component が画面から排除されるまで<span>不変</span>の値
                </p>
                <p>
                  <span>Immutable</span> であり外部とのインターフェースの役割
                </p>
                <p>
                  propsは <span>「props名=値」</span>
                  という形で componentを呼び出す箇所で渡す
                </p>
                <p>
                  <span>親componentから子componentへ値を渡す</span>
                </p>
                <p>- &lt;子component text="Hello"&gt;</p>
                <p>
                  <span>子componentで値を受け取って表示</span>
                </p>
                <p>- &lt;div&gt; &#123;this.props.text&#125; &lt;/div&gt;</p>
              </div>
            </div>
          </div>
          <Footer back="./Page17" go="./Page19" />
        </div>
      </div>
    );
  }
}

export default Page18;
