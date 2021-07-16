import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { Header } from 'semantic-ui-react'

const ChartComponent = (props) => {
    const {csv}=props

    function GetChartData(data){
        const result=data.map((ele)=>{
            return {...{name:ele.name},...{ duration:ele.duration}}
        })
      return result
    }
    const data=GetChartData(csv)
    
    const colors=["#391a91","#5be902","#7FFFD4","#8A2BE2","#FF4500","#008000"]
        
    const randomColor=()=>{
        
        const num=Math.floor(Math.random()*6)
        return colors[num]

    }
    const colorData=randomColor()
    
    return (
    <div>
        <div style={{margin:'20px'}}>
            <Header>Chart </Header>
        </div>
        <BarChart width={530} height={280} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="duration" fill={colorData} />
        </BarChart>
    </div>
)
}

export default ChartComponent
