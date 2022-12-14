import React, { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Spinner';
import { CHART_COLORS } from '../../../config/consts';
import API from '../../../api';

const renderCustomizedLabel = ({ percent }) => `${(percent * 100).toFixed(0)}%`;

function ChartState() {
  const [collegeData, setCollegeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    axios.get(API.servicesChart).then((res) => {
      if (res.data.success) {
        setCollegeData(
          res.data.data.map((data) => ({
            name: data.name,
            value: data.count,
            id: data.id,
          })),
        );
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <PieChart width={450} height={450}>
          <Pie
            data={collegeData}
            cx={210}
            cy={210}
            labelLine
            label={renderCustomizedLabel}
            outerRadius={150}
            fill='#8884d8'
            dataKey='count'
            // nameKey="name"
          >
            {collegeData.map((entry, index) => (
              <Cell
                style={{ cursor: 'pointer' }}
                key={`cell-${index}`}
                fill={CHART_COLORS[index % CHART_COLORS.length]}
                onClick={() =>
                  history.push(
                    `/home-services/allServices?category=all&state=all&city=${entry.name}&name=`,
                  )
                }
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </>
  );
}

export default ChartState;
