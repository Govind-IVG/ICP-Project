import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FilterTwoTone,
  DownloadOutlined,
  PlusOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Button, Layout, Space, Menu, Dropdown, Breadcrumb, theme, Input, message } from 'antd';
import ConsiTable from './ConsiTable';
import Createconsignment from './Createconsignment';
import { useNavigate, Route, Routes } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const SearchOptions = [
  { label: 'All', key: 'all' },
  { label: 'New', key: 'new' },
  { label: 'Old', key: 'old' },
  { label: 'Rejected', key: 'rejected' },
];

const items = [
  { key: '1', label: '123457', type: 'new' },
  { key: '2', label: '1234567', type: 'old' },
  { key: '4', label: '12345678', type: 'rejected' },
  { key: '5', label: '12345678', type: 'new' },
  { key: '6', label: '12345678', type: 'old' },
  { key: '7', label: '12345678', type: 'rejected' },
];

const Consinav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // New state to store selected filter

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'all' || item.type === filter)
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/consignment/consitable");
  };

  const handleMenuClick = (e) => {
    setFilter(e.key);
  };

  const getItemStyle = (type) => {
    switch (type) {
      case 'new':
        return { color: 'green' };
      case 'old':
        return { color: 'blue' };
      case 'rejected':
        return { color: 'red' };
      default:
        return {};
    }
  };

  return (
    <>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ backgroundColor: 'white', height: '92vh', overflowY: 'scroll' }}
        >
          <div style={{ padding: '24px 6px 10px' }}>
            <Input
              placeholder="Search"
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: '80%' }}
            />
            <Dropdown
              overlay={
                <Menu
                  items={SearchOptions}
                  onClick={handleMenuClick}
                />
              }
            >
              <Button style={{ width: '20%' }}>
                <Space>
                  <FilterTwoTone />
                </Space>
              </Button>
            </Dropdown>
          </div>

          <h4 style={{ fontSize: '20px', alignItems: 'center', padding: '5px', marginTop: '10px', fontWeight: '600' }}>
            {collapsed ? '' : 'Consignment No.'}
          </h4>

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={filteredItems.map(item => ({
              ...item,
              style: getItemStyle(item.type), // Apply different colors based on item type
            }))}
          />
        </Sider>

        <Layout>
          {/* -------------------------------------Header Start Here */}
          <Header
            style={{
              padding: '0 16px',
              background: colorBgContainer,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ marginLeft: '16px' }}
                onClick={handleClick}
              >
                Add New
              </Button>

              <Dropdown overlay={Menu}>
                <Button style={{ marginLeft: '16px' }}>
                  <Space>
                    Demand No
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              style={{ marginLeft: '16px', display: 'flex', alignItems: 'right', justifyContent: 'flex-end' }}
            >
              Download
            </Button>
          </Header>

          <Breadcrumb separator="" style={{ marginTop: '8px', marginLeft: '8px' }}>
            <Breadcrumb.Item>Location</Breadcrumb.Item>
            <Breadcrumb.Separator>:</Breadcrumb.Separator>
            <Breadcrumb.Item>Consignment creation</Breadcrumb.Item>
            <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item>Number</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            style={{
              margin: '10px 8px',
              padding: 15,
              minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/consitable" element={<ConsiTable />} />
              <Route path="/createconsignment" element={<Createconsignment />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Consinav;
