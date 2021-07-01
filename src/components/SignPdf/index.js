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
  DownloadOutlined,
} from '@ant-design/icons';
import SignatureCanvas from 'react-signature-canvas';
import MyPdfViewer from '../MyPdfViewer/index'
import { fabric } from 'fabric';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
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


class SignPdf extends React.Component {

  constructor() {
    super();
    this.state =  {
      collapsed: false,
      searchText: '',
      searchedColumn: '',
      isModalVisible:false,
      pdfInfo:[],
      trimmedDataURL: null,
      activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
    };

    // this.sigPad = {}
    // this.sigPad = React.createRef();
    // this.addSign = this.addSign.bind(this);
    // this.clearSign = this.clearSign.bind(this);
  }

  

 

  componentDidMount() {
    
  }

  componentWillUnmount() {
    this.setState({ trimmedDataURL: undefined });
    this.sigRef = {};
}

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

   showModal = () => {
    this.setState({isModalVisible:true});
  };

   handleOk = () => {
    this.setState({isModalVisible:false});
  };

   handleCancel = () => {
    this.setState({isModalVisible:false});
  };

  printDocument() {
    const input = document.getElementById('mycanvas');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        // const pdf = new jsPDF();
        // pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.save("download.pdf");

        var doc = new jsPDF("p", "mm", "a4");
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();

        doc.addImage(imgData, 'JPEG', 0, 0, width, height);

        // pdf.output('dataurlnewwindow');
        doc.save("download.pdf");
      })
    ;
  }
  // addSign(){
  //   const simg = this.sigPad.getTrimmedCanvas().toDataURL('image/png');
  //   this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas()
  //     .toDataURL('image/png') })
  // // console.log(simg);
  // }

  // clearSign(){
  //   this.sigPad.clear();;
  // }

  render() {
    const { trimmedDataURL } = this.state;
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
              height:"100%",
            }}
          >
            <Row>
              <Col>
              <h2><span className="ant-form-text" style={{fontWeight:'bold'}}>Recruitment Process</span></h2>
              </Col>
            </Row>
            <Row style={{width:'100%',marginTop:15}}>
              <Col span="1">
              <FilePdfOutlined style={{fontSize:45}} />
              </Col>
              <Col span="6">
              <span className="ant-form-text" className="heading">
                Reference ID: DOC_0011</span>

              <span style={{borderRight:'1px solid #000'}}>&nbsp;</span>
              <br/>  <span className="dticonspan">Document Type : Top <sup>**</sup>Secret<sup>**</sup></span>
              </Col>
              <Col span="6">
              <span className="ant-form-text" className="heading" style={{paddingLeft:10}}>Process ID: BPMS_0011</span>
              <span style={{borderRight:'1px solid #000'}}>&nbsp;</span>
              </Col>
              <Col span="6">
              <span className="ant-form-text" className="heading">Added On: 20/05/2021</span>
              </Col>
          </Row>
          <Row style={{marginTop:15}}>
            <Col span="3"> <span className="ant-form-text" className="heading">Initiated By:</span> </Col>
            <Col> <span className="ant-form-text" className="heading">Homer Ryan (Clerk)</span></Col>
          </Row>

          <Row style={{marginTop:15}}>
            <Col span="3"> <span className="ant-form-text" className="heading">Description:</span> </Col>
            <Col span="18"> <span className="ant-form-text" className="">This is the description of the process.This is the description of the process.This is the description of the process.This is the description of the process..This is the description of the process.This is the description of the process.</span></Col>
          </Row>

          <Row style={{marginTop:15,border:'1px solid #000',padding:10}}>
          <Col span="7">
          <strong>Approver of Stage 1:</strong> Mark Doe (You)
          </Col>
            <Col span="2" style={{paddingLeft:22}}>
            <Button type="primary" onClick={this.showModal} className="btnwarning">
            View
            </Button>
            </Col>
            <Col span="2">
            <Button type="primary" onClick={this.showModal} className="btnsuccess">
            Approve
            </Button>
            </Col>
            <Col span="2">
            <Button type="primary"  danger>
            Reject
            </Button>
            </Col>
            </Row>

            <Row style={{marginTop:15,border:'1px solid #000',padding:8,backgroundColor:'#ffe599'}}>
          <Col span="20">
          <strong>Respond within:</strong> 1 day & 12 hours
          </Col>
            <Col span="4" style={{paddingLeft:22}}>
            <i style={{color:'#cf312b',fontWeight:'bold',fontSize:15}}>Take action now!</i>
            </Col>
            </Row>

            {/* <Button type="primary" onClick={this.showModal}>
        Open Form
      </Button> */}
   {/* <Modal   title={[<div>Edit form</div>]} visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}> */}
   <Modal  width={'70%'} style={{marginTop:-50}} title={[<div>Recruitment Application from Bill Johnson &nbsp;  <a onClick={this.printDocument}><DownloadOutlined /></a>&nbsp;</div>]} visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
  {/* <div id="canvasDiv">
  <MyPdfViewer/>
  </div> */}
   <MyPdfViewer/>
  {/* <Row>
    <Col span={16} style={{border:'1px solid #777',padding:30}}>
    <MyPdfViewer/>
    </Col>
    <Col span={8}>
    <Row >
    <Col span={8}> </Col>
      <Col span={16}>
      <div style={{border:'1px solid #000',width:200,height:200,marginTop:20}}>
      <SignatureCanvas penColor='black' ref={(ref) => { this.sigPad = ref }}
    canvasProps={{width:200,height:200,className: 'sigCanvas'}} />
        </div>
         </Col>
      </Row>
    <Row >
    <Col span={8}> </Col>
    <Col span={16}>  <button style={{marginTop:10}} onClick={this.addSign}>Add</button> &nbsp;<button style={{marginTop:10,marginLeft:10}} onClick={this.clearSign}>Clear</button></Col>
   
    
      </Row>
    </Col>
  </Row> */}
   
      </Modal>         
{/* <Row>
  <Col span="5"> */}
  {/* <div className="mb5">
        <button onClick={this.printDocument}>Save Document</button>
        <div style={{border:'1px solid #000',width:200,height:200,marginTop:20}}>
        
        </div>

        <button style={{marginTop:10}} onClick={this.addSign}>Add</button>

        <button style={{marginTop:10,marginLeft:10}} onClick={this.clearSign}>Clear</button>
        
      </div> */}
  {/* </Col> */}

  {/* <Col span="19">
  <div id="divToPrint" className="mt4" style={{
        backgroundColor: '#f5f5f5',
        width: '100%',
        height:'100px',
        minHeight: '100mm',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}> */}
        {/* <div>Note: Here the dimensions of div are same as A4</div>  */}
        {/* <div>
      
        </div>
      </div>
  </Col>
</Row> */}

     

              {/* <iframe title="test-frame" src={this.state.pdfInfo} type="application/pdf" /> */}
              {/* <iframe src="https://research.google.com/pubs/archive/44678.pdf"
   width="800" height="600"/> */}
          {/* <table border="1">
              <tbody>
                  <tr>
                      <td style={{width:'80%'}}>table1</td>
                      <td >table2</td>
                  </tr>
              </tbody>
          </table> */}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SignPdf;