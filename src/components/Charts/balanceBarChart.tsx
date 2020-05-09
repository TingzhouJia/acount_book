import React, { useEffect, useState } from 'react'
import {Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts'
import { AccountEach } from 'redux/model/account'
const DataSet =require("@antv/data-set");
interface Props{
    data:AccountEach[]
}
const BalanceBarChart=(props:Props)=> {
    const {data}=props;
    const [DataSource, setDataSource] = useState<any|null>([])

    useEffect(()=>{
            const washData=(data:AccountEach[]):any=>{
        if(data.length==0){
            return
        }
         const afterData=[{name:"Current"},{name:"Available"}];
        //const afterData:{}[]=[];
        data.map((each:AccountEach)=>{
           let a:any= afterData[0];
           let b:any=afterData[1];
           let name:string=each.name;
           let current:number=each.balances.current
           a[name]=current
           b[each.name]=each.balances.available
//              let name1:string=each.name;
// let current:number=each.balances.current
// afterData.push({type:"Income",name:name1,value:current})
// afterData.push({type:"Available",name:name1,value:each.balances.available})
        })

        setDataSource(afterData);

    }
    washData(data)
    },[data])
    const ds = new DataSet();
    const dv = ds.createView().source(DataSource);
    const field:string[]=data.map((each)=>each.name)
    dv.transform({
        type: "fold",
      fields:field, //["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug."],
      // 展开字段集
      key: "月份",
      // key字段
      value: "月均降雨量"  
      });
      const label:any = {
        offset:20, // 数值，设置坐标轴文本 label 距离坐标轴线的距离
         // 文本旋转角度
        // 设置文本的显示样式，还可以是个回调函数，回调函数的参数为该坐标轴对应字段的数值
        textStyle: {
          textAlign: 'center', 
          fill: '#404040',
          fontSize: '12',
          fontWeight: 'bold', 
          textBaseline: 'top' 
        },
        formatter:(text:string)=>{
            return `${text.slice(0,7)}...`
        },
        autoRotate:false
      }
      
    return (
        <Chart height={200} data={dv} padding="auto" placeholder={<div style={{ position: 'relative', top: '48%', textAlign: 'center' }}>No Data For Now</div>} forceFit>
            <Axis name="月份" label={label}/>
            <Axis name="月均降雨量"/>
            <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Legend name='type' visible={true}/>
          <Geom
            type="interval"
            position="月份*月均降雨量"
            color={'name'}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 16
              }
            ]}
          />
        </Chart>
    )
}
export default BalanceBarChart
