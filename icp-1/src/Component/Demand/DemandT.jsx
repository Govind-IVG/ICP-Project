import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { RightOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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
    title: 'Qty',
    dataIndex: 'qty',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Shipped by',
    dataIndex: 'shipped_by',
  },
  {
    title: 'Availability LMC',
    dataIndex: 'availability_LMC',
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
    qty: `1${i}`,
    unit: `Kg`,
    date: ' 12/11/23',
    shipped_by: 'ICP',
    availability_LMC: `Check`,
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

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Would you like to post Demand Order');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('Would you like to post Demand Order');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      success();
    }, 1000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/demand-list/upload");
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        scroll={{ y: 400 }}  // Set the height of the table here
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px'  }}>
        <Button type="primary"  icon={<ArrowLeftOutlined />}
        onClick={handleBack}
        >
      Back
    </Button>
        <Button type="primary" onClick={showModal}>
          Post Demand
        </Button>
        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>{modalText}</p>
        </Modal>
      </div>
    </div>
  );
};

export default App;
