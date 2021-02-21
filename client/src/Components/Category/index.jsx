import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

export default function index() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <div
            className="CustomCARD"
            style={{
              background:
                'url("../../images/Card/dominik-scythe-3cIvvzjE6Lk-unsplash.jpg")',
            }}
            alt="example"
          ></div>
        }
      >
        <Meta title="Plumber" description="Total Services: 6" />
      </Card>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <div
            className="CustomCARD"
            style={{
              background:
                'url("../../images/Card/dominik-scythe-3cIvvzjE6Lk-unsplash.jpg")',
            }}
            alt="example"
          ></div>
        }
      >
        <Meta title="Plumber" description="Total Services: 6" />
      </Card>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <div
            className="CustomCARD"
            style={{
              background:
                'url("../../images/Card/dominik-scythe-3cIvvzjE6Lk-unsplash.jpg")',
            }}
            alt="example"
          ></div>
        }
      >
        <Meta title="Plumber" description="Total Services: 6" />
      </Card>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <div
            className="CustomCARD"
            style={{
              background:
                'url("../../images/Card/dominik-scythe-3cIvvzjE6Lk-unsplash.jpg")',
            }}
            alt="example"
          ></div>
        }
      >
        <Meta title="Plumber" description="Total Services: 6" />
      </Card>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <div
            className="CustomCARD"
            style={{
              background:
                'url("../../images/Card/dominik-scythe-3cIvvzjE6Lk-unsplash.jpg")',
            }}
            alt="example"
          ></div>
        }
      >
        <Meta title="Plumber" description="Total Services: 6" />
      </Card>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <div
            className="CustomCARD"
            style={{
              background:
                'url("../../images/Card/dominik-scythe-3cIvvzjE6Lk-unsplash.jpg")',
            }}
            alt="example"
          ></div>
        }
      >
        <Meta title="Plumber" description="Total Services: 6" />
      </Card>
    </div>
  );
}
