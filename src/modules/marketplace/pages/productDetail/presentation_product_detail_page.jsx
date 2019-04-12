import React, { Component } from "react";

export class PresentationalProductDetail extends Component {
  constructor(props) {
    super(props);

    this.props.getProduct(props.match.params.id);
  }

  render() {
    return <div>Product work</div>;
  }
}
