import React from "react";
import { Card, Row, Tag } from "antd";
import tagColor from "../../../config/consts";

const CollegeStudent = ({ data }) => {
  return (
    <Card>
      <Row className="customRow">
        <span className="text-dark">Experience:</span>
        <span>{data?.experiance}</span>
      </Row>
      <Row className="customRow">
        <span className="text-dark">Total Customer Served:</span>
        <span>{data?.customers_served}</span>
      </Row>
      <Row className="customRow">
        <span className="text-dark">Rating:</span>
        <span>⭐️ ⭐️ ⭐️ ⭐️</span>
      </Row>
      {/* <Row className="customRow">
        <span className="text-dark">Tags:</span>
        <span>
          {data?.tag?.map((prop) => {
            const num = prop.charCodeAt(0) + prop.charCodeAt(prop.length - 1);
            return (
              <Tag style={{ color: "black" }} color={tagColor[num % 11]}>
                {prop}
              </Tag>
            );
          })}
        </span>
      </Row> */}
      <Row className="customRow">
        <span className="text-dark">Feedback:</span>
        <span>Best in area</span>
      </Row>
    </Card>
  );
};

export default CollegeStudent;
