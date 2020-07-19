import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'France', value: 400 },
  { name: 'France', value: 300 },
  { name: 'Italy', value: 300 },
  { name: 'Italy', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    return (
        <ResponsiveContainer height={400}>
      <PieChart onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Legend verticalAlign="bottom" height={36} align="center" iconType="rect" />
      </PieChart>
      </ResponsiveContainer>
    );
  }
}
