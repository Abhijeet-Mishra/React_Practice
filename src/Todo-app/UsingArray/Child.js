import React, { Component } from "react";

export class Child extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.elementsval}
          <button className="btn-danger" onClick={this.props.deleteList}>
            x
          </button>
        </li>
      </div>
    );
  }
}

export default Child;
