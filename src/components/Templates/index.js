import React from 'react';
import './style.css';
import { Layout, Menu, Breadcrumb,Table , Button, Space,Input,Row,Col,Divider,Tabs} from 'antd';
import { PlusOutlined,SearchOutlined ,MoreOutlined } from '@ant-design/icons';
import Container from '../Layout/Container';
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  // if (index === 4) {
  //   obj.props.colSpan = 0;
  // }
  return obj;
};

const columns = [
  {
    title: 'Template Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      return {
        children: <p style={{marginBottom:0}}>{text}</p>,
        props: {
          //colSpan: 5,
        },
      };
    },
  },
  {
    title: 'No of Stages',
    dataIndex: 'id',
    render: renderContent,
  },
  {
    title: 'Created On',
    dataIndex: 'created_on',
    render: renderContent,
  },
  {
    title: 'Created By',
    dataIndex: 'created_by',
    render: renderContent,
  },
  {
    title: 'Last Updated on',
    dataIndex: 'last_updated_on',
    render: renderContent,
  },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => <a style={{color:'#c5c7cd',fontSize:25}}><MoreOutlined /></a>,
  },
];

const data = [
  {
    key: '1',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '2',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '3',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '4',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '5',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '6',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '7',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '8',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '9',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '10',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '11',
    name: 'DIT Seen Stamp 1',
    id: '4',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    last_updated_on: '6 Jul 2021,11:30 PM',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
];

const columnsDraft = [
  {
    title: 'Template Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      return {
        children: <p style={{marginBottom:0}}>{text}</p>,
        props: {
          //colSpan: 5,
        },
      };
    },
  },
  {
    title: 'Created On',
    dataIndex: 'created_on',
    render: renderContent,
  },
  {
    title: 'Created By',
    dataIndex: 'created_by',
    render: renderContent,
  },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => <a style={{color:'#c5c7cd',fontSize:25}}><MoreOutlined /></a>,
  },
];

const dataDraft = [
  {
    key: '1',
    name: 'DIT Seen Stamp 1',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
  {
    key: '2',
    name: 'DIT Seen Stamp 1',
    created_on: '6 Jul 2021,11:30 PM',
    created_by: 'John Doe (Sub Admin)',
    subject: 'Subject do you want to have seen stamp for this process?Do you want to have seen stamp for this process?Do you want to have seen stamp for this process?',
  },
];


const ntop = "none";
const nbottom = "bottomCenter";
export default function ManageTemplates() {
  return (
    <>
   <Container>
   <Breadcrumb style={{ margin: '16px 0',paddingLeft:50,marginBottom:0 }} separator=">">
        <Breadcrumb.Item>All Process</Breadcrumb.Item>
        <Breadcrumb.Item>Manage Template</Breadcrumb.Item>
      </Breadcrumb>
   {/* <div className="site-layout-content" style={{marginTop:35,border: '1px solid #dfe0eb'}}> */}
   {/* <div className="site-layout-content" style={{marginTop:35,marginBottom:35,border:"1px solid #dfe0eb"}}> */}
   <div className="site-layout-content" style={{marginTop:0,paddingTop:0}}>
     
  <div style={{padding:24,paddingTop:16}}>

  <Tabs defaultActiveKey="1" tabBarStyle={{borderTop:'1px solid #dfe0eb',borderLeft:'1px solid #dfe0eb',borderRight:'1px solid #dfe0eb',padding:16,margin:0}} onChange={callback}>
    <TabPane tab={<p className="tabclass">Completed Template (10)</p>} key="1" style={{borderTop:'none',color:'#000'}}>
     
    <Space style={{ padding: 16,width:'100%',borderLeft:'1px solid #dfe0eb',borderRight:'1px solid #dfe0eb' }} size="large">
      <Row style={{width:'100%'}}>
      <Col span="10">
      {/* <Search placeholder="Search process"  size="large"  /> */}
      <Input placeholder="Search process"  size="large" suffix={<SearchOutlined />}  />
      </Col>
      <Col span="14" style={{textAlign:'right'}}>
      
      </Col>
      </Row>   
    </Space>

    <Table columns={columns} 
    pagination={{ position: [ntop, nbottom],size:'small',defaultPageSize: 10, hideOnSinglePage: true }}
    expandable={{
      expandedRowRender: record => <div style={{paddingLeft:50}}><p style={{color: '#848484',marginBottom:5}}>Subject</p><p style={{ margin: 0,fontWeight:'normal',color: '#40414c' }}>{record.subject}</p></div>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data} bordered />

    </TabPane>
    <TabPane tab={<p className="tabclass">Draft Template (2)</p>}  key="2">
    <Space style={{ padding: 16,width:'100%',borderLeft:'1px solid #dfe0eb',borderRight:'1px solid #dfe0eb' }} size="large">
      <Row style={{width:'100%'}}>
      <Col span="10">
      {/* <Search placeholder="Search process"  size="large"  /> */}
      <Input placeholder="Search process"  size="large" suffix={<SearchOutlined />}  />
      </Col>
      <Col span="14" style={{textAlign:'right'}}>
      
      </Col>
      </Row>   
    </Space>

    <Table columns={columnsDraft} 
    pagination={{ position: [ntop, nbottom],size:'small',defaultPageSize: 10, hideOnSinglePage: true }}
    expandable={{
      expandedRowRender: record => <div style={{paddingLeft:50}}><p style={{color: '#848484',marginBottom:5}}>Subject</p><p style={{ margin: 0,fontWeight:'normal',color: '#40414c' }}>{record.subject}</p></div>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={dataDraft} bordered />
    </TabPane>
  </Tabs>


{/*  
  <Space style={{ padding: 16,width:'100%',borderLeft:'1px solid #dfe0eb',borderRight:'1px solid #dfe0eb' }} size="large">
    <Row style={{width:'100%'}}>
    <Col span="10">
    <Input placeholder="Search process"  size="large" suffix={<SearchOutlined />}  />
    </Col>
    <Col span="14" style={{textAlign:'right'}}>
    
    </Col>
    </Row>
  
          
        </Space>
  <Table columns={columns} 
  pagination={{ position: [ntop, nbottom],size:'small' }}
 
  dataSource={data} bordered /> */}
  </div>
 
  </div>
  </Container>
    </>
  );
}
