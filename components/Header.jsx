import React from "react";
import Head from "next/head";
import Style from "../style/style";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>React超入門</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0,width=divice-width"
          />
        </Head>
        {Style}
      </div>
    );
  }
}

export default Header;
