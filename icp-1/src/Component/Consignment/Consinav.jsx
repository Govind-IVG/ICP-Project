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
import { Button, Layout, Space, Menu, Dropdown, Breadcrumb, theme, message, Tooltip } from 'antd';
import ConsiTable from './ConsiTable';
import Createconsignment from './Createconsignment';
import { useNavigate, Route, Routes } from 'react-router-dom';

// ---------------------------------------------------Nav,Header Start Here

const { Header, Sider, Content } = Layout;

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

// ---------------------------------------------------Dropdown Array Start Here


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
    // danger: true,
  },
  {
    label: '18283648',
    key: '4',
    icon: <UserOutlined />,
    // danger: true,
    // disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

// ---------------------------------------------------Dropdown Array End Here

const Consinav = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Use the theme's token
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // ---------------------------------------------------Top Filter Array Start Here

  const filterMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'All',
        },
        {
          key: '2',
          label: 'Open',
        },
        {
          key: '3',
          label: 'Close',
        },
        {
          key: '4',
          label: 'Rejected',
        },
      ]}
    />
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/consignment/consitable");
  };
  // ---------------------------------------------------Top Filter Array End Here
  return (
    <>
      <Layout>
        {/*         -------------------------------------Side Bar div  Start Here */}
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ backgroundColor: 'white',height:'92vh' , overflowY: 'scroll' }} // Change sidebar color here
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
            <h4 style={{ fontSize: '20px', alignItems: 'center', padding: '5px', marginTop: '10px', fontWeight: '600' }}> {collapsed ? '' : 'Consignment No.'}</h4>
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
             
            ]}
          />
        </Sider>
        {/*         -------------------------------------Side Bar div  End Here */}
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
              {/* <Button
              icon={<UploadOutlined />}
              style={{
                marginLeft: '16px',
              }}
            >
              Upload
            </Button> */}
              <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ marginLeft: '16px' }}
                onClick={handleClick}
              >
                Add New
              </Button>

              <Dropdown menu={menuProps}>
                <Button style={{
                  marginLeft: '16px',
                }}>
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
              style={{
                marginLeft: '16px',
                display: 'flex',
                alignItems: 'right',
                justifyContent: 'flex-end',
              }}
            >
              Download
            </Button>
          </Header>

          {/*         -------------------------------------Header End Here */}

          {/*         -------------------------------------Location Showing Start Here */}
          <Breadcrumb
            separator=""
            style={{ marginTop: '8px', marginLeft: '8px' }}
          >
            <Breadcrumb.Item>Location</Breadcrumb.Item>
            <Breadcrumb.Separator>:</Breadcrumb.Separator>
            <Breadcrumb.Item>Consignment creation</Breadcrumb.Item>
            <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item>Number</Breadcrumb.Item>
            {/* <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item></Breadcrumb.Item> */}
          </Breadcrumb>
          {/* -------------------------------------Location Showing End Here */}

          {/* ---------------------------------Main Contect Start Here */}

          <Content
            style={{
              margin: '10px 8px',
              padding: 15,
            minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <Createconsignment/> */}
            {/* <ConsiTable /> */}
            <Routes>
              <Route path="/consitable" element={<ConsiTable />} />
              <Route path="/createconsignment" element={<Createconsignment />} />
            </Routes>
          </Content>
          {/* ---------------------------------Main Contect End Here */}

        </Layout>

      </Layout>
    </>
  );
};

export default Consinav;
