import React, { Component } from 'react';
import './style.css';
import { Layout, Menu,Card,Row,Col,Table, Input, Button, Space,Upload, message,Modal } from 'antd';
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
  ClockCircleOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {connect} from "react-redux";
const { Header, Sider, Content } = Layout;
const { Dragger } = Upload;

const uploadprops = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
    // this.props.history.push('/login');
  },
};

const singleuploadprops = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

const data = [
    {
      key: 'DOC_001',
      name: 'Business requirement document',
      priority: 'Urgent',
      added_on: '20/04/2021',
      created_by: 'John Doe',
      status: 'Pending',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: 'DOC_002',
      name: 'Sales lead approval sheet',
      priority: 'Very High',
      added_on: '20/04/2021',
      created_by: 'John Doe',
      status: 'Pending',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: 'DOC_003',
      name: 'Business requirement document',
      priority: 'High',
      added_on: '20/04/2021',
      created_by: 'John Doe',
      status: 'Pending',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: 'DOC_004',
      name: 'Business requirement document',
      priority: 'Medium',
      added_on: '20/04/2021',
      created_by: 'John Doe',
      status: 'Pending',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

class Dashboard extends React.Component {
  state = {
    collapsed: false,
    searchText: '',
    searchedColumn: '',
    isModalVisible:false,
    usertype:null,
  };

  componentDidMount() {
    const usertype = localStorage.getItem('usertype');
    this.setState({ usertype:usertype });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
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

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  uploadFile() {
    this.props.history.push('/submit-document');
  }

  render() {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
            ...this.getColumnSearchProps('key'),
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        //   width: '30%',
          ...this.getColumnSearchProps('name'),
        },
        {
          title: 'Priority',
          dataIndex: 'priority',
          key: 'priority',
          ...this.getColumnSearchProps('priority'),
        },
        {
          title: 'Added on',
          dataIndex: 'added_on',
          key: 'added_on',
          ...this.getColumnSearchProps('added_on'),
        //   sorter: (a, b) => a.address.length - b.address.length,
        //   sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Created by',
            dataIndex: 'created_by',
            key: 'created_by',
            ...this.getColumnSearchProps('created_by'),
            // sorter: (a, b) => a.address.length - b.address.length,
            // sortDirections: ['descend', 'ascend'],
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            ...this.getColumnSearchProps('status'),
            // sorter: (a, b) => a.address.length - b.address.length,
            // sortDirections: ['descend', 'ascend'],
          },
      ];

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
            
            {this.state.usertype=='3' &&
            <h1 style={{fontSize:20}}><strong>Clerk Dashboard</strong></h1>
            }

           {this.state.usertype=='2' &&
            <h1 style={{fontSize:20}}><strong>Approver Dashboard</strong></h1>
            }
             {this.state.usertype=='3' &&
            <Row>
            <Col  span={6} style={{paddingRight:40}}>
            <Card  style={{ border: "1px solid #2b78e4" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px"}}><InfoCircleOutlined  style={{fontSize: '20px', color: '#000'}}/></p>
                <p style={{color:'#2b78e4',fontSize:25,textAlign:'center',fontWeight:'bold'}}>3</p>
                <p style={{textAlign:'center',fontSize:16,fontWeight:'bold',marginTop:' -25px'}}>Ongoing  <br/> Processes</p>
            </Card>
            </Col>
            <Col  span={6} style={{paddingRight:40}}>
            <Card  style={{ border: "1px solid #20a72c" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px"}}><InfoCircleOutlined  style={{fontSize: '20px', color: '#000'}}/></p>
                <p style={{color:'#20a72c',fontSize:25,textAlign:'center',fontWeight:'bold'}}>9</p>
                <p style={{textAlign:'center',fontSize:16,fontWeight:'bold',marginTop:' -25px'}}>Approved <br/> Processes</p>
            </Card>
            </Col>
            <Col  span={6} style={{paddingRight:40}}>
            <Card  style={{ border: "1px solid #cf2a28" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px"}}><InfoCircleOutlined  style={{fontSize: '20px', color: '#000'}}/></p>
                <p style={{color:'#cf2a28',fontSize:25,textAlign:'center',fontWeight:'bold'}}>3</p>
                <p style={{textAlign:'center',fontSize:16,fontWeight:'bold',marginTop:' -25px'}}>Rejected <br/>Processes</p>
            </Card>
            </Col>
            <Col  span={6} style={{paddingRight:40}}>
            <Card  style={{ border: "1px solid #f0c233" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px"}}><InfoCircleOutlined  style={{fontSize: '20px', color: '#000'}}/></p>
                <p style={{color:'#f0c233',fontSize:25,textAlign:'center',fontWeight:'bold'}}>2</p>
                <p style={{textAlign:'center',fontSize:16,fontWeight:'bold',marginTop:' -25px'}}>Overdue <br/>  Processes</p>
            </Card>
            </Col>
            </Row>
           }


{this.state.usertype=='2' &&
            <Row>
            <Col  span={6} style={{paddingRight:40}}>
            <Card  style={{ border: "1px solid #2b78e4" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px"}}><InfoCircleOutlined  style={{fontSize: '20px', color: '#000'}}/></p>
                <p style={{color:'#2b78e4',fontSize:25,textAlign:'center',fontWeight:'bold'}}><ClockCircleOutlined /></p>
                <p style={{textAlign:'center',fontSize:16,fontWeight:'bold',marginTop:' -25px'}}>Requirement   Request <br/> 
                <Button style={{backgroundColor:'red',color:'#fff'}}  danger href="/sign-pdf">
                Take Action
              </Button>
              </p>
            </Card>
            </Col>
            <Col  span={6} style={{paddingRight:40}}>
            <Card  style={{ border: "1px solid #20a72c" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px"}}><InfoCircleOutlined  style={{fontSize: '20px', color: '#000'}}/></p>
                <p style={{color:'#20a72c',fontSize:25,textAlign:'center',fontWeight:'bold'}}><CheckOutlined /> <CheckOutlined /> <CheckOutlined /> <CloseOutlined  style={{color:'red'}}/> </p>
                <p style={{textAlign:'center',fontSize:16,fontWeight:'bold',marginTop:' -25px'}}>Appraisal Review </p>
            </Card>
            </Col>
            <Col  span={6} style={{paddingRight:40}}>
            <Card  style={{ border: "1px solid #cf2a28" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px"}}><InfoCircleOutlined  style={{fontSize: '20px', color: '#000'}}/></p>
                <p style={{color:'#cf2a28',fontSize:25,textAlign:'center',fontWeight:'bold'}}><CheckOutlined /> <CheckOutlined /> <ClockCircleOutlined /> <ClockCircleOutlined / > <ClockCircleOutlined /></p>
                <p style={{textAlign:'center',fontSize:16,fontWeight:'bold',marginTop:' -25px'}}>Team Review</p>
            </Card>
            </Col>
            <Col  span={6} style={{paddingRight:40}}>
            <Card  style={{ border: "1px solid #f0c233" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px"}}><InfoCircleOutlined  style={{fontSize: '20px', color: '#000'}}/></p>
                <p style={{color:'#f0c233',fontSize:25,textAlign:'center',fontWeight:'bold'}}><CheckOutlined /> <CheckOutlined /> <CheckOutlined /></p>
                <p style={{textAlign:'center',fontSize:16,fontWeight:'bold',marginTop:' -25px'}}>FY2020 Review </p>
            </Card>
            </Col>
            </Row>
           }
           {this.state.usertype=='3' &&
            <Row style={{marginTop:20}}>
              <Col span={19}>
               
               </Col>
                <Col span={3} style={{width:'100%',textAlign:'right',float:'right',maxWidth:'100%',flex:1}}>
                
                <Button icon={<UploadOutlined />} onClick={this.showModal}>
                Upload
             </Button>
            <Modal visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
            <p style={{marginTop:30}}>
            <Dragger {...uploadprops} onChange={() => {this.uploadFile()}}>
            <p className="ant-upload-drag-icon">
              {/* <InboxOutlined /> */}
              <ArrowUpOutlined />
            </p>
            {/* <p className="ant-upload-text">Drag and drop files to upload</p> */}
            {/* <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p> */}
          </Dragger>
            </p>
              <p style={{textAlign:'center'}}>Drag and drop files to upload <br/> OR <br/> Select a file from your computer</p>
              
              <p style={{textAlign:'center'}}>
                <Upload {...singleuploadprops} onChange={() => {this.uploadFile()}}>
                <Button type="primary" icon={<UploadOutlined />} > Select File</Button>
                </Upload></p>
            </Modal>
                </Col>
            </Row>
           }
            <Row style={{marginTop:20}}>
                <Col span={24}>
                <Table columns={columns} dataSource={data} />
                </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

//export default Dashboard;

const mapStateToProps = (state) => {
  return {
    auth: state.auth.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      // same effect
      //signOutAsyn : (uData) => dispatch(signOutAsyn(uData)),
  }
};

export default connect( mapStateToProps, mapDispatchToProps)(Dashboard);