import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import {ArrowLeftOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
const columns = [
  {
    title: 'Serial No',
    dataIndex: 'key',
  },
  {
    title: 'Item Name ',
    dataIndex: 'item_Name',
  },
  {
    title: ' Item Code',
    dataIndex: 'icp_item_code',
  },
  {
    title: 'Task No',
    dataIndex: 'task_no',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
  },
  {
    title: 'Availability LMC',
    dataIndex: 'availability_LMC',
  },
  {
    title: 'Storage Location',
    dataIndex: 'storage_location',
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
    item_Name: `Lorem`,
    icp_item_code: `4827988${i}`,
    task_no: `1227244${i}`, 
    qty: `1${i}`,
    availability_LMC: `15${i}`,
    storage_location: `1${i}`,
    date: ' 12/11/23',
  });
}

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
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
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const handleNext = () => {
    console.log('Next button clicked');
  };

  const success = () => {
    Modal.success({
      content: 'Demand Order Created - 1817648981',
    });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/picking-task/pickingselect");
  };



  const handleBack = () => {
    navigate("/picking-task");
  };

  

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        scroll={{ y: 440 }}  // Set the height of the table here
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
    </div>
  );
};

export default App;
