"use strict";

class ReactIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      productName: null,
      productDescription: null,
      productPrice: null,
    };
  }

  initializeState = () => {
    this.setState({
      initialized: true,
      productName: "Rice Krispies",
      productDescription: "a cereal made of popped rice",
      productPrice: "$3.00"
    });
    return this.state;
  };

  render() {
    console.log(this.state);
    const { initialized } = this.state;
    const { productName }  = this.state;
    const { productDescription } = this.state;
    const { productPrice } = this.state;

    const stringToReturn = `The product name is ${productName}, product description is ${productDescription}, and product price is ${productPrice}.`;

    if (this.state.initialized) {
      return stringToReturn;
    }

    return React.createElement(
      "button",
      { id: "initial-button", onClick: () => this.initializeState() },
      "Click here to initialize your state"
    );
  }
}

ReactDOM.render(
  React.createElement(ReactIntro),
  document.getElementById("jsx-container")
);

if (typeof module !== "undefined") {
  module.exports = { initializeState };
}
