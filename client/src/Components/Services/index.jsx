import React, { useState, useEffect, useContext } from "react";
import { PageHeader, Table } from "antd";
import columns from "./columns";
import API from "../../api";
import { GlobalContext } from "../../Context/GlobalContext";
import axios from "axios";
const College = () => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API.services)
      .then((res) => {
        // console.log(res);
        if (res.data.success) {
          console.log(res.data.data);
          setData(res.data.data);
          setLoading(false);
        }
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <PageHeader title="Services" />
      <Table
        loading={loading}
        columns={columns}
        bordered
        rowKey={(render) => render._id}
        dataSource={datas}
        pagination
        scroll={{ x: 1300 }}
      />
    </>
  );
};

export default College;
