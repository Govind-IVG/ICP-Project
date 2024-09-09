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
  { label: 'All', key: 'option1' },
  { label: 'New', key: 'option2' },
  { label: 'Old', key: 'option3' },
  { label: 'Rejected', key: 'option4' },
];

const items = [
  { key: '1', label: '123457' },
  { key: '2', label: '1234567' },
  { key: '4', label: '12345678' },
  { key: '5', label: '12345678' },
  { key: '6', label: '12345678' },
  { key: '7', label: '12345678' },
];

const handleMenuClick = (e) => {
  message.info(`Clicked on menu item: ${e.key}`);
};

const consitems = [
  { label: '18283645', key: '1', icon: <UserOutlined /> },
  { label: '18283646', key: '2', icon: <UserOutlined /> },
  { label: '18283647', key: '3', icon: <UserOutlined /> },
  { label: '18283648', key: '4', icon: <UserOutlined /> },
];

const Consinav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/consignment/consitable");
  };

  const menu = (
    <Menu
      items={consitems}
      onClick={handleMenuClick}
    />
  );


  //tests

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
              menu={{ items: SearchOptions }}
            >
              <Button style={{ width: '20%' }}>
                <Space>
                  <FilterTwoTone />
                </Space>
              </Button>
            </Dropdown>
          </div>

          <h4
          style={{
            fontSize: '20px',
            alignItems: 'center',
            padding: '0px 5px 5px',
            fontWeight: '600',
          }}
        >
          Consignment No.
        </h4>

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={filteredItems}
          />
        </Sider>

        <Layout>
          {/*         -------------------------------------Header Start Here */}
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

              <Dropdown overlay={menu}>
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
            {/* <Breadcrumb.Separator>/</Breadcrumb.Separator> */}
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
