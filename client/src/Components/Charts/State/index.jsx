import React, { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useHistory } from 'react-router-dom';
import Spinner from '../../Spinner';
import CustomResponsiveContainer from './Container';
import { CHART_COLORS } from '../../../config/consts';
import API from '../../../api';

const renderCustomizedLabel = ({ percent }) => `${(percent * 100).toFixed(0)}%`;

function ChartState() {
  const [collegeData, setCollegeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    fetch(API.collegeChart).then((data) => {
      data.json().then((data) => {
        setCollegeData(data.data);
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
                data={collegeData}
                cx={210}
                cy={210}
                labelLine
                label={renderCustomizedLabel}
                outerRadius={150}
                fill='#8884d8'
                dataKey='value'
              >
                {collegeData.map((entry, index) => (
                  <Cell
                    style={{ cursor: 'pointer' }}
                    key={`cell-${index}`}
                    fill={CHART_COLORS[index % CHART_COLORS.length]}
                    onClick={() => history.push(`state/${entry.name}`)}
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

export default ChartState;
