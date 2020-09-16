
import React from "react";
import { Button, Form } from 'semantic-ui-react'

const BmiForm = (props) => {
  return (
    <Form onSubmit={props.onSubmitHandler}>
      <Form.Group widths='equal'>
        <Form.Field>
      <label for="system">Choose your System</label>
      <select id="method-selector" onChange={props.onMethodSelect}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>
      </Form.Field>
      <Form.Field>
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
      </Form.Field>
      <Form.Field>
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
      </Form.Field>
      </Form.Group>
      <Button id="calculate" basic color='green'>Calculate</Button>
      
    
    </Form>
  );
};
export default BmiForm;