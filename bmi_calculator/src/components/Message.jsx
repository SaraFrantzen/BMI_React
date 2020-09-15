import React from "react";

const Message = (props) => {
  return (
    <p id="bmi-message">
      You'r BMI value is: {props.bmiValue}, youre {props.bmiMessage} 
    </p>
  );
};

export default Message;
