import React from "react";

export class PresentationalHome extends React.Component {
  constructor(props) {
    super(props);
    this.props.getProducts();
  }

  render() {
    return <div>Home work!</div>;
  }
}
