import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  FilterOutlined,
  SearchOutlined,
  DownloadOutlined,
  PlusOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Button, Layout, Space, Menu, Dropdown, Breadcrumb, theme, message, Radio } from 'antd';
import Pickinghome from './Pickinghome';
import Createconsignment from '../Consignment/Createconsignment';
import Pickingselect from './Pickingselect';
import { useNavigate, Route, Routes } from 'react-router-dom';



const { Header, Sider, Content } = Layout;

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
    label: '18283645',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '18283646',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '18283647',
    key: '3',
    icon: <UserOutlined />,
  },
  {
    label: '18283648',
    key: '4',
    icon: <UserOutlined />,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};


const Pickingnav = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Use the theme's token
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const filterMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'All',
        },
        {
          key: '2',
          label: 'Assgin',
        },
        {
          key: '3',
          label: 'Unassgin',
        },
       
      ]}
    />
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/picking-task/pickinghome");
  };
  return (
    <>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ backgroundColor: 'white' }} // Change sidebar color here
        >
          <div style={{ padding: '16px', textAlign: 'left' }}>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              style={{
                marginLeft: '10px',
              }}
            >
              {collapsed ? '' : 'Search'}
            </Button>
            <h4 style={{ fontSize: '20px', alignItems: 'center', padding: '5px', marginTop: '10px', fontWeight: '600' }}> {collapsed ? '' : 'Picking No.'}</h4>
          </div>

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              { key: '1', label: '18224565' },
              { key: '2', label: '18224566' },
              { key: '3', label: '18224567' },
              { key: '4', label: '18224568' },
              { key: '5', label: '18224569' },
              { key: '6', label: '18224571' },
              { key: '6', label: '18224572' },
              { key: '6', label: '18224573' },
              { key: '6', label: '18224574' },
              { key: '6', label: '18224575' },
              { key: '6', label: '18224576' },
              { key: '6', label: '18224577' },
              { key: '6', label: '18224578' },
              { key: '6', label: '18224579' },
            ]}
          />
        </Sider>
        <Layout>
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
               <Dropdown overlay={filterMenu} placement="bottomRight" trigger={['click']}>
              <Button
                type="default"
                icon={<FilterOutlined />}
                style={{
                  marginLeft: '16px',
                }}
              >
                Filter
              </Button>
            </Dropdown>

              <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ marginLeft: '16px' }}
                onClick={handleClick}
              >
                Add New
              </Button>

              <Dropdown menu={menuProps}>
                <Button style={{ marginLeft: '16px' }}>
                  <Space>
                   Consignment
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
           

              <Button
                type="primary"
                icon={<DownloadOutlined />}
                style={{
                  marginLeft: '16px',
                  display: 'flex',
                  alignItems: 'right',
                  justifyContent: 'flex-end',
                }}
              >
                Download
              </Button>
            </div>
          </Header>
          <Breadcrumb
            separator=""
            style={{ marginTop: '8px', marginLeft: '8px' }}
          >
            <Breadcrumb.Item>Location</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              margin: '10px 8px',
              padding: 24,
              minHeight: 580,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <Routes>
              <Route path="/pickinghome" element={<Pickinghome/>} />
              <Route path="/pickingselect" element={<Pickingselect />} />
            </Routes>
            {/* <Pickinghome />
            <Pickingselect /> */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Pickingnav;
