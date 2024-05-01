import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import columns from './columns';
import API from '../../api';
import Spinner from '../Spinner';

import { getArrayParams } from '../../utils/paramsConvert';

function Services() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { search } = location;

  useEffect(() => {
    setLoading(true);
    axios
      .post(API.services, getArrayParams(search))
      .then((res) => {
        if (res.data.success) {
          setData(res.data.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [search]);

  return !loading ? (
    <Table
      loading={loading}
      columns={columns}
      bordered
      rowKey={(render) => render._id}
      dataSource={datas}
      pagination={{ pageSize: 20 }}
      scroll={{ x: 1300 }}
    />
  ) : (
    <Spinner />
  );
}

export default Services;
