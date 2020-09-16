import React, { Component } from "react";
import BmiForm from "./components/BmiForm";
import { calculateBmi } from "./helpers/bmiHelper";
import Message from "./components/Message";
import { Image, Grid, Container } from "semantic-ui-react";
import HeaderInverted from "./Header";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    method: "metric",
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
    this.setState({ method: e.target.value });
  };

  render() {
    return (
      <>
        <HeaderInverted />
<Container>
        <Grid >
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src="./img/bmi.png" padded></Image>
            </Grid.Column>
            <Grid.Column width={10}>
              <h1>What is BMI?</h1>
            <p>
                Body mass index (BMI) is a value derived from the mass (weight)
                and height of a person. The BMI is defined as the body mass
                divided by the square of the body height, and is universally
                expressed in units of kg/m2, resulting from mass in kilograms
                and height in metres. 
                <br></br>The BMI is a convenient rule of thumb used
                to broadly categorize a person as underweight, normal weight,
                overweight, or obese based on tissue mass (muscle, fat, and
                bone) and height.<br></br> <br></br>Commonly accepted BMI ranges are underweight
                (under 18.5 kg/m2), normal weight (18.5 to 25), overweight (25
                to 30), and obese (over 30).</p>
             <a href="https://en.wikipedia.org/wiki/Body_mass_index" id="wiki" target="_blank" rel="noopener noreferrer"> Source: Wikipedia</a>  
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={10} position="center">
              <h1>Calculate Your BMI</h1>
              <BmiForm
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
            </Grid.Column>
            <Grid.Column width={5}>
              <Image src="./img/bmi.jpg"></Image>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
      </>
    );
  }
}
export default App;
