import React, { useState, useEffect } from 'react';
import { PageHeader, Table } from 'antd';
import { useParams } from 'react-router-dom';
import columns from '../../College/columns';
import API from '../../../api';

const nestedColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
];
const [first, ...newColumns] = [...columns];
function CollegeChartTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { stateId } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(API.collegeByState.replace(':stateId', stateId)).then((data) => {
      data.json().then((data) => {
        setData(data.data);
        setLoading(false);
      });
    });
  }, []);
  return (
    <>
      <PageHeader title={`${stateId} colleges`} />
      <Table
        loading={loading}
        columns={[...nestedColumns, ...newColumns]}
        bordered
        rowKey={(render) => render._id}
        dataSource={data}
        pagination
        scroll={{ x: 1300 }}
      />
    </>
  );
}

export default CollegeChartTable;
