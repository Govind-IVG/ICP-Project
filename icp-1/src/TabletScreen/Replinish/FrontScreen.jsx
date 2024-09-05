import React from 'react';
import { Layout, Button, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Content } = Layout;

const FrontScreen = () => {
  const items = [
    {
      key: 'sub1',
      icon: <MailOutlined />,
      label: 'Navigation One',
      children: [
        {
          key: '1-1',
          label: 'Item 1',
          type: 'group',
          children: [
            {
              key: '1',
              label: 'Option 1',
            },
            {
              key: '2',
              label: 'Option 2',
            },
          ],
        },
        {
          key: '1-2',
          label: 'Item 2',
          type: 'group',
          children: [
            {
              key: '3',
              label: 'Option 3',
            },
            {
              key: '4',
              label: 'Option 4',
            },
          ],
        },
      ],
    }
  ];

  const onClick = (e) => {
    console.log('click', e);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        style={{
          display: 'flex',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '256px',
            marginRight: '20px',
          }}
        >
          <Menu
            onClick={onClick}
            style={{
              width: '100%',
            }}
            mode="vertical"
            items={items}
          />
        </div>
        
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2px', // Reduced gap
            alignItems: 'center',
          }}
        >
          <Button
            className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
            size="large"
            style={{ width: '25%' }} // Make buttons fill the grid cell
          >
            Replenish
          </Button>
          <Button
            className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
            size="large"
            style={{ width: '25%' }} // Make buttons fill the grid cell
          >
            Labeling
          </Button>
          <Button
            className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
            size="large"
            style={{ width: '25%' }} // Make buttons fill the grid cell
          >
            Move
          </Button>
          <Button
            className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
            size="large"
            style={{ width: '25%' }} // Make buttons fill the grid cell
          >
            Packing
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default FrontScreen;
