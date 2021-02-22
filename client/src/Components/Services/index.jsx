import React, { useState, useEffect, useContext } from "react";
import { PageHeader, Table } from "antd";
import {
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import columns from "./columns";
import API from "../../api";
import Spinner from "../Spinner";

import { GlobalContext } from "../../Context/GlobalContext";
import { setUrlString, getArrayParams } from "../../utils/paramsConvert";
import axios from "axios";
const Services = () => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data, dispatch } = useContext(GlobalContext);
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const router = useRouteMatch();
  const { search } = location;

  useEffect(() => {
    setLoading(true);
    axios
      .post(API.services, getArrayParams(search))
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          console.log(res.data.data);
          setData(res.data.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [search]);

  return (
    <>
      {!loading ? (
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
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Services;
