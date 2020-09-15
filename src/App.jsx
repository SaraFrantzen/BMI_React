import React, { Component } from "react";
import Form from "./components/Form";
import "./App.css";
import { calculateBmi } from "./helpers/bmiHelper";
import Message from "./components/Message";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    method: 'metric'
  };

  onChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = (e) => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height,
      this.state.method
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  onMethodSelect = (e) => {
    this.setState({ method: e.target.value })
  }
  
  render() {
    return (
      <div>
        <Form
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          onMethodSelect={this.onMethodSelect}
        />

        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    );
  }
}

export default App;
