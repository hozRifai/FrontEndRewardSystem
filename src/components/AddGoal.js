import React from "react";
import {
  Button,
  InputNumber,
  DatePicker,
  notification,
  Icon,
  Input,
  Card
} from "antd";

const openNotification = () => {
  notification.open({
    message: "Adding A New Goal!",
    description: "We believe that you can save that money",
    icon: <Icon type="smile" style={{ color: "#108ee9" }} />
  });
};

const SetGoal = props => (
  <div className="container">
    <div style={{ float: "left" }}>
      <h1 id="addgoalstitle"> Add Goals </h1>
      <h4>Add the amount of money you want to save:</h4>
      <InputNumber
        defaultValue={5000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
      />
      <h4>Describe Your Goal:</h4>
      <Input placeholder="I am saving that money for the future" />
      <br />
      <h4>Start Date:</h4>
      <DatePicker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="Start Time"
      />
      <br />
      <h4>End Date:</h4>
      <DatePicker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="End Time"
      />
      <br />
      <br />
      <Button
        style={{ marginTop: "6px" }}
        type="primary"
        onClick={openNotification}
      >
        Add My Goal!
      </Button>
    </div>

    <div style={{ float: "right", marginRight: "30%" }}>
      <h1 id="goalshistory"> Goals History </h1>

      <Card title="Open Company" extra={<p>Done</p>} style={{ width: 300 }}>
        <p>I am saving 10000$ to start my own small company... </p>
      </Card>
      <br />
      <Card
        title="Visiting London"
        extra={<p>onGoing</p>}
        style={{ width: 300 }}
      >
        <p>I am saving 5000$ to visit London in the summer... </p>
      </Card>
    </div>
  </div> /* end of life!*/
);

export default SetGoal;
