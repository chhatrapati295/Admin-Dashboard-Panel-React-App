import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title,data,dataKey,grid}) {
    // const data = [
    //     {
    //       name: 'Jan',
    //       User: 4000,
    //     },
    //     {
    //       name: 'Feb',
    //       User: 3000,
    //     },
    //     {
    //       name: 'Mar',
    //       User: 2000,
    //     },
    //     {
    //       name: 'Apr',
    //       User: 2780,
    //     },
    //     {
    //       name: 'May',
    //       User: 1890,
    //     },
    //     {
    //       name: 'Jun',
    //       User: 2390,
    //     },
    //     {
    //       name: 'Jul',
    //       User: 3490,
    //     },
    //     {
    //       name: 'Aug',
    //       User: 3900,
    //     },
    //     {
    //       name: 'Sep',
    //       User: 3090,
    //     },
    //     {
    //       name: 'Oct',
    //       User: 3890,
    //     },
    //     {
    //       name: 'Nov',
    //       User: 3490,
    //     },
    //     {
    //       name: 'Dec',
    //       User: 5090,
    //     },
    //   ];
  return (
    <div className='chart'>
      <div className="chartWrapper">
        <h2 className='chart-heading'>{title}</h2>
      <ResponsiveContainer width='100%' aspect={4/1}>
      <LineChart data={data}>
      {grid && <CartesianGrid strokeDasharray="3 3" />}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Line
        type="monotone"
        dataKey="pv"
        stroke="#5550bd"
        activeDot={{ r: 8 }}
      /> */}
      <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
    </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}
