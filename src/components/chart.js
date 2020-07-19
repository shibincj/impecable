import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Jan', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Feb', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Mar', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Apr', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'May', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Jun', uv: 2390, pv: 3800, amt: 2500,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    return (
      <ResponsiveContainer height={400}>
      <AreaChart data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.3}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis axisLine={false} tickLine={false} dataKey="name" />
  <YAxis axisLine={false} tickLine={false} />
  <CartesianGrid vertical={false} strokeWidth={.5}/>
  <Tooltip />
  <Legend verticalAlign="bottom" height={36} align="center" iconType="rect" />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" dot={{ stroke: '#8884d8', strokeWidth: 1, r: 4 }} />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" dot={{ stroke: '#82ca9d', strokeWidth: 1, r: 4 }} />
</AreaChart>
</ResponsiveContainer>
    );
  }
}
