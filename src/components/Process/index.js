import React from 'react';
import './style.css';
import { Layout, Menu, Breadcrumb,Table , Button, Space,Input,Row,Col,Divider} from 'antd';
import { PlusOutlined,SearchOutlined  } from '@ant-design/icons';
import { Link ,useHistory,Redirect} from "react-router-dom";
import Container from '../Layout/Container';
const { Header, Content, Footer } = Layout;
const { Search } = Input;
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
    title: 'Process Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      return {
        children: <a>{text}</a>,
        props: {
          //colSpan: 5,
        },
      };
    },
  },
  {
    title: 'ID',
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
];

const data = [
  {
    key: '1',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '2',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '3',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '4',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '5',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '6',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '7',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '8',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '9',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '10',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
  {
    key: '11',
    name: 'DIT Seen Stamp 1',
    id: 'SS_001',
    created_on: '1 Jul 2021',
    created_by: 'John Doe',
  },
];
const ntop = "none";
const nbottom = "bottomCenter";
export default function AllProcess() {
  return (
    <>
   <Container>
   {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
   {/* <div className="site-layout-content" style={{marginTop:35,border: '1px solid #dfe0eb'}}> */}
   {/* <div className="site-layout-content" style={{marginTop:35,marginBottom:35,border:"1px solid #dfe0eb"}}> */}
   <div className="site-layout-content" style={{marginTop:5}}>
  <div style={{padding:24,paddingTop:16}}>
  <h2 style={{paddingLeft:16,paddingTop:20,borderTop:'1px solid #dfe0eb',borderLeft:'1px solid #dfe0eb',borderRight:'1px solid #dfe0eb',marginBottom:0}}>All Process (10)</h2>
  <Space style={{ padding: 16,width:'100%',borderLeft:'1px solid #dfe0eb',borderRight:'1px solid #dfe0eb' }} size="large">
    <Row style={{width:'100%'}}>
    <Col span="10">
    {/* <Search placeholder="Search process"  size="large"  /> */}
    <Input placeholder="Search process"  size="large" suffix={<SearchOutlined />}  />
    </Col>
    <Col span="14" style={{textAlign:'right'}}>
    <Space>
    <Link to="/manage-template"><Button size="large" style={{borderRadius:5,padding:'6.4px 8px',fontWeight:600,fontSize:14}}  type="primary" ghost>Manage Template</Button></Link>
    <Button size="large" style={{borderRadius:5,padding:'6.4px 8px',fontWeight:600,fontSize:14}}  type="primary"  icon={<PlusOutlined />}>New Template</Button>
    </Space>
    </Col>
    </Row>
  
          
        </Space>
  <Table columns={columns} 
  pagination={{ position: [ntop, nbottom],size:'small' }}
 
  dataSource={data} bordered />
  </div>
 
  </div>
  </Container>
    </>
  );
}
