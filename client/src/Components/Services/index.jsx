import React, { useState, useEffect, useContext } from "react";
import { PageHeader, Table } from "antd";
import columns from "./columns";
import API from "../../api";
import { GlobalContext } from "../../Context/GlobalContext";

const College = () => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data, dispatch } = useContext(GlobalContext);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(API.colleges).then((data) => {
  //     data.json().then((data) => {
  //       setData(data.data);
  //       setLoading(false);
  //     });
  //   });
  // }, []);
  console.log(data.search, "hu service na data chu bhai");
  return (
    <>
      {console.log(data.search, "hu service na data chu bhai")}
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
