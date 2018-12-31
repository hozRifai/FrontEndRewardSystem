import React from "react";
import {
  Button,
  InputNumber,
  DatePicker,
  message,
  Input,
  Cascader,
  Card
} from "antd";
const options = [
  {
    value: "EmiratesNBD",
    label: "EmiratesNBD",
    children: [
      {
        value: "UK",
        label: "UK",
        children: [
          {
            value: "London - Emirates NBD House",
            label: "London - Emirates NBD House"
          }
        ]
      },
      {
        value: "UAE",
        label: "UAE",
        children: [
          {
            value: "Abu Dhabi",
            label: "Abu Dhabi"
          },
          {
            value: "Dubai- Burj Al Arab Office",
            label: "Dubai- Burj Al Arab Office"
          },
          {
            value: "Dubai- Emirates NBD Group",
            label: "Dubai- Emirates NBD Group"
          },
          {
            value: "Sharjah",
            label: "Sharjah"
          },
          {
            value: "Ajman",
            label: "Ajman"
          },
          {
            value: "Fujairah",
            label: "Fujairah"
          },
          {
            value: "Ras Al Khaimah",
            label: "Ras Al Khaimah"
          },
          {
            value: "Umm Al Quwain",
            label: "Umm Al Quwain"
          }
        ]
      }
    ]
  },
  {
    value: "Emirates Islamic",
    label: "Emirates Islamic",
    children: [
      {
        value: "UAE",
        label: "UAE",
        children: [
          {
            value: "Dubai",
            label: "Dubai"
          }
        ]
      }
    ]
  }
];

const success = () => {
  message.success(
    "You will receive a notification when your transaction will be done",
    7
  );
};
const MakeTransaction = props => (
  <div className="container">
    <div style={{ float: "right", marginRight: "33%" }}>
      <h2 id="make_transaction_history">Transactions History</h2>
      <Card title="Receiver: AhmadHabib" style={{ width: 300 }}>
        <p>From: HozRifai</p>
        <p>Date & Time: 2018-10-10 11:04:25</p>
        <p>Bank: EmiratesNBD</p>
      </Card>
    </div>
    <div style={{ float: "left" }}>
      <h2 id="fillasurvey">Make Transactions & get points</h2>
      <p>Enter the amount of money:</p>
      <InputNumber
        defaultValue={1000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        style={{ width: "50%" }}
      />
      <br />
      <p>Choose the date and time to transfer your money:</p>
      <DatePicker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="Select Time"
      />
      <br />
      <p>Enter 8 digits of the Receiver's account:</p>
      <Input style={{ width: "50%" }} placeholder="26888888" /> <br />
      <p>Enter the bank's name, country, and the branch:</p>
      <Cascader options={options} />
      <br />
      <Button style={{ marginTop: "6px" }} type="primary" onClick={success}>
        Submit
      </Button>
    </div>
  </div>
);

export default MakeTransaction;
