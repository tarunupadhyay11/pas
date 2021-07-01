import React, { Component, ReactElement, ReactSVGElement } from 'react';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector,
  Label, LabelList } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { changeNumberOfData } from './utils';
import * as _ from 'lodash';
import './PieChart.css';
//const colors = scaleOrdinal(schemeCategory10).range();
// const colors = ['#496cce', '#edc437', '#eb6f5d', '#51826d'];
const colors = ['#fab74a', '#f9747c', '#36b4ff', '#51826d'];
const data02 = [
  { name: 'Overdue', value: 10 },
  { name: 'Rejected', value: 6 },
  { name: 'Ongoing', value: 8 },
  { name: 'Completed', value: 15 },
  // { name: 'Group A', value: 2400 },
  // { name: 'Group B', value: 4567 },
  // { name: 'Group C', value: 0 },
  // { name: 'Group D', value: 9800 },
  // { name: 'Group E', value: 3908 },
  // { name: 'Group F', value: 4800 },
];


const initialState = { data02 };

const RADIAN = Math.PI / 180;
const renderLabelContent = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,name,value,x,y,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const xx = cx + radius * Math.cos(-midAngle * RADIAN);
  const yy = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
<text x={xx} y={yy} fill="white" fontSize={25} textAnchor="middle" dominantBaseline="central">
      {`${value}`}
    </text>
    {/* <g  transform={`translate(${x}, ${y})`} textAnchor={ (midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
      <text  x={0} y={0}>{`${name}`}</text>
     
    </g> */}
    </g>
    
  );
}

const renderLabelContent1 = (props) => {
  const { name,value, percent, x, y, midAngle } = props;

  return (
    <g transform={`translate(${x}, ${y})`} textAnchor={ (midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
      <text x={0} y={0}>{`${name}`}</text>
      {/* <text x={0} y={20}>{`(Percent: ${(percent * 100).toFixed(2)}%)`}</text> */}
    </g>
  );
};

// const renderLabelContent = (props) => {
//   const { name,value, percent, x, y, midAngle } = props;

//   return (
//     <g transform={`translate(${x}, ${y})`} textAnchor={ (midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
//       <text x={0} y={0}>{`${name}`}</text>
//       {/* <text x={0} y={20}>{`(Percent: ${(percent * 100).toFixed(2)}%)`}</text> */}
//     </g>
//   );
// };

const minTwoDigits = (n) => {
  return (n < 10 ? '0' : '') + n;
}

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul>
      {
        payload.map((entry, index) => (
          <li style={{listStyleType:'none',paddingTop:15}} key={`item-${index}`}>
            <table>
              <tr>
                <td>
                <span style={{display:'inline-block',width:10,height:10,backgroundColor:entry.color,borderRadius:'50%',marginRight:2}}></span>
                </td>
                <td width={10}>
                <span style={{paddingRight:5,fontSize:15,fontWeight:'bold'}}>{minTwoDigits(entry.payload.value)}</span>
                </td>
                <td>
                  <span style={{color:'grey',fontSize:16}}>
                  {entry.value}
                  </span>
                </td>
              </tr>
            </table>
            {/* <span style={{display:'inline-block',width:10,height:10,backgroundColor:entry.color,borderRadius:'50%',marginRight:2}}>
              <span style={{margin:'auto'}}></span></span>
              <span style={{paddingLeft:5,paddingRight:5,width:50}}>{entry.payload.value}</span> 
              <span style={{width:100,marginLeft:5}}>{entry.value}</span> */}
              </li>
        ))
      }
    </ul>
  );
}

export default class Demo extends Component {

  static displayName = 'PieChartDemo';

  onPieEnter = (data, index, e) => {
    this.setState({
      activeIndex: index,
    });
  };

  state = {
    ...initialState,
    activeIndex: 0,
    animation: false,
  };

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  handleChangeAnimation = () => {
    this.setState({
      animation: !this.state.animation,
    });
  };

  handlePieChartEnter = (a, b, c) => {
    console.log(a, b, c);
  };
  handleLeave = () => this.setState({ activeIndex: -1 });

  sumTotalVal(arr) {
    const total = arr.reduce((prev,next) => prev + next.value,0);
    console.log(total);
    return total;
  }

  render () {
    const { data02 } = this.state;
    const sumValue = this.sumTotalVal(data02)+ ' Total';
    console.log(sumValue)
    return (
      <div className="pie-charts">
          <div className="pie-chart-wrapper" style={{ width: '70%', height: '50%', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer width="100%" height={250}>
          <PieChart >
            <Pie
           data={data02}
           dataKey="value"
           nameKey="name"
          //  cx={600}
          //  cy={200}
           startAngle={180}
           endAngle={-180}
           innerRadius={50}
           outerRadius={90}
         //  label={renderLabelContent}
           labelLine={false}
           //paddingAngle={5}
           isAnimationActive={this.state.animation}
            >
              {
                data02.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
                ))
              }
              {/* <Label value="test" /> */}
              <Label width={50} position="center">
              { sumValue }
              </Label>
            </Pie>
            {/* <Legend align="center"/> */}
            {/* <Legend
              layout="vetical"
              verticalAlign="middle" 
              align="right"
              payload={
                data02.map(
                  (item, index) => ({
                    id: item.name,
                    type: "circle",
                    // value: `${item.name} (${item.value}%)`,
                    value: `${item.value} ${item.name}`,
                    color: colors[index % colors.length]
                  })
                )
              }
            /> */}

           <Legend 
            layout="vetical"
            verticalAlign="middle" 
            align="right"
           content={renderLegend}
            />
            <Tooltip />
            {/* <Legend layout="vetical" verticalAlign="middle" align="right" /> */}
          </PieChart>
          </ResponsiveContainer>
          </div>

      </div>
    );
  }
}

