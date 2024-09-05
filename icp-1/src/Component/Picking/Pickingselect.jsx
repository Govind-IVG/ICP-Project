import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { RightOutlined, ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';


// ------------------------------------------------------------ Table Data Start Here

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
for (let i = 0; i < 6; i++) {
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



const Pickingselect = () => {
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

// -------------------------------------------------------------Table Data Start Here

  const handleNext = () => {
    console.log('Next button clicked');
  };

  // const success = () => {
  //   Modal.success({
  //     content: 'Demand Order Created - 1817648981',
  //   });
  // };

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Confirm with-out assgin User');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('');
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


  // ---------------------------------------------------------- User Dropdown Start Here 

  const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };


  // const handleBack = () => {
  //   navigate("/pickinghome");
  // };

  // const handleBack = () => {
  //   navigate("/pickinghome");
  // };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/picking-task/pickinghome");
  };

  // ---------------------------------------------------------------- User Dropdown End Here 


  return (
    <>
      
      {/* --------------------------------------------------------- Top Buttons Div Start Here  */}

      <div style={{ display: 'flex', justifyContent: 'space-between', }}>

        <Button type="primary" >
          Assign Task
        </Button>

        <Dropdown.Button
          menu={menuProps}
          style={{ marginLeft: '16px' }}
          buttonsRender={([leftButton, rightButton]) => [
            <Tooltip title="tooltip" key="leftButton">
              {leftButton}
            </Tooltip>,
            React.cloneElement(rightButton, {
              loading: true,
            }),
          ]}
        >
          User{<UserOutlined />}
        </Dropdown.Button>

      </div>

      {/* // --------------------------------------------------------- Top Buttons Div End Here */}

         {/* --------------------------------------------------------- Top Buttons Div Start Here  */}

      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>

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
          <Button type="primary" onClick={showModal}>
            Done
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
       {/* // --------------------------------------------------------- Top Buttons Div End Here  */}
    </>
  );
};

export default Pickingselect;
