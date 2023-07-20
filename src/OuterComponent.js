import "./App.css";

import { Component } from "react";
import InnerComponent from "./InnerComponent";

export default class OuterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingarray: [6, 7, 8, 9, 10, " ", " ", 1, 2, 3, 4, 5],
      rating: 0,
    };
  }
  render() {
    return (
      <div>
        <div className="outerCircle">
          <ul>
            {this.state.ratingarray.map((data, index) => (
              <li key={index}>
                <div
                  className="text"
                  onClick={(e) => {
                    this.handleClick(e, data);
                  }}
                >
                  {data}
                </div>
              </li>
            ))}
            <InnerComponent InnerText={this.state.rating} />
          </ul>
        </div>
        <div className="Extremlytext">
          <p className={this.state.rating < 7 ? "unlikecolor" : "unlike"}>
            Extremly Unlikely
          </p>
          <p className={this.state.rating > 6 ? "likecolor" : "unlike"}>
            Extremly Likely
          </p>
        </div>
      </div>
    );
  }

  handleClick(e, ratingvalue) {
    console.log(ratingvalue);
    this.setState({ rating: ratingvalue });
  }
}
