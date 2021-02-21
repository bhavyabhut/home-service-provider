import React, { useEffect, useState } from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import API from "../../api.js";
const { Meta } = Card;
const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(API.categoryDashboard)
      .then((res) => {
        // console.log(res);
        if (res.data.success) {
          setCards(res.data.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {cards.map((card) => (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <div
              className="CustomCARD"
              style={{
                background: `url("/images/Card/${card.name}.jpg")`,
              }}
              alt="example"
            ></div>
          }
        >
          <Meta
            title={card.name}
            description={`Total Services: ${card.count} `}
          />
        </Card>
      ))}

      {/* <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <div
            className="CustomCARD"
            style={{
              background:
                'url("/images/Card/dominik-scythe-3cIvvzjE6Lk-unsplash.jpg")',
            }}
            alt="example"
          ></div>
        }
      >
        <Meta title="Plumber" description="Total Services: 6" />
      </Card> */}
    </div>
  );
};

export default Cards;
