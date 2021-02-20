import React, { useState } from "react";
import { Button, Input, Form, Switch, Divider } from "antd";
import { Link } from "react-router-dom";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UnlockOutlined,
} from "@ant-design/icons";
import Logo from "../../Layout/Logo";

const SignUp = () => {
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
        <h2 className="welcomeBack">Welcome to HomeServices</h2>
        <p class="loginIntoAccount">Please register your account</p>
        <div>
          <Form form={form} layout="vertical">
            <Form.Item
              label="Username"
              //   required
              //   tooltip="This is a required field"
            >
              <Input placeholder="john doe" />
            </Form.Item>
            <Form.Item
              label="Email"
              //   required
              //   tooltip="This is a required field"
            >
              <Input placeholder="johndoe@gmail.com" />
            </Form.Item>
            <Form.Item
              label="Password"
              //   tooltip={{
              //     title: "Password",
              //     icon: <InfoCircleOutlined />,
              //   }}
            >
              <Input.Password
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item
              label="Confirm password"
              //   tooltip={{
              //     title: "Password",
              //     icon: <InfoCircleOutlined />,
              //   }}
            >
              <Input.Password
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <div>
                <Switch></Switch>
                <span className="remeberMe">Remember me</span>
              </div>
            </div>
            <Form.Item style={{ width: "100%" }}>
              <Button
                type="primary"
                shape="round"
                icon={<UnlockOutlined />}
                style={{
                  width: "100%",
                  height: "2.5rem",
                  backgroundColor: "rgb(0, 132, 137)",
                  borderColor: "rgb(0, 132, 137)",
                }}
                // loading={true}
              >
                Registration
              </Button>
            </Form.Item>
          </Form>
          <Divider>Or Register Up With</Divider>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "1rem",
              rowGap: "1rem",
            }}
          >
            <Button type="primary">Facebook</Button>
            <Button style={{ backgroundColor: "red" }} type="primary">
              Instagram
            </Button>
            <Button style={{ backgroundColor: "red" }} type="primary">
              Google
            </Button>
            <Button type="primary">Github</Button>
          </div>
          <p
            style={{
              textAlign: "center",
              margin: "1.5rem 0",
              fontSize: "1rem",
              fontWeight: "700",
              color: "rgb(119, 119, 119)",
              fontFamily: "Loto",
            }}
          >
            Already Have an Account!
            <Link
              style={{ color: "rgb(0, 132, 137)", marginLeft: "0.5rem" }}
              to="/signin"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="signin-image-div" />
    </div>
  );
};

export default SignUp;
