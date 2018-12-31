import React from "react";
import { Button, Checkbox, Input, message } from "antd";
import IconSlider from "../containers/IconSlider";

const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

const success = () => {
  message
    .loading("Checking...", 2.5)
    .then(() =>
      message.success("Thanks for helping us improving our system", 2.5)
    );
};

const plainOptions = [
  { label: "Strongly Agree", value: "Strongly Agree" },
  { label: "Agree", value: "Agree" },
  { label: "Neutral", value: "Neither Agree Nor Disagree" },
  { label: "Strongly Disagree", value: "Strongly Disagree" },
  { label: "Disagree", value: "Disagree" }
];

const FillSurvey = props => (
  <div className="conatiner">
    <h2 id="fillasurvey">Fill Your Survey & get points</h2>
    <div>
      <p>I can easily find what I'm looking for in our website:</p>
      <CheckboxGroup
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      <br /> <br />
      <p>Information on the website is clear and easy to understand:</p>
      <CheckboxGroup
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      <br /> <br />
      <p>The website meets my needs:</p>
      <CheckboxGroup
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      <br />
      <br />
      <p>how satisfied are you with our service:</p>
      <IconSlider min={0} max={10} style={{ maxWidth: "70%" }} />
    </div>

    <h4>Do you have any ideas to improve our bank system:</h4>
    <Input style={{ width: "35%" }} placeholder="i think if you could ..." />
    <br />
    <Button style={{ marginTop: "6px" }} type="primary" onClick={success}>
      Submit & get points
    </Button>
  </div>
);

export default FillSurvey;
