import React from 'react';
import './style.css';
import { Layout, Menu, Breadcrumb,Table } from 'antd';
import Container from '../Layout/Container';
const { Header, Content, Footer } = Layout;

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [
  {
    title: 'Process Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      if (index < 4) {
        return <a>{text}</a>;
      }
      return {
        children: <a>{text}</a>,
        props: {
          colSpan: 5,
        },
      };
    },
  },
  {
    title: 'ID',
    dataIndex: 'age',
    render: renderContent,
  },
  {
    title: 'Created On',
    colSpan: 2,
    dataIndex: 'tel',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 2) {
        obj.props.rowSpan = 2;
      }
      // These two are merged into above cell
      if (index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.colSpan = 0;
      }
      return obj;
    },
  },
  {
    title: '',
    colSpan: 0,
    dataIndex: 'phone',
    render: renderContent,
  },
  {
    title: 'Created By',
    dataIndex: 'address',
    render: renderContent,
  },
];

const data = [
  {
    key: '1',
    name: 'DIT Seen Stamp 1',
    age: 'SS_001',
    tel: '',
    phone: '1 Jul 2021',
    address: 'John Doe',
  },
  {
    key: '2',
    name: 'DIT Seen Stamp 1',
    tel: '',
    phone: '1 Jul 2021',
    age: 'SS_001',
    address: 'John Doe',
  },
  {
    key: '3',
    name: 'DIT Seen Stamp 1',
    age: 'SS_001',
    tel: '',
    phone: '1 Jul 2021',
    address: 'John Doe',
  },
  {
    key: '4',
    name: 'DIT Seen Stamp 1',
    age: 'SS_001',
    tel: '',
    phone: '1 Jul 2021',
    address: 'John Doe',
  },
  {
    key: '5',
    name: 'DIT Seen Stamp 1',
    age: 'SS_001',
    tel: '',
    phone: '1 Jul 2021',
    address: 'John Doe',
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
   <div className="site-layout-content" style={{marginTop:5}}>
  <h2>All Process (10)</h2>

  <Table columns={columns} 
  pagination={{ position: [ntop, nbottom] }}
  dataSource={data} bordered />
    </div>
  </Container>
    </>
  );
}
