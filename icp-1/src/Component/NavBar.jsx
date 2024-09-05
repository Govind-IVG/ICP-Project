import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, Button, Avatar, Space, Dropdown } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const items1 = [
  { key: '/', label: 'Home' },
  { key: '/demand-list', label: 'Demand Order' },
  { key: '/consignment', label: 'Consignment' },
  { key: '/picking-task', label: 'Picking Task' },
  { key: '/packing-item', label: 'Packing Item' },
  { key: '/dispatched-order', label: 'Dispatched Order' },
  { key: '/profile', label: 'Profile' },
  { key: '/settings', label: 'Settings' },
  { key: '/work-status', label: 'Work Status' }
];

const Home = () => {
  const { Header } = Layout;

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {items1.map(item => (
            <Menu.Item key={item.key}>
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>

        <Space>
          <Dropdown overlay={menu} trigger={['click']}
          overlayStyle={{ width: 220 }} // Set your desired width here
          >
            <Avatar size={40} shape="square" src="https://img.freepik.com/free-photo/black-man-posing_23-2148171639.jpg" />
          </Dropdown>
        </Space>
      </Header>
    </>
  );
}

export default Home;
