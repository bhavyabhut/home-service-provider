import React from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import tagColor from '../../config/consts';

const columns = [
  {
    title: 'Name',
    dataIndex: 'first_name',
    render: (text, row) => (
      <Link to={`student/${row._id}`}>{`${text} ${row.last_name}`}</Link>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    render: (text, row) => <Link to={`student/${row._id}`}>{text}</Link>,
  },
  {
    title: 'Skills',
    dataIndex: 'skills',
    render: (text) =>
      text.split(',').map((prop) => {
        const num = prop.charCodeAt(0) + prop.charCodeAt(prop.length - 1);
        return (
          <Tag key={num} style={{ color: 'black' }} color={tagColor[num % 11]}>
            {prop}
          </Tag>
        );
      }),
  },
  {
    title: 'Year of batch',
    dataIndex: 'year_of_batch',
  },
  {
    title: 'Web',
    dataIndex: 'web',
  },
  {
    title: 'Phone',
    dataIndex: 'phone1',
  },
];

export default columns;
