import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import columns from './columns';
import API from '../../api';

function College() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API.colleges).then((data) => {
      data.json().then((data) => {
        setData(data.data);
        setLoading(false);
      });
    });
  }, []);

  return (
    <Table
      loading={loading}
      columns={columns}
      bordered
      rowKey={(render) => render._id}
      dataSource={data}
      pagination={{ pageSize: 20 }}
      scroll={{ x: 1300 }}
    />
  );
}

export default College;
