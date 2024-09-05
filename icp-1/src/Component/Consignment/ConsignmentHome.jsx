import React, { useState } from 'react';
import { Modal, Button, Select, Typography, Form, Input } from 'antd';
import 'antd/dist/reset.css'; 
import Consinav from './Consinav';
import { useNavigate } from 'react-router-dom';


// ---------------------------------------------------Consignment Pop  Start Here 

const { Option } = Select;
const { Text } = Typography;

const ConsignmentHome = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/consignment/consitable");
  };
  
  return (
    <div>
      <Modal
        title="Create New Consignment"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="confirm" type="primary" onClick={handleOk}>
            Confirm
          </Button>,
        ]}
        width={500}
      >
        <Form layout="vertical">
          <Form.Item label="Consignment Details" style={{ marginBottom: 16 }}>
            <Text>Consignment For</Text>
            <Input placeholder="Enter consignment name" />
          </Form.Item>

          <Form.Item label="Type" style={{ marginBottom: 16 }}>
            <Select placeholder="Select Type" style={{ width: '100%' }}>
              <Option value="dhl">DHL</Option>
              <Option value="fedex">FedEx</Option>
              <Option value="ups">UPS</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Consinav/>
    </div>

  // ---------------------------------------------------Consignment Pop  End Here

  );
};

export default ConsignmentHome;
