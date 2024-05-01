import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Spin } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CHART_COLORS } from '../../config/consts';
import API from '../../api';

const ChartState = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(API.categoryDashboard).then((res) => {
      if (res.data.success) {
        setCollegeData(
          res.data.data.map((data) => ({
            name: data.name,
            count: data.count,
            id: data.id,
          })),
        );
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='max-w-screen-md w-full h-full flex items-start justify-center'>
        {loading ? (
          <Spin />
        ) : (
          <PieChart width={400} height={400}>
            <Pie
              data={collegeData}
              cx={200}
              cy={200}
              labelLine={true}
              outerRadius={150}
              fill='#8884d8'
              dataKey='count'
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {collegeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                  cursor='pointer'
                  onClick={() =>
                    navigate(
                      `/home-services/allServices?category=${entry.id}&state=all&city=&name=`,
                    )
                  }
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              align='center'
              layout='horizontal'
              verticalAlign='bottom'
              style={{ paddingTop: '250px', position: 'inherit' }}
            />
          </PieChart>
        )}
      </div>
    </div>
  );
};

export default ChartState;
