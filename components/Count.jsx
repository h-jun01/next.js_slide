import React from "react";

class Count extends React.Component {
  wrap = {
    textAlign: "center",
    marginLeft: "5vw",
    marginTop: "10vh"
  };
  h1 = {
    fontSize: "30pt",
    marginBottom: "2vh"
  };
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div style={this.wrap}>
        <h1 style={this.h1}>{this.state.count}</h1>
        <button onClick={this.handleClick}> + </button>
      </div>
    );
  }
}

export default Count;
