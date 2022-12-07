import React, { useState, useEffect } from 'react';
import { Table, Empty } from 'antd';
import columns from '../columns';
import API from '../../../api';

const nestedColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
];
const [first, ...newColumns] = [...columns];
function SimilarCollege({ location, id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(API.collegeByLocation.replace(':locationId', location)).then(
      (data) => {
        data.json().then((data) => {
          setData(data.data.filter((college) => college._id !== id));
          setLoading(false);
        });
      },
    );
  }, []);
  return (
    <Table
      loading={loading}
      columns={[...nestedColumns, ...newColumns]}
      bordered
      rowKey={(render) => render._id}
      dataSource={data}
      pagination
      scroll={{ x: 1300 }}
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description='No Similar College Found'
          />
        ),
      }}
    />
  );
}

export default SimilarCollege;
