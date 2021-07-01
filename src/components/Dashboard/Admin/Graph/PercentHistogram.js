import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const colors = ['#fab74a', '#f9747c', '#36b4ff', '#51826d'];

const PercentHistogram = () => {
  var data = [
    {
      status: 'Overdue',
      department: 'Department 1',
      value: 10,
    },
    {
      status: 'Overdue',
      department: 'Department 2',
      value: 5,
    },
    {
      status: 'Rejected',
      department: 'Department 1',
      value: 8,
    },
    {
      status: 'Ongoing',
      department: 'Department 1',
      value: 10,
    },
    {
      status: 'Ongoing',
      department: 'Department 3',
      value: 2,
    },
    {
      status: 'Rejected',
      department: 'Department 4',
      value: 2,
    },
    {
      status: 'Rejected',
      department: 'Department 5',
      value: 5,
    },
    {
      status: 'Completed',
      department: 'Department 1',
      value: 8,
    },
    {
      status: 'Rejected',
      department: 'Department 2',
      value: 7,
    },
    {
      status: 'Overdue',
      department: 'Department 2',
      value: 5,
    },
    {
      status: 'Overdue',
      department: 'Department 3',
      value: 3,
    },
    {
      status: 'Completed',
      department: 'Department 4',
      value: 8,
    },
    {
      status: 'Rejected',
      department: 'Department 1',
      value: 6,
    },
    {
      status: 'Completed',
      department: 'Department 1',
      value: 5,
    },
    {
      status: 'Completed',
      department: 'Department 2',
      value: 2,
    },
    {
      status: 'Completed',
      department: 'Department 4',
      value: 1,
    },
    {
      status: 'Overdue',
      department: 'Department 5',
      value: 5,
    },
    {
      status: 'Overdue',
      department: 'Department 2',
      value: 10,
    },
    {
      status: 'Completed',
      department: 'Department 3',
      value: 4,
    },
    {
      status: 'Rejected',
      department: 'Department 2',
      value: 3,
    },
    {
      status: 'Completed',
      department: 'Department 1',
      value: 5,
    },
  ];
  var config = {
    data: data,
    xField: 'department',
    yField: 'value',
    yAxis: {
      // format y axis label style
      label: {
        formatter: (v) => {
          return v;
          // return v + 'k';
        },
        style: {
          fill: '#000',
        },
      },
    },
    seriesField: 'status',
    color :colors ,  
    legend: {
      layout: 'horizontal',
      position: 'top-right'
    },
    appendPadding:30,
    // dodgePadding: 2,
    intervalPadding:80,
    //isPercent: false,
    isStack: true,
    label: {
      position: 'middle',
      content: function content(item) {
        // return item.value.toFixed(2);
        return '';
      },
      style: { fill: '#fff'},
    },
  };
  return <Column {...config} />;
};

export default PercentHistogram;