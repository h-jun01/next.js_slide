import React from "react";
import Link from "next/link";
import Topic from "../components/Link";
import Subject from "../components/Subject";
import Footer from "../components/Footer";
import Header from "../components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="backimg">
          <div className="transparent">
            <div className="wrap">
              <Subject subject="#目次" />
              <div className="char">
                <Topic root="./Page2" topic="1.React" />
                <Topic root="./Page6" topic="2.Hello World" />
                <Topic root="./Page10" topic="3.JSX" />
                <Topic root="./Page15" topic="4.component" />
                <Topic root="./Page17" topic="5.props" />
                <Topic root="./Page20" topic="6.state" />
                <Topic root="./Page24" topic="7.合わせて覚えたいもの" />
              </div>
            </div>
          </div>
          <Footer go="./Page2" />
        </div>
      </div>
    );
  }
}

export default App;
