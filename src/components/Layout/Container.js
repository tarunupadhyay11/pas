import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link ,useHistory} from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const Container = ({children}) => {
 return (
  <Layout className="layout">
    <Navbar />
    {/* <Layout> */}
    {/* <Sidebar/> */}
    
    {/* <Layout style={{ padding: '0 24px 24px' }}> */}
         {/* <Breadcrumb style={{ margin: '16px 0' }}>
       <Breadcrumb.Item>Home</Breadcrumb.Item>
       <Breadcrumb.Item>List</Breadcrumb.Item>
       <Breadcrumb.Item>App</Breadcrumb.Item>
     </Breadcrumb> */}
    {/* <Content
       className="site-layout-background"
       style={{
         padding: "10px 24px 24px",
         margin: 0,
       }}
     > */}
 <Content style={{ padding: '0 50px' }}>
   {children}
   </Content>
   {/* </Layout> */}
    {/* </Layout> */}
   {/* <div>footer</div> */}
   {/* <Footer style={{ textAlign: 'center' }}>©2021</Footer> */}
 </Layout>
);
} 

export default Container;
