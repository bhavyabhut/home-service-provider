import React, { useState, useEffect } from 'react';
import { PageHeader, Table } from 'antd';
import columns from './columns';
import API from '../../api';

function Student() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(API.students).then((res) => {
      res.json().then((resJson) => {
        setData(resJson.data);
        setLoading(false);
      });
    });
  }, []);
  return (
    <>
      <PageHeader title='Students' />
      <Table
        loading={loading}
        columns={columns}
        bordered
        rowKey={(render) => render._id}
        dataSource={data}
        pagination
        scroll={{ x: 1300 }}
      />
    </>
  );
}

export default Student;
