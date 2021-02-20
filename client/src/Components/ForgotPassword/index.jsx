import React, { useState } from "react";
import { Button, Input, Form, Switch, Divider } from "antd";
import { Link } from "react-router-dom";
import { SendOutlined } from "@ant-design/icons";
import Logo from "../../Layout/Logo";

const SignIn = () => {
  const [form] = Form.useForm();
  return (
    <div className="signin">
      <div className="signin-form">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            right: "1rem",
          }}
        >
          <Logo /> <h1 className="title">HomeServices</h1>
        </div>
        <h2 className="welcomeBack">Welcome back</h2>
        <p class="loginIntoAccount">Enter your email to recover your account</p>
        <div>
          <Form form={form} layout="vertical">
            <Form.Item
              label="Email"
              //   required
              //   tooltip="This is a required field"
            >
              <Input placeholder="johndoe@gmail.com" />
            </Form.Item>

            <Form.Item style={{ width: "100%" }}>
              <Button
                type="primary"
                shape="round"
                icon={<SendOutlined />}
                style={{
                  width: "100%",
                  height: "2.5rem",
                  backgroundColor: "rgb(0, 132, 137)",
                  borderColor: "rgb(0, 132, 137)",
                }}
                // loading={true}
              >
                Send Email
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="signin-image-div" />
    </div>
  );
};

export default SignIn;
