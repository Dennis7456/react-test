import React, { Component } from "react";

class Counter extends Component {
    state = {
        count:0
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render(){
        return(
            <div className="Counter">
                <button className="counter-button" onClick={this.increment}>Clicked: {this.state.count}</button>
            </div>
        )
    }
}

export default Counter;