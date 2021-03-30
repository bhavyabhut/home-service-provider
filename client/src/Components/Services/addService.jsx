import React, { useState, useEffect } from "react";
import { Input, Button, Select, Row, Col, Collapse, notification } from "antd";

const { Panel } = Collapse;
const { Option } = Select;

export default function AddServices() {
  const [field, setField] = useState({});
  const [state, setState] = useState({
    error: false,
    message: "",
    heading: "",
  });
  const validationError = (message) => {
    setState({ error: true, message, heading: "Validation Error" });
  };
  useEffect(() => {
    if (state.error) {
      notification.open({
        message: state.heading,
        type: "error",
        description: state.message,
      });
      setState({ ...state, error: false });
    }
  }, [state.error]);

  const submitData = () => {
    if (!field.name) {
      validationError("Please enter name");
    }
  };
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={"1"}>
        <Panel
          style={{ fontWeight: "bold" }}
          header="Service/Shop information"
          key="1"
        >
          <Row gutter={24}>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  Service/Shop Name: *
                </div>
                <Input
                  value={field.name}
                  onChange={(e) => setField({ ...field, name: e.target.value })}
                  placeholder="Service/Shop Name"
                ></Input>
              </div>
            </Col>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  Category/Type: *
                </div>
                <Select
                  placeholder="Select Category/Type"
                  style={{ width: "100%", fontWeight: "normal" }}
                >
                  <Option key="1">Painting</Option>
                </Select>
              </div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  Total Experience: *
                </div>
                <Input placeholder="1 year 6 months"></Input>
              </div>
            </Col>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  Tag:
                </div>
                <Input placeholder="Cheap,Awesome"></Input>
              </div>
            </Col>
          </Row>
          <Row>
            <Col offset="1" span="21">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  Description: *
                </div>
                <Input.TextArea placeholder="Enter Description" />
              </div>
            </Col>
          </Row>
        </Panel>

        <Panel style={{ fontWeight: "bold" }} header="Address " key="2">
          <Row gutter={24}>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  Address Line 1: *
                </div>
                <Input placeholder="Address Line 1"></Input>
              </div>
            </Col>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  Address Line 2: *
                </div>
                <Input placeholder="Address Line 2"></Input>
              </div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  Country: *
                </div>
                <Select
                  placeholder="Select Country"
                  style={{ width: "100%", fontWeight: "normal" }}
                >
                  <Option key="1">Painting</Option>
                </Select>
              </div>
            </Col>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  State: *
                </div>
                <Select
                  placeholder="Select State"
                  style={{ width: "100%", fontWeight: "normal" }}
                >
                  <Option key="1">Painting</Option>
                </Select>
              </div>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  City: *
                </div>
                <Select
                  placeholder="Select City"
                  style={{ width: "100%", fontWeight: "normal" }}
                >
                  <Option key="1">Painting</Option>
                </Select>
              </div>
            </Col>
            <Col span="10" offset="1">
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ paddingBottom: "0.5rem", fontWeight: "bold" }}>
                  Zip code: *
                </div>
                <Input placeholder="Zip code"></Input>
              </div>
            </Col>
          </Row>
        </Panel>
      </Collapse>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button style={{ marginRight: "1rem" }}>Cancel</Button>
        <Button onClick={() => submitData()} type="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}
