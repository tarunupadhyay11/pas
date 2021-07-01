import React, { Component } from 'react';
import Canvas from 'react-responsive-canvas';
import { usePdf } from '@mikecousins/react-pdf';


class Mycanvas extends Component {
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.draw();
  }

  draw() {
    // Draw whatever
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render () {
    // const canvasRef = this.canvas;
    // const { pdfDocument, pdfPage } = usePdf({
    //     file: 'test.pdf',
    //     page,
    //     canvasRef,
    //   });

    return (
        <div style={{width:'100%',height:'100%'}}>
        {/* {!pdfDocument && <span>Loading...</span>}
        <Canvas
          canvasRef={el => (this.canvas = el)}
          onResize={this.draw} />
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
      </div>
    );
  }
}

export default Mycanvas;