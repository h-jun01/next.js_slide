import React from "react";
import Link from "next/link";

class Topic extends React.Component {
  a = {
    display: "block",
    fontSize: "15pt",
    marginTop: "20px",
    letterSpacing: "0.2em"
  };
  render() {
    return (
      <Link href={this.props.root}>
        <a style={this.a}>{this.props.topic}</a>
      </Link>
    );
  }
}

export default Topic;
