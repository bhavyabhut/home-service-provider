import React, { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Spinner from '../../Spinner';
import CustomResponsiveContainer from '../State/Container';
import { CHART_COLORS } from '../../../config/consts';
import API from '../../../api';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Course() {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(API.collegeCourseChart).then((data) => {
      data.json().then((data) => {
        setCourseData(data.data);
        setLoading(false);
      });
    });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Scrollbars
          thumbSize={100}
          autoHide
          style={{ height: '100%', width: '100%' }}
        >
          <CustomResponsiveContainer>
            <PieChart width={800} height={800}>
              <Pie
                data={courseData}
                cx={210}
                cy={210}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill='#8884d8'
                dataKey='value'
              >
                {courseData.map((entry, index) => (
                  <Cell
                    style={{ cursor: 'pointer' }}
                    key={`cell-${index}`}
                    fill={CHART_COLORS[index % CHART_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CustomResponsiveContainer>
        </Scrollbars>
      )}
    </>
  );
}

export default Course;
