import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function Sidebar() {
  return (
    <>
    <Sider
    className="site-layout-background"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" >
          Dashboard
        </Menu.Item>
        <Menu.Item key="2">
          All Process
        </Menu.Item>
        <Menu.Item key="3" >
          Departments
        </Menu.Item>
        <Menu.Item key="4" >
          User Roles
        </Menu.Item>
        <Menu.Item key="5" >
         Manage Users
        </Menu.Item>
        <Menu.Item key="6" >
         Sub-Admin
        </Menu.Item>
      </Menu>
    </Sider>
    </>
  );
}
