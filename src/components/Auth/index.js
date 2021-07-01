import React, { Component,Fragment, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import logo from '../../logo.svg'
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, authSelector, clearState } from './authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { Layout,Form, Input, Button, Checkbox,Row,Col,Radio,Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const {ReactDraggable: Draggable, ReactDOM} = window;
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 15,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 15,
  },
};

const tailForgotLayout = {
  wrapperCol: {
    offset: 16,
    span: 15,
  },
}

const Login = () => {
  const [value, setValue] = React.useState(3);
  const dispatch = useDispatch();
  let history = useHistory()

  const { isFetching, isSuccess, isError, errorMessage,user } = useSelector(
    authSelector
  );

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      toast.success('Logged in successfully');
     dispatch(clearState());
     history.push('/dashboard');
      
    }
  }, [isError, isSuccess]);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onFinish = (values) => {
    // toast.success('Successfully toasted!')
    console.log('Success:', values);
    console.log(values.username)
    let data = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  };
  localStorage.setItem('usertype', value);
    dispatch(loginUser(data));
    // if(value == 3 || value==2){
    // localStorage.setItem('usertype', value);
    // history.push('/dashboard');
    // }
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="layout">
      <Header className="login-header">

      <Row>
      <Col  span={4} > </Col>
      <Col  span={16} >
      <span className="login-span">I`m logging in as:</span>  
        &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio.Group onChange={onChange} value={value}>
      <Radio value={3}>Clerk</Radio>
      <Radio value={2}>Approver Staff</Radio>
      <Radio value={1}>Administrator</Radio>
      </Radio.Group>
      </Col>
      <Col  span={4} >

      </Col>
      </Row>

        <h1 className="header-h1">Welcome to Process Automation System</h1>
      <img src={logo} className="login-logo" alt="logo" />
      </Header>
      <Content className="content">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Row>
    <Col  span={7} >
      
    </Col>
    <Col  span={10} className="login-container-col">
    <Form
    className="login-form"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please enter your username!',
          },
        ]}
      >
        <Input className="login-input" allowClear={true} autoComplete="off" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your password!',
          },
        ]}
      >
        <Input.Password value="" autoComplete="off"  className="login-input"/>
      </Form.Item>

      <Form.Item  {...tailForgotLayout}>
      <a href="#" className="forgot-a" >
      Forgot Password
    </a>
    </Form.Item>


      <Form.Item {...tailLayout}>
        <Button  htmlType="submit" className="login-btn">
          Login
        </Button>
      </Form.Item>
    </Form>
    </Col>
    <Col  span={7} >
     
    </Col>
  </Row>
  
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
   
  );
};

export default Login;