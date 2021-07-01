import React, { Component } from 'react';
import './style.css';
import { 
    Layout, Menu,Card,Row,Col,Table, Input, Button, Space,Upload, message,Modal,Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Rate,
    Checkbox,Divider, } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  InboxOutlined,
  ArrowUpOutlined,
  FilePdfOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
const { Header, Sider, Content } = Layout;
const { Option } = Select;

const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };


class DocumentForm extends React.Component {
  state = {
    collapsed: false,
    searchText: '',
    searchedColumn: '',
    isModalVisible:false,
  };

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

   handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

   handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  render() {

    return (
      <Layout  className="dash-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >BPMS</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="menu">
            <Menu.Item key="1" >
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" >
              All Processes
            </Menu.Item>
            <Menu.Item key="3" >
              All Users
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0,background: "#eeeeee" }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}

<Button  href="/login" style={{float:'right',margin: 15}}>Log Out</Button>
          </Header>
          <Content
            className="site-layout-background"
            style={{
            //   margin: '24px 16px',
              padding: 24,
              minHeight: "100%",
              height:"100%"
            }}
          >
            <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={this.onFinish}
      
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
      }}
    >
      <Form.Item >
        <span className="ant-form-text" className="heading">Initial Process</span>
      </Form.Item>
      <Row style={{width:'100%',marginBottom:30}}>
              <Col span="8">
              <span className="ant-form-text" className="heading"><FilePdfOutlined style={{fontSize:30}} /> Document ID: DOC_0011</span>

              <span style={{borderRight:'1px solid #000',paddingRight:25}}>&nbsp;</span>
              </Col>
              <Col span="8">
              <span className="ant-form-text" className="heading" style={{paddingLeft:20}}>Process ID: BPMS_0011</span>
              <span style={{borderRight:'1px solid #000',paddingRight:25}}>&nbsp;</span>
              </Col>
              <Col span="8">
              <span className="ant-form-text" className="heading">Added On: 20/05/2021</span>
              </Col>
          </Row>

          <Form.Item name="radio-group" label="Label Document as" labelAlign='left'>
        <Radio.Group>
          <Radio value="a">Confidential</Radio>
          <Radio value="b">Restricted</Radio>
          <Radio value="c">Top-Secret</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="radio-group" label="Priority" labelAlign='left'>
        <Radio.Group>
          <Radio value="a">Urgent</Radio>
          <Radio value="b">Very High</Radio>
          <Radio value="c">High</Radio>
          <Radio value="c">Normal</Radio>
          <Radio value="c">Low</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="radio-group" label="Restrict Download" labelAlign='left'>
        <Radio.Group>
          <Radio value="a">Yes</Radio>
          <Radio value="b">No</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="select"
        label="Select Process template"
        labelAlign='left'
        hasFeedback
        rules={[
          {
            // required: true,
            message: 'Please select your template!',
          },
        ]}
      >
        <Select placeholder="Please select your template" defaultValue="Recruitment request">
          <Option value="Recruitment request" selected>Recruitment request</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Process Name"
        name="processname"
        labelAlign='left'
        placeholder="Enter Process Name"
        rules={[{  message: 'Please input your process name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'introduction']} label="Description" labelAlign='left'>
        <Input.TextArea />
      </Form.Item>

      <Divider />

      {/* <Form.Item  labelAlign='left'>
        <span className="ant-form-text"  ><strong>Stage 1:</strong> Approver</span>
      </Form.Item> */}

      {/* <Row>
              <Col spane="12" style={{width:'50%'}}>
                  <strong>Select Department :</strong> &nbsp;
              <Select placeholder="Please select your department" defaultValue="Air Intelligence">
                <Option value="Air Intelligence" selected>Air Intelligence</Option>
                </Select>
              </Col>
              <Col spane="12" style={{width:'50%'}}>
              <strong>Assign To :</strong> &nbsp;
              <Select placeholder="Please select your department" defaultValue="John Doe">
                <Option value="John Doe" selected>John Doe</Option>
                </Select>
              </Col>
          </Row> */}

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
         <Button href="/dashboard" style={{marginLeft:15,backgroundColor:'red',color:'#fff',fontSize:15}}>
          Cancel
        </Button>

        <Button type="success" htmlType="submit" style={{marginLeft:15,backgroundColor:'green',color:'#fff',fontSize:15}} onClick={this.showModal}>
          Submit
        </Button>

        <Modal className="docmodel" title="Success" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
        <p style={{fontSize:20,textAlign:'center',fontWeight:500}}>The Approver has been notified about "Recruitment Request" Process</p>
        
            
        <p style={{fontSize:20,textAlign:'center',fontWeight:500}}> <CheckOutlined /></p>
        
        <p style={{fontSize:20,textAlign:'center',fontWeight:500,borderTop:"1px solid #000"}}>
        <Button href="/dashboard" style={{backgroundColor:'#fff',color:'#000',border:'none',fontSize:20,fontWeight:500}}>
        Return to Dashboard
        </Button></p>
            </Modal>
      </Form.Item>
    </Form>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DocumentForm;