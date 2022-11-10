import React, { Component } from "react";
import Counter1 from "./counter";

class Counters extends Component {
  render() {

    const {onReset,onIncrement,onDecrement,counters,onDelete} = this.props

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          /*   <Counter1
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            selected={true}
            id={counter.id}
          /> */

          <Counter1
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
