import React, { useState, useEffect } from 'react'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    Guide,
   
  } from "bizcharts";
  const DataSet =require("@antv/data-set") 
  
  type Props={
    outcome:number,
    budget:number
  }
  const CircleCard=(props:Props)=> {
    const { DataView } = DataSet;
    const {outcome,budget}=props
    const data = [
      {
        item: "outcome",
        count: 6000
      },
      {
        item: "budget",
        count: 2000
      },
      
    ];
    const [source, setsource] = useState(data)
    useEffect(() => {
      setsource((older)=>{
        let a=older[0]
        a.count=outcome
        let b=older[1]
        b.count=budget
        return [a,b]
      })
    }, [props])
      
      const dv = new DataView();
      dv.source(source).transform({
        type: "percent",
        field: "count",
        dimension: "item",
        as: "percent"
      });
      const cols = {
        percent: {
          formatter: (val:number)=> {
            let val1 = val * 100 + "%";
            return val1;
          }
        }
      };
      return (
         
          <Chart
            height={200}
            padding="auto"           
            data={dv}   
            cols={cols}       
           forceFit
          >
            <Coord type={"theta"} radius={0.75} innerRadius={0.5} />
            <Axis name="percent" />
            <Legend  position="right-center" />
            <Tooltip
              showTitle={false}
              itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />     
            <Geom
              type="intervalStack"
              position="percent"
              color={["item",["#e99f89","#15cda8"]]}
              tooltip={[
                "item*percent",
                (item, percent) => {
                  percent = percent * 100 + "%";
                  return {
                    name: item,
                    value: percent
                  };
                }
              ]}
              style={{
                lineWidth: 1,
                stroke: "#fff"
              }}
            >
            </Geom>
          </Chart>
            
           
      );
    
      
  }
  export default CircleCard