import React, { useEffect, useState } from "react";
import { Card, Avatar } from "antd";
import { useHistory } from "react-router-dom";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import API from "../../api.js";
import Spinner from "../Spinner/index.jsx";
const { Meta } = Card;
const Cards = () => {
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(API.categoryDashboard)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setCards(res.data.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {!loading ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {cards.map((card) => (
            <Card
              onClick={() => {
                history.push(
                  `/home-services/allServices?category=${card.id}&state=all&city=&name=`
                );
              }}
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
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Cards;
