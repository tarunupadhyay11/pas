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
import SignatureCanvas from 'react-signature-canvas';
import { fabric } from 'fabric';
import { pdfjs } from 'react-pdf';
const { TextArea } = Input;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

var url = 'naa_form.pdf';

var fabricCanvas = new fabric.Canvas();

export default class MyPdfViewer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      trimmedDataURL:'',
      canvasWidth: '300',
      canvasHeight:'300',
      commentText:'',
      delLeft:100,
      delTop:-68,
      shouldHideBtn:true

    }
    this.canvas = React.createRef();
    this.sigPad = React.createRef();
    this.setPDF = this.setPDF.bind(this);
    this.addSign = this.addSign.bind(this);
    this.clearSign = this.clearSign.bind(this);
    this.loadFabricCanvas = this.loadFabricCanvas.bind(this);
    this.loadimage = this.loadimage.bind(this);
    this.addComment = this.addComment.bind(this);
    this.setComment = this.setComment.bind(this);
    this.removeObject = this.removeObject.bind(this);

}

componentDidMount() {
  const ctx = this.canvas.current.getContext('2d')
  //this.props.draw(ctx);
   this.setPDF();
  //this.loadFabricCanvas();
//   this.the_canvas = new fabric.StaticCanvas('mycanvas', {
//     preserveObjectStacking: true,
//     height:this.state.canvasHeight,
//     width:this.state.canvasWidth,
// });

  //  var offsetHeight = document.getElementById('canvascol').offsetHeight;
  // var offsetWidth = document.getElementById('canvascol').offsetWidth;
  //   var el = document.getElementById('mycanvas');
  //   fabricCanvas.initialize(el, {
  //       height: offsetHeight,
  //       width: offsetWidth,
  //   });

  //   var circle = new fabric.Circle({
  //     radius: 20, fill: 'green', left: 100, top: 100
  //   });

  //   fabricCanvas.add(circle);
  let thisCanvas = this;
  // fabricCanvas.on('mouse:down', function(options) {
  //   if (options.target) {
  //     // console.log('an object was clicked! ', options.target.type);
  //     // console.log(options.e.clientX, options.e.clientY);
  //     thisCanvas.setState({shouldHideBtn:false});
  //     //thisCanvas.setState({delLeft:options.e.clientX,delTop:options.e.clientY});
  //   }
  // });

  fabricCanvas.on('selection:created', function(options) { 
    thisCanvas.setState({shouldHideBtn:false});
  });

  fabricCanvas.on('selection:cleared', function () {
    thisCanvas.setState({shouldHideBtn:true});
 });
}

componentWillUnmount() {
  //window.removeEventListener("resize", this.updateCanvasDimensions.bind(this));
}

setPDF = () => {
  let That = this;
  var loadingTask = pdfjs.getDocument(url);
  loadingTask.promise.then(function(pdf) {
    console.log('PDF loaded');
    
    // Fetch the first page //..pdf.numPages
    var pageNumber = 1;
    pdf.getPage(pageNumber).then(function(page) {
      console.log('Page loaded');
      
      var scale = 1.5;
      var viewport = page.getViewport({scale: scale});
  
      // Prepare canvas using PDF page dimensions
      var canvas = document.getElementById('mycanvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      //That.setState({canvasWidth:viewport.width,canvasHeight:viewport.height});
      // width = viewport.width;
      // height = viewport.height;
      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);
      renderTask.promise.then(function () {
        console.log('Page rendered');
        //loadf(canvas);
        That.loadFabricCanvas(canvas);

      });
    });
  }, function (reason) {
    // PDF loading error
    console.error(reason);
  });
  
}

loadFabricCanvas = (canvas) => {
   var bg = canvas.toDataURL("image/png");
  var offsetHeight = document.getElementById('canvascol').offsetHeight;
  var offsetWidth = document.getElementById('canvascol').offsetWidth;
    var el = document.getElementById('mycanvas');
    fabricCanvas.initialize(el, {
      preserveObjectStacking: true,
      hoverCursor: 'pointer',
      selection: true,
      selectionBorderColor: 'blue',
      height:offsetHeight,   
      width:offsetWidth,
    });
    
    fabricCanvas.setDimensions({
      width:'100%',
      height:'100%',
    },{
      cssOnly:true,
    });

      new fabric.Image.fromURL(bg, function(img) {
          img.scaleToHeight(offsetHeight);
          fabricCanvas.setHeight(offsetHeight);
          fabricCanvas.setWidth(offsetWidth);
         fabricCanvas.setBackgroundImage(img);
       });

      
      
       fabricCanvas.renderAll();
    // var bg = canvas.toDataURL("image/png");
    // fabricCanvas.setBackgroundImage(bg,fabricCanvas.renderAll.bind(fabricCanvas));
  // var offsetHeight = document.getElementById('canvascol').offsetHeight;
  // var offsetWidth = document.getElementById('canvascol').offsetWidth;
  // // var bg = canvas.toDataURL("image/png");
  //   this.canvas = new fabric.StaticCanvas('mycanvas', {
  //     preserveObjectStacking: true,
  //     hoverCursor: 'pointer',
  //     selection: true,
  //     selectionBorderColor: 'blue',
  //     height:offsetHeight,   
  //     width:offsetWidth,
  //   });
  //   this.canvas.setDimensions({
  //     width:'100%',
  //     height:'100%',
  //   },{
  //     cssOnly:true,
  //   });

    //this.setPDF();
    //this.the_canvas.setBackgroundImage(bg,this.the_canvas.renderAll.bind(this.the_canvas));
}

 loadimage = () => {

        var circle = new fabric.Circle({
          radius: 20, fill: 'green', left: 100, top: 100
        });
        // var triangle = new fabric.Triangle({
        //   width: 20, height: 30, fill: 'blue', left: 50, top: 50
        // });

        var imgElement = document.getElementById('simage');
        var imgInstance = new fabric.Image(imgElement, {
          left: 100,
          top: 100,
          opacity: 0.85
        });


       
        fabricCanvas.add(imgInstance);
        //simage
        //this.canvas.renderAll();
        // console.log("renderer");
  }

addSign = () =>
{
  if(this.sigPad){
    const simg = this.sigPad.getTrimmedCanvas().toDataURL('image/png');
    this.setState({trimmedDataURL:simg});
    this.loadimage();
    //loadimage(canvas)
   //console.log(simg);
  //  const ctx = this.canvas.current.getContext('2d');
  //  const image = new Image();
  //   image.src = simg;
  //   image.onload = () => {
  //      ctx.drawImage(image, 0, 0)
  //   }
  }
  
}

clearSign = () =>
{
  this.sigPad.clear();;
  //setPDF();
}

setComment = (e) => {
  console.log(e.target.value)
  this.setState({commentText:e.target.value});
}

addComment = () => {
  let text = this.state.commentText;
  let textWithBackground = new fabric.Text(text, {
    left:200,
    top:200,
    textBackgroundColor: '#ffff00'
  });
  fabricCanvas.add(textWithBackground);
  //alert(this.state.commentText)
}

removeObject = () => {
  fabricCanvas.remove(fabricCanvas.getActiveObject())
}
  
  render() {
    return (
      <div style={{width:'100%',height:'100%'}}>
        
         <Row>
         <Col span={16} style={{border:'1px solid #777'}} id="canvascol">
         <canvas style={{border:'1px solid #000',width:'100%',height:'100%'}} ref={this.canvas} id="mycanvas" />
        
           </Col>
           <Col span={8}>
            <Row >
                  <Col span={8}>
                  <div style={{width:200,height:200,visibility:'hidden'}} ><img id="simage" src={this.state.trimmedDataURL} style={{width:'100%',height:'100%',visibility:'hidden'}} /></div>
                     </Col>
                  <Col span={16}>
                  <div style={{border:'1px solid #000',width:200,height:200,marginTop:20}}>
                  <SignatureCanvas penColor='black' ref={(ref) => { this.sigPad = ref }}
                  canvasProps={{width:200,height:200,className: 'sigCanvas'}} />
                  </div>
                  </Col>
            </Row>
            <Row >
            <Col span={8}> </Col>
            <Col span={16}>  <Button style={{marginTop:10}} onClick={this.addSign}>Add</Button> &nbsp;<Button style={{marginTop:10,marginLeft:10}} onClick={this.clearSign}>Clear</Button></Col>
            </Row>

            <Row style={{marginTop:20}}>
            <Col span={8}> </Col>
            <Col span={16}> <TextArea allowClear={true} rows={3} onChange={ (e) => {this.setComment(e)} }/></Col>
            </Row>

            <Row >
            <Col span={8}> </Col>
            <Col span={16}>  <Button style={{marginTop:10}} onClick={this.addComment}>Add Comment</Button> </Col>
            </Row>
            <Button type="primary" className={this.state.shouldHideBtn ? 'hidden' : ''} style={{position:'absolute',left:this.state.delLeft,top:this.state.delTop,zIndex:999}}  onClick={this.removeObject} danger>Delete Selection</Button>
           </Col>
         </Row>
       
      </div>
    );
  }
}
