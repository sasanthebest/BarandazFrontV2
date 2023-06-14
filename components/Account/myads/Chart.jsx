
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, LabelList } from 'recharts';
const Chart = ({data,lineKey,XAxisKey}) => {
  return (
    <LineChart width={500} height={300} data={data} 
    // margin={{top: 5,right: 30,left: 20,bottom: 5,}}
    >
        <Line  type="monotone" dataKey={lineKey} stroke="#9da3a6" >
            {/* <LabelList /> */}
        </Line>
        <CartesianGrid stroke="#a1d8f0" strokeDasharray="4 4" />
        <XAxis stroke='#9da3a6' dataKey={XAxisKey} />
        <YAxis stroke='#9da3a6' />
        <Tooltip />
    </LineChart>
  )
}

export default Chart