import React from 'react';
import { Link ,useHistory,Redirect} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Auth/authSlice';
import { Layout, Menu, Breadcrumb,Button } from 'antd';
const { Item,SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function Navbar() {
  let history = useHistory();
  const dispatch = useDispatch();

  function logOut() {
    dispatch(logout());
    history.push("/login");
  }

  return (
    <>
     <Header>
      {/* <div className="logo" /> */}
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/dashboard">Dashboard</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/all-process">All Process</Link></Menu.Item>
        <Menu.Item key="3">Departments</Menu.Item>
        <Menu.Item key="4">User Roles</Menu.Item>
        <Menu.Item key="5">Manage Users</Menu.Item>
        <Menu.Item key="6">Sub Admin</Menu.Item>
        <Menu.Item key="/login" onClick={() => { logOut()}} style={{position:'absolute',right:0}}> <Button  style={{border:'1px solid #000',color:"#000"}} ghost>Log Out</Button></Menu.Item>
      </Menu>

      {/* <Link to="/login"> <Button  style={{border:'1px solid #000',color:"#000"}} ghost>Log Out</Button></Link> */}
      
    </Header>
    {/* <Header className="header">
      <div className="logo" /><span style={{fontSize:25,fontWeight:700}}>BPMS</span>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Item key="/login" align="right">
        <Button onClick={logOut} style={{border:'1px solid #000',color:"#000"}} ghost>Log Out</Button>
      </Item>
      </Menu>
    </Header> */}
    </>
  );
}
