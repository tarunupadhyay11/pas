import React from 'react';
import './style.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Container from '../Layout/Container';
import AdminDashboard from './Admin/Dashboard'
const { Header, Content, Footer } = Layout;

export default function Dashboard() {
  return (
    <>
   <Container>
   {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
   <div className="site-layout-content" style={{marginTop:5}}>
    <AdminDashboard/>
    </div>
  </Container>
    </>
  );
}
