import React from "react";
import columns from "../../Student/columns";
import { Table } from "antd";
const nestedColumns = [
  {
    title: "Name",
    dataIndex: "first_name",
    render: (text, row) => `${text} ${row.last_name}`,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
const [first, second, ...newColumns] = [...columns];

const CollegeStudent = ({ data, loading }) => {
  return (
    <Table
      loading={loading}
      columns={[...nestedColumns, ...newColumns]}
      bordered
      rowKey={(render) => render._id}
      dataSource={data}
      pagination
      scroll={{ x: 1300 }}
    />
  );
};

export default CollegeStudent;
