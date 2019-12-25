import React from "react";
import Link from "next/link";
import footer_style from "../style/footer_style";

class Footer extends React.Component {
  render() {
    return (
      <div>
        {footer_style}
        <div className="footer">
          <Link href={this.props.back}>
            <div className="arrow_left"></div>
          </Link>
          <Link href="/">
            <p className="contents">目次へ</p>
          </Link>
          <Link href={this.props.go}>
            <div className="arrow_right"></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
