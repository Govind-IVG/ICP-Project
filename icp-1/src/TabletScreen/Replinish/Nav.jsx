import React from 'react'
import { Layout, Button } from 'antd';


const { Header, Content } = Layout;

const Nav = () => {
  return (
    <>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#8B9025', // Light green color
          height: '40px', // Reduced header height
        }}
      >
        <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', margin: 0 }}>LMC</h1>
      </Header>
    
    </>
  )
}

export default Nav