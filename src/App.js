import React, { useState } from "react";
import "./App.css";
import { Divider, Button, Table, Col } from "antd";

import "antd/es/table/style/index.css";
import "antd/es/pagination/style/index.css";

function App() {
  const [data2, setData2] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSubmit = () => {
    const newData = [];

    selectedRowKeys.forEach((item, i) => {
      const newObj = {
        key: data[item].key,
        no: i + 1,
        name: data[item].name,
        age: data[item].age,
        address: data[item].address,
      };
      newData.push(newObj);
    });

    setData2(newData);

    console.log("selectedRowKeys changed: ", selectedRowKeys);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const columns2 = [
    {
      title: "No",
      dataIndex: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data = [];
  for (let i = 0; i < 25; i++) {
    data.push({
      key: i,
      no: i + 1,
      name: `Edward King ${i}`,
      age: 32 + i,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    getCheckboxProps: (selectedRowKeys) => {
      return {
        disabled: selectedRowKeys.age < 35,
      };
    },
    onChange: onSelectChange,
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Jalankan Aplikasi Ini Dengan Benar</h2>
        <Divider />
        <Col style={{ marginTop: "1rem" }}>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{ position: ["bottomRight"] }}
          />
          <Col>
            <Button
              type="primary"
              style={{ marginTop: "1rem" }}
              size="default"
              onClick={onSubmit}
              className="btn-submit"
            >
              Submit
            </Button>
          </Col>
          <Col style={{ marginTop: "1rem" }}>
            <Table columns={columns2} dataSource={data2} />
          </Col>
        </Col>
      </header>
    </div>
  );
}

export default App;
