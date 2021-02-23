import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { Scrollbars } from "react-custom-scrollbars";
import { useHistory } from "react-router-dom";
import Spinner from "../../Spinner";
// import CustomResponsiveContainer from "./Container";
import { CHART_COLORS } from "../../../config/consts";
import API from "../../../api";
import axios from "axios";

const renderCustomizedLabel = ({ percent }) => `${(percent * 100).toFixed(0)}%`;

const ChartState = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    axios.get(API.categoryDashboard).then((res) => {
      if (res.data.success) {
        setCollegeData(res.data.data);
        setLoading(false);
      }
    });
    // fetch(API.collegeChart).then((data) => {
    //   data.json().then((data) => {
    //     setCollegeData(data.data);
    //     setLoading(false);
    //   });
    // });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* <Scrollbars
            thumbSize={100}
            autoHide
            style={{ height: "100%", width: "100%" }}
          > */}
          {console.log(collegeData)}
          {/* <CustomResponsiveContainer> */}
          <PieChart width={450} height={450}>
            <Pie
              data={collegeData}
              cx={210}
              cy={210}
              labelLine
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="count"
              // nameKey="name"
            >
              {collegeData.map((entry, index) => (
                <Cell
                  style={{ cursor: "pointer" }}
                  key={`cell-${index}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                  onClick={() =>
                    history.push(
                      `/home-services/allServices?category=${entry.id}&state=all&city=&name=`
                    )
                  }
                />
              ))}
            </Pie>
            }
            <Tooltip />
            <Legend />
          </PieChart>
          {/* </CustomResponsiveContainer> */}
          {/* </Scrollbars> */}
        </>
      )}
    </>
  );
};

export default ChartState;
