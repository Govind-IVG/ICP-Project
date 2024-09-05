import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  FilterOutlined,
  SearchOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Input, Button, Layout, Menu, Dropdown, Breadcrumb, theme } from 'antd';
import Upload from './Upload';
import DemandT from './DemandT';
import Demandold from './Demandold';
import { useNavigate, Route, Routes } from 'react-router-dom';
import ConsignmentHome from '../Consignment/ConsignmentHome';
import Consinav from '../Consignment/Consinav';
import Pickingnav from '../Picking/Pickingnav';
import Searc from '../Searc';

const { Header, Sider, Content } = Layout;

const DemandList = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Use the theme's token
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
        <div className="demo-logo-vertical"></div>
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
            padding: '5px',
            marginTop: '10px',
            fontWeight: '600',
          }}
        >
          {collapsed ? '' : 'Demand No.'}
        </h4>
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
            { key: '6', label: '18224570' },
           
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
