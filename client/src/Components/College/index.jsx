import React, { useState, useEffect } from 'react';
import { PageHeader, Table } from 'antd';
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
    <>
      {console.log('hi')}
      <PageHeader title='Colleges' />
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

export default College;
