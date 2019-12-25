import React from "react";

class Subject extends React.Component {
  h2 = {
    fontSize: "30pt",
    color: "#42AAC7"
  };

  render() {
    return (
      <div>
        <h1 style={this.h2}>{this.props.subject}</h1>
      </div>
    );
  }
}

export default Subject;
