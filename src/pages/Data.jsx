import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "./Data.css";

const Data = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  let list = JSON.parse(localStorage.getItem("formdata") || "[]");
  //console.log("list", list);

  const columns = [
    // { title: "Id", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Date Of Birth", dataIndex: "dob" },
    { title: "Gender", dataIndex: "gender" },
    { title: "Email Id", dataIndex: "email" },
    { title: "Location", dataIndex: "location" },
  ];

  const onSelectChange = (selectedRowslist) => {
    // console.log("selectedRowslist:",selectedRowslist);
    setSelectedRowKeys(selectedRowslist);
  };

  const onButtonClick = () => {
    if (!selectedRowKeys.length) {
      toast.error("Please select items to delete");
      return;
    }
    for (let i = 0; i < selectedRowKeys.length; i++) {
      let deleteIndex = selectedRowKeys[i];
      list.splice(deleteIndex,1);
    }

    localStorage.setItem("formdata", JSON.stringify(list));
    toast.success("Successfully Deleted");
    setSelectedRowKeys([]);
  };

  // useEffect(() => {
  //   console.log("useState:", selectedRowKeys);
  // }, [selectedRowKeys]);

  return (
    <div className="data-page">
      {list.length ? (
        <>
        <div className="table-container">
          <Table
            bordered
            dataSource={list}
            columns={columns}
            rowKey="id"
            rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
            pagination={{ position: ["bottomCenter"], pageSize:5 }}
          />
        </div>
        <Button type="primary" onClick={onButtonClick}>
        DELETE
      </Button>
      </>
      ) : (
        <p className="no-data">No data found</p>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Data;
