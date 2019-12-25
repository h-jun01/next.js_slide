import React from "react";

class Title extends React.Component {
  h1 = {
    fontSize: "70pt",
    paddingTop: "34vh",
    textAlign: "center",
    color: "#fff",
    letterSpacing: "0.15em"
  };

  render() {
    return (
      <div>
        <h1 style={this.h1}>{this.props.title}</h1>
      </div>
    );
  }
}

export default Title;
