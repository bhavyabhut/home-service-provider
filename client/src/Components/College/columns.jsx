import React from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import tagColor from '../../config/consts';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, row) => (
      <Link to={`college/${row._id}`}>{text.slice(0, text.length - 13)}</Link>
    ),
  },
  {
    title: 'State',
    dataIndex: 'state',
  },
  {
    title: 'Foundation year',
    dataIndex: 'year_founded',
  },
  {
    title: 'Courses',
    dataIndex: 'courses',
    render: (text) =>
      text.split(',').map((prop) => {
        const num = prop.charCodeAt(0) + prop.charCodeAt(prop.length - 1);
        return (
          <Tag style={{ color: 'black' }} color={tagColor[num % 11]}>
            {prop}
          </Tag>
        );
      }),
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
  {
    title: 'country',
    dataIndex: 'country',
  },
  {
    title: 'No of students',
    dataIndex: 'no_of_student',
  },
];

export default columns;
