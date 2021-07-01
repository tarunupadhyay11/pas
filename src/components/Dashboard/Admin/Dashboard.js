import React from 'react';
import PieChart from './Graph/PieChart'
import PercentHistogram from './Graph/PercentHistogram'
import RingChart from './Graph/RingChart'
import { BiBuildings } from 'react-icons/bi';
import { IoIosGitBranch } from "react-icons/io";
import {AiOutlineCalculator} from "react-icons/ai"
import './style.css';
import { Layout, Menu,Card,Row,Col,Divider,Table, Input, Button, Space,Upload, message,Modal } from 'antd';
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
const { Header, Content, Footer, Sider } = Layout;

const style = {  padding: '8px 0' };

export default function Dashboard() {
  return (
    <>
    <Content>
      <h2>Administrator Dashboard</h2>
    <Row>
      <Col span={9} style={{border: "1px solid #e3e5ee",marginRight:8}}> 
      <h3 style={{paddingLeft:20,paddingTop:5,fontWeight:700}}>All Process</h3>
      <PieChart/>
      </Col>
      <Col span={14} style={{border:'1px solid #e3e5ee',marginLeft:8,paddingLeft:24,paddingRight:24}}>
      <h3 style={{paddingTop:5,fontWeight:700}}>Overview</h3>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={8}>
        <div style={style,{background:"#dfebff",padding:10,paddingLeft:15,borderRadius:5}}>
        <Row >
            <Col span="18" style={{fontSize:25,fontWeight:'bold'}}>
            10
            </Col>
            <Col span="4">
            <img src="/flaticons/building.png" alt="image" style={{height:20}} />
            </Col>
          </Row>
          <Row >
            <Col span="24" style={{color:"#8c8ea2",fontSize:16}}>
              Total Departments
            </Col>
          </Row>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style,{background:"#fefcdc",padding:10,paddingLeft:15,borderRadius:5}}>
        <Row>
            <Col span="18" style={{fontSize:25,fontWeight:'bold'}}>
            10
            </Col>
            <Col span="4">
            {/* <IoIosGitBranch/> */}
            <img src="/flaticons/branch.png" alt="image" style={{height:20}} />
            </Col>
          </Row>
          <Row>
            <Col span="24" style={{color:"#8c8ea2",fontSize:16}}> 
              Total Branches
            </Col>
          </Row>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style,{background:"#f1fffe",padding:10,paddingLeft:15,borderRadius:5}}>
        <Row>
            <Col span="18" style={{fontSize:25,fontWeight:'bold'}}>
            10
            </Col>
            <Col span="4">
            <img src="/flaticons/task-planning-green.png" alt="image" style={{height:20}} />
            </Col>
          </Row>
          <Row>
            <Col span="24" style={{color:"#8c8ea2",fontSize:16}}>
              Total CHD
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    <Divider/>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={8}>
        <div style={style,{background:"#f2e8ff",padding:10,paddingLeft:15,borderRadius:5}}>
          <Row>
            <Col span="18" style={{fontSize:25,fontWeight:'bold'}}>
            10
            </Col>
            <Col span="4">
            <img src="/flaticons/settings.png" alt="image" style={{height:20}} />
            </Col>
          </Row>
          <Row>
            <Col span="24" style={{color:"#8c8ea2",fontSize:16}}>
              Total Advanced
            </Col>
          </Row>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style,{background:"#e6ffea",padding:10,paddingLeft:15,borderRadius:5}}>
        <Row>
            <Col span="18" style={{fontSize:25,fontWeight:'bold'}}>
            10
            </Col>
            <Col span="4">
            <img src="/flaticons/balance-sheet.png" alt="image" style={{height:20}} />
            </Col>
          </Row>
          <Row>
            <Col span="24" style={{color:"#8c8ea2",fontSize:16}}>
              Total Clerks
            </Col>
          </Row>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style,{background:"#feecec",padding:10,paddingLeft:15,borderRadius:5}}>
        <Row>
            <Col span="18" style={{fontSize:25,fontWeight:'bold'}}>
            10
            </Col>
            <Col span="4">
            <img src="/flaticons/task-planning-red.png" alt="image" style={{height:20}} />
            </Col>
          </Row>
          <Row>
            <Col span="24" style={{color:"#8c8ea2",fontSize:16}}>
              Staff Pending Actions
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
      {/* <Row>
            <Col  span={8} style={{padding:15}}>
            <Card  style={{ border: "1px solid #000" }}>
                <p style={{textAlign:'right',paddingRight:"0px",marginTop:"-20px",marginRight:-15}}><InfoCircleOutlined  style={{fontSize: '15px', color: '#000'}}/></p>
                <p style={{color:'#000',fontSize:25,textAlign:'center',fontWeight:'bold'}}>20</p>
                <p style={{textAlign:'center',fontSize:15,marginTop:' -25px'}}>Total  <br/> Departments</p>
            </Card>
            </Col>
            <Col  span={8} style={{padding:15}}>
            <Card  style={{ border: "1px solid #000" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px",marginRight:-15}}><InfoCircleOutlined  style={{fontSize: '15px', color: '#000'}}/></p>
                <p style={{color:'#000',fontSize:25,textAlign:'center',fontWeight:'bold'}}>11</p>
                <p style={{textAlign:'center',fontSize:15,marginTop:' -25px'}}>Total <br/> Branches</p>
            </Card>
            </Col>
            <Col  span={8} style={{padding:15}}>
            <Card  style={{ border: "1px solid #000" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px",marginRight:-15}}><InfoCircleOutlined  style={{fontSize: '15px', color: '#000'}}/></p>
                <p style={{color:'#000',fontSize:25,textAlign:'center',fontWeight:'bold'}}>11</p>
                <p style={{textAlign:'center',fontSize:15,marginTop:' -25px'}}>Total <br/>CHD</p>
            </Card>
            </Col>
            </Row> */}
            {/* <Row>
            <Col  span={8} style={{padding:15}}>
            <Card  style={{ border: "1px solid #000" }}>
                <p style={{textAlign:'right',paddingRight:"0px",marginTop:"-20px",marginRight:-15}}><InfoCircleOutlined  style={{fontSize: '15px', color: '#000'}}/></p>
                <p style={{color:'#000',fontSize:25,textAlign:'center',fontWeight:'bold'}}>20</p>
                <p style={{textAlign:'center',fontSize:15,marginTop:' -25px'}}>Total  <br/> Advanced</p>
            </Card>
            </Col>
            <Col  span={8} style={{padding:15}}>
            <Card  style={{ border: "1px solid #000" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px",marginRight:-15}}><InfoCircleOutlined  style={{fontSize: '15px', color: '#000'}}/></p>
                <p style={{color:'#000',fontSize:25,textAlign:'center',fontWeight:'bold'}}>11</p>
                <p style={{textAlign:'center',fontSize:15,marginTop:' -25px'}}>Total <br/> Clerks</p>
            </Card>
            </Col>
            <Col  span={8} style={{padding:15}}>
            <Card  style={{ border: "1px solid #000" }}>
                <p style={{textAlign:'right',paddingRight:"10px",marginTop:"-20px",marginRight:-15}}><InfoCircleOutlined  style={{fontSize: '15px', color: '#000'}}/></p>
                <p style={{color:'#000',fontSize:25,textAlign:'center',fontWeight:'bold'}}>11</p>
                <p style={{textAlign:'center',fontSize:15,marginTop:' -25px'}}>Total Pending<br/>Actions</p>
            </Card>
            </Col>
            </Row> */}
        </Col>
    </Row>

    <Row style={{marginTop:20}}>
      <Col span={24} style={{border: "1px solid #e3e5ee",padding:20}}> 
      <p className="transformyaxis" >Total Process</p>
      <h3 style={{position:'absolute',fontWeight:700}}>Process Breakdown Per Department</h3>
      <PercentHistogram/>
    
      <p style={{color:"#8c8ea2",textAlign:'center'}}>All Departments</p>
      </Col>
    </Row>
    </Content>
    </>
  );
}
