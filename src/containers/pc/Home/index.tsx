import React from "react";
import styled from "styled-components";
import background from "assets/background.jpg";
import { Form, Button, Input } from "antd";
import "./index.less";

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  background-image: url(${background});
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.45;
  position: absolute;
  background-color: green;
  background-repeat: round;
`;

const Home: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <>
      <HomeWrapper />
      <HomeContainer />
      <div className="home-content-box-wrapper">
        <div className="home-content-box">
          <div className="home-content-text">
            <h1>Hello World</h1>
            <p>Regularly hold great raffle activities to give back our users</p>
            <h4>
              <p>1. Enter your order information</p>
              <p>2. Activate your warranty</p>
            </h4>
            <p>
              If you encounter any exceptions, remember to contact us via email.
            </p>
          </div>
          <div className="home-content-form">
            <h2>
              Please enter your order information to activate lifetime warranty
            </h2>
            <Form form={form} layout="vertical">
              <Form.Item label="Name" name="name" required>
                <Input placeholder="Enter your Name" />
              </Form.Item>
              <Form.Item label="Email" name="email" required>
                <Input placeholder="Enter Your Email" />
              </Form.Item>
              <Form.Item label="Order ID" name="orderID" required>
                <Input placeholder="Enter Your Order ID" />
              </Form.Item>
              <Form.Item label="FeedBack" name="feedback" required>
                <Input placeholder="Enter Your FeedBack" />
              </Form.Item>
              <Button
                type="primary"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  background: "green",
                }}
              >
                Activate Now
              </Button>
            </Form>
            <div className="home-content-description">
              <a>How to find your Order ID?</a>
              <p>We don't share your personal info with anyone.</p>
              <p>Check out our Privacy Policy for more information.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
