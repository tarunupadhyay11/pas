import React, { useState, useRef,useEffect } from 'react';
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
import { usePdf } from '@mikecousins/react-pdf';
import Canvas from 'react-responsive-canvas';
import { fabric } from 'fabric';
import { pdfjs } from 'react-pdf';
// import pdfjsLib from "pdfjs-dist/build/pdf";
// import * as pdfjsLib from "pdfjs-dist/build/pdf";
// import pdfjsLib from 'pdfjs-dist/webpack';
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
const { Header, Sider, Content } = Layout;
const { Option } = Select;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';

const MyPdfViewer = () => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  var canvas = document.getElementById('mycanvas');


  let sigPad = useRef(null);
 let [trimmedDataURL, setTrimmedDataURL] = React.useState(null);
  const [user, setCanvas] = React.useState(null);

  const [canvasN, setCanvasN] = useState(false);

  var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var DEFAULT_SCALE = 1.0;
var CSS_UNITS = 96/72;
var container = document.getElementById('mycanvas');
let width = 300;
let height = 300;
//var scale = w / h;
// var scale = Math.min(w/maxWidth, h/maxHeight);
// var scale = Math.min(w/w, h/h);
  useEffect(() => {
    setPDF();
    // setCanvas(
    //   new fabric.Canvas(canvasRef.current, {
    //     renderOnAddRemove: true,
    //     width:w,
    //     height:h
    //   }),
    // );
  }, [setCanvas]);

  const setPDF = () => {
    var loadingTask = pdfjs.getDocument(url);
    loadingTask.promise.then(function(pdf) {
      console.log('PDF loaded');
      
      // Fetch the first page
      var pageNumber = 1;
      pdf.getPage(pageNumber).then(function(page) {
        console.log('Page loaded');
        
        var scale = 1.5;
        var viewport = page.getViewport({scale: scale});
    
        // Prepare canvas using PDF page dimensions
         canvas = document.getElementById('mycanvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
    
        width = viewport.width;
        height = viewport.height;
        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
          console.log('Page rendered');
          loadf(canvas);
        });
      });
    }, function (reason) {
      // PDF loading error
      console.error(reason);
    });
    
  }

  function loadf(canvas){

    var bg = canvas.toDataURL("image/png");
          var fcanvas = new fabric.Canvas("mycanvas", {
            //selection: false,
            preserveObjectStacking: true
          });
          console.log("renderer")
       fcanvas.setBackgroundImage(bg,fcanvas.renderAll.bind(fcanvas));
          fcanvas.setWidth(canvas.width);
          fcanvas.setHeight(canvas.height);
          fcanvas.renderAll();
          // var circle = new fabric.Circle({
          //   radius: 20, fill: 'green', left: 100, top: 100
          // });
          // var triangle = new fabric.Triangle({
          //   width: 20, height: 30, fill: 'blue', left: 50, top: 50
          // });
          
          // fcanvas.add(circle, triangle);

          // var rect = new fabric.Rect({
          //   left: 100,
          //   top: 100,
          //   width: 50,
          //   height: 50,
          //   fill: '#FF454F',
          //   opacity: 0.5,
          //   transparentCorners: true,
          //   borderColor: "gray",
          //   cornerColor: "gray",
          //   cornerSize: 5
          // });
          // fcanvas.add(rect);
          // fcanvas.renderAll();
          // console.log("renderer");
    }

    function loadimage(canvas){

      var bg = canvas.toDataURL("image/png");
            var fcanvas = new fabric.Canvas("mycanvas", {
              selection: false,
              preserveObjectStacking: true
            });
            console.log("renderer")
         fcanvas.setBackgroundImage(bg,fcanvas.renderAll.bind(fcanvas));
            fcanvas.setWidth(canvas.width);
            fcanvas.setHeight(canvas.height);

            // var circle = new fabric.Circle({
            //   radius: 20, fill: 'green', left: 100, top: 100
            // });
            // var triangle = new fabric.Triangle({
            //   width: 20, height: 30, fill: 'blue', left: 50, top: 50
            // });

            var imgElement = document.getElementById('simage');
            var imgInstance = new fabric.Image(imgElement, {
              left: 100,
              top: 100,
              opacity: 0.85
            });


           
            fcanvas.add(imgInstance);
            //simage
            fcanvas.renderAll();
            // console.log("renderer");
      }
  // const setPDF = () => {
  //  let myCanvas =  new fabric.Canvas(canvasRef.current, {
  //     renderOnAddRemove: true,
  //   });

  //   let canvasWidth = document.getElementById("canvascol").clientWidth;
  //   let canvasHeight = document.getElementById("canvasDiv").clientHeight;

  //   myCanvas.setHeight(h);
  //   myCanvas.setWidth(canvasWidth);
  //   myCanvas.renderAll();


  //   var text = new fabric.Text('hello world', { left: 10, top: 10 });
  //   myCanvas.add(text);

  //   var rect = new fabric.Rect({
  //     left: 20,
  //     top: 20,
  //     fill: 'red',
  //     width: 20,
  //     height: 20
  //   });
    
  //   // "add" rectangle onto canvas
  //   myCanvas.add(rect);

  //   setCanvasN(myCanvas);

    
  // }

  const addSign = () =>
  {
    if(sigPad){
      const simg = sigPad.getTrimmedCanvas().toDataURL('image/png');
      setTrimmedDataURL(simg);
      loadimage(canvas)
   // fcanvas.renderAll();
    //   var canvas = new fabric.Canvas('mycanvas');
    //   var img = new Image();
    // img.onload = function () {
    //     var imgbase64 = new fabric.Image(img, {
    //         scaleX: 1,
    //         scaleY: 1
    //     })
    //     canvas.add(imgbase64);
    // }
    // img.src = simg;
    
      
      // var canvas = new fabric.Canvas('mycanvas');
      // var imgElement = document.createElement("IMG");
      // var imgInstance = new fabric.Image(imgElement, {
      //   left: 100,
      //   top: 100,
      //   angle: 30,
      //   opacity: 0.85
      // });
      // canvas.add(imgInstance);
      // this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas()
      //   .toDataURL('image/png') })
     console.log(simg);
    }
    
  }

  const clearSign = () =>
  {
    sigPad.clear();;
    setPDF();
  }

  // const canvas = canvasRef.current
  // const context = canvas.getContext('2d')

  // const { pdfDocument, pdfPage } = usePdf({
  //   file: 'naa_form.pdf',
  //   page,
  //   canvasRef,
  //   // scale:0.8
  //   scale:0.6
  // });
  

  return (
    // <div style={{width:'100%',height:'100%'}}>
    <Row>
    {/* <Col span={16} style={{border:'1px solid #777',padding:30,width:'100%'}} id="canvascol"> */}
    <Col span={16} style={{border:'1px solid #777'}} id="canvascol">
    {/* <canvas ref={canvasRef} width={w} height={h} id="mycanvas" >My text</canvas> */}
    <canvas ref={canvasRef} style={{width:'100%',height:'100%'}} id="mycanvas" ></canvas>
    <div style={{width:200,height:200}} ><img id="simage" src={trimmedDataURL} style={{width:'100%',height:'100%',visibility:'hidden'}} /></div>
    {/* {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} width={w} height={h} id="mycanvas" />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager">
            <li className="previous">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>
            <li className="next">
              <button
                disabled={page === pdfDocument.numPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )} */}
    </Col>
    <Col span={8}>
    <Row >
    <Col span={8}> </Col>
      <Col span={16}>
      <div style={{border:'1px solid #000',width:200,height:200,marginTop:20}}>
      <SignatureCanvas penColor='black' ref={(ref) => { sigPad = ref }}
    canvasProps={{width:200,height:200,className: 'sigCanvas'}} />
        </div>
         </Col>
      </Row>
    <Row >
    <Col span={8}> </Col>
    <Col span={16}>  <button style={{marginTop:10}} onClick={addSign}>Add</button> &nbsp;<button style={{marginTop:10,marginLeft:10}} onClick={clearSign}>Clear</button></Col>
   
    
      </Row>
    </Col>
      
    </Row>
  );
};

export default MyPdfViewer;