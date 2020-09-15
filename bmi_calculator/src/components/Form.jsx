import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmitHandler}>

      <label for="system">Choose your System</label>
      <select id="method-selector" onChange={props.onMethodSelect}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>

      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight in kgs/lbs"
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height in cm/inches"
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id="calculate">Calculate BMI</button>
    </form>
  );
};
export default Form;
