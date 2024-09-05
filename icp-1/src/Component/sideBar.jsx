import React, { useState } from 'react';
import { FiCodesandbox } from "react-icons/fi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { GiCardPickup } from "react-icons/gi";
import { FaNotesMedical } from "react-icons/fa6";
import { FaBoxesPacking } from "react-icons/fa6";
import { RxLapTimer } from "react-icons/rx";
import { Avatar } from 'primereact/avatar';
import { Link, Route, Routes } from 'react-router-dom';
import DemandList from './Demand/DemandList.jsx';
import {
    DesktopOutlined,
    HomeOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import Demand from './Demand/Demand';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, link = '', children) {
    return {
        key,
        icon,
        children,
        label: link ? <Link to={link}>{label}</Link> : label,
    };
}

const items = [
    getItem('Home', '1', <HomeOutlined />, '/home'),
    getItem('Demand Order', '2', <FaNotesMedical />, '/demand-order'),
    getItem('Consignment', '3', <FiCodesandbox />, '/consignment'),
    getItem('Picking Task', '4', <GiCardPickup />, '/picking-task'),
    getItem('Packing Item', '5', <FaBoxesPacking />, '/packing-item'),
    getItem('Dispatched Order', '6', <FaTruckArrowRight />, '/dispatched-order'),
    getItem('Work Status', 'sub1', <RxLapTimer />, null, [
        getItem('Red', '7', null, '/work-status/red'),
        getItem('Green', '8', null, '/work-status/green'),
        getItem('Yellow', '9', null, '/work-status/yellow'),
    ]),
    getItem('Profile', '10', <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDehpIQsG7oX3T0R0pduO_rFDEKwtz0pkCw&s" size="xlarge" shape="circle" />, '/profile'),
    getItem('Settings', 'sub2', <TeamOutlined />, null, [
        getItem('Team 1', '11', null, '/settings/team1'),
        getItem('Team 2', '12', null, '/settings/team2'),
    ]),
];

function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <DemandList/>
            <Layout>

               
                <Content style={{ margin: '0 16px' }}>
                   
                    <div
                        style={{
                            padding: 24,
                            minHeight: 0,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Routes>
                            <Route path="/demand-list" element={<DemandList />} />
                          
                        </Routes>
                    </div>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>
                    ICP ©{new Date().getFullYear()} Created by Innovestigia
                </Footer> */}
            </Layout>
        </Layout>
    );
}

export default SideBar;
