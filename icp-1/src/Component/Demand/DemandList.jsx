import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  FilterOutlined,
  FilterTwoTone,
  SearchOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Input, Button, Layout, Menu, Dropdown, Breadcrumb, theme,Space } from 'antd';
import Upload from './Upload';
import DemandT from './DemandT';
import Demandold from './Demandold';
import { useNavigate, Route, Routes } from 'react-router-dom';
import ConsignmentHome from '../Consignment/ConsignmentHome';
import Consinav from '../Consignment/Consinav';
import Pickingnav from '../Picking/Pickingnav';
import Searc from '../Searc';
const handleMenuClick = (e) => {
  console.log('click', e);
};
const { Search } = Input;
const SearchOptions = [
  {
    label: 'All',
    key: 'option1',
  },
  {
    label: 'New',
    key: 'option2',
  },
  {
    label: 'Old',
    key: 'option3',
  },
  {
    label: 'Rejected',
    key: 'option4',
  },
];
const items = [
  { key: '1', label: '123457' },
  { key: '2', label: '1234567' },
  { key: '4', label: '12345678' },
  { key: '5', label: '12345678' },
  { key: '6', label: '12345678' },
  { key: '7', label: '12345678' },
];
const searchDropdownProps = {
  items: SearchOptions,
  onClick: handleMenuClick,
};

const { Header, Sider, Content } = Layout;

const DemandList = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Use the theme's token
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterMenu = (
    <Menu
      items={[
        { key: '1', label: 'All' },
        { key: '2', label: 'Open' },
        { key: '3', label: 'Close' },
        { key: '4', label: 'Rejected' },
      ]}
    />
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/demand-list/upload");
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-file.ext'; // Replace with the actual path to your file
    link.download = 'filename.ext'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: 'white' , height:'92vh' , overflowY: 'scroll' }} // Change sidebar color here
      >
        <div style={{ padding: '24px 6px 10px', }}>
            <Input
              placeholder="Search"
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: '80%' }}
            />
            <Dropdown menu={searchDropdownProps}>
              <Button style={{ width: '20%' }}>
                <Space>
                 <FilterTwoTone />
                </Space>
              </Button>
            </Dropdown>
        </div>


        {/* <div className="demo-logo-vertical"></div> */}
            {/* <div style={{ display: 'flex',  alignItems: 'center', marginTop: '15px', marginLeft:'20px' }}>
              {!collapsed && (
                <>
                  <Input placeholder="Search" style={{ width: 100, marginBottom: '5px',padding: '5px' }} />
                  <Button
                    // icon={<SearchOutlined />}
                    style={{
                      width: 50,
                      height: 35,
                      // borderRadius: '50%',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft:'12px',
                    }}
                    
           > Search</Button>
                
                </>
              )}
            </div> */}
        <h4
          style={{
            fontSize: '20px',
            alignItems: 'center',
            padding: '0px 5px 5px',
            fontWeight: '600',
          }}
        >
          Demand No.
        </h4>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={filteredItems}
          
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
              icon={<UploadOutlined />}
              style={{
                marginLeft: '16px',
              }}
              onClick={handleClick}
            >
              Upload
            </Button>
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
            onClick={handleDownload}
          >
            Download
          </Button>
        </Header>

        <Breadcrumb
          separator=""
          style={{ marginTop: '8px', marginLeft: '8px' }}
          items={[
            { title: 'Location' },
            { type: 'separator', separator: ':' },
            { href: '', title: 'Demand ' },
            { type: 'separator' },
            { href: '', title: 'Table' },
            { type: 'separator' },
            { title: '' },
          ]}
        />
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
            <Route path="/upload" element={<Upload />} />
            <Route path="/demandT" element={<DemandT />} />
            <Route path="/demandold" element={<Demandold />} />
            <Route path="/consignmentHome" element={<ConsignmentHome />} />
            <Route path="/consinav" element={<Consinav />} />
            <Route path="/pickingnav" element={<Pickingnav />} />
          </Routes>
          {/* <Consinav/> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DemandList;
