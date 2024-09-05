import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  FilterOutlined,
  SearchOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Dropdown, Breadcrumb,theme  } from 'antd';
import Upload from './Upload';
import DemandT from './DemandT';
import Demandold from './Demandold';
import { useNavigate, Route, Routes } from 'react-router-dom';

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
        </div>

        <div className="demo-logo-vertical" />

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
                justifyContent:'flex-end'
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
            { href: '', title: 'Application Center' },
            { type: 'separator' },
            { href: '', title: 'Application List' },
            { type: 'separator' },
            { title: 'An Application' },
          ]}
        />
        <Content
          style={{
            margin: '10px 8px',
            padding: 24,
            minHeight: 680,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/upload" element={<Upload />} />
            <Route path="/demandT" element={<DemandT />} />
            <Route path="/demandold" element={<Demandold />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DemandList;
