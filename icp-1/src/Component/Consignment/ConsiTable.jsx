import React, { useState } from 'react';
import { Table, Button, Row, Col } from 'antd';
import ArrowLeftOutlined from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

// ---------------------------------Table Array Start Here 

const columns = [
  {
    title: 'Serial No',
    dataIndex: 'key',
  },
  {
    title: 'ICP Item Code',
    dataIndex: 'icp_item_code',
  },
  {
    title: 'Vendor',
    dataIndex: 'vendor',
  },
  {
    title: 'Vendor Code',
    dataIndex: 'vendor_Code',
  },
  {
    title: 'Item Name ',
    dataIndex: 'item_Name',
  },
  {
    title: 'Open Qty',
    dataIndex: 'open_qty',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
  },
  {
    title: 'C Qty',
    dataIndex: 'c_qty',
  },
  {
    title: 'Avl Qty',
    dataIndex: 'avl_qty',
  },

  {
    title: 'Date',
    dataIndex: 'date',
  },

];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    icp_item_code: `4827988${i}`,
    vendor: `John joe${i}`,
    vendor_Code: `1227244${i}`,
    item_Name: `Lorem`,
    open_qty: `1${i}`,
    unit: `Kg`,
    c_qty: `ICP`,
    avl_qty: `Check`,
    date: ' 12/11/23',
  });
}

const ConsiTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/consignment/createconsignment");
  };

  const handleBack = () => {
    navigate("/consignment");
  };

  
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = changeableRowKeys.filter((_, index) => index % 2 === 0);
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = changeableRowKeys.filter((_, index) => index % 2 !== 0);
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const handleAddToConsignment = () => {
    // Handle the add to consignment logic here
    console.log('Add to consignment clicked');
  };


  //                 ---------------------------------Table Array End Here 

  return (
    <>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        scroll={{ y: 440 }} // Adjust the height here
        pagination={{ pageSize: 10 }} // Pagination setup
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Button type="primary" icon={<ArrowLeftOutlined />}
         onClick={handleBack}
        >
          Back
        </Button>

        <Button type="primary"
          onClick={handleClick}>
          Next
        </Button>

      </div>
    </>
  );
};

export default ConsiTable;
