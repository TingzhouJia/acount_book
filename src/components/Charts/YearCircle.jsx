import React from "react";
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
import DataSet from "@antv/data-set";
import './yearCircle.css'

const useCircleChart=(props,name)=>{
  const { DataView } = DataSet;
  const { Html } = Guide;
  const dv = new DataView();
  dv.source(props).transform({
    type: "percent",
    field: "count",
    dimension: "item",
    as: "percent"
  });
  const cols = {
    percent: {
      formatter: val => {
        val = val * 100 + "%";
        return val;
      }
    }
  };
  const html=`<div style="color:#8c8c8c;font-size:1.4em;text-align:center;width: 10em;">${name}<br><span style=&quot;color:#262626;font-size:1em&quot;>$</span><span style=&quot;color:#262626;font-size:1.4em&quot;>20000</span></div>`
  return (
      <Chart
        height={window.innerHeight*0.5}
        data={dv}
        scale={cols}
        width={window.innerWidth*0.25}
        
      >
        <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
        <Legend
          position="right"
          offsetY={-window.innerHeight*0.24}
          offsetX={-window.innerWidth*0.2}
        />
        <Tooltip
          showTitle={false}
          itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
        />
        <Guide>
          <Html
            position={["50%", "50%"]}
            html={html}
            alignX="middle"
            alignY="middle"
          />
        </Guide>
        <Geom
          type="intervalStack"
          position="percent"
          color="item"
          tooltip={[
            "item*percent",
            (item, percent) => {
              percent = Math.floor(percent * 100) + "%";
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
      </Chart>)
}
class YearCircle extends React.Component {
  render() {
    const outcomedata = [
      {
        item: "food",
        count: 40
      },
      {
        item: "utility",
        count: 21
      },
      {
        item: "entertainment",
        count: 17
      },
      {
        item: "travel",
        count: 13
      },
      {
        item: "social",
        count: 9
      }
    ];
    const incomedata = [
      {
        item: "parttime",
        count: 40
      },
      {
        item: "investment",
        count: 21
      },
      {
        item: "salary",
        count: 17
      },
      
    ];
   
    return(
      <div className='two_year_chart'>
      {useCircleChart(outcomedata,'Outcome')}
      {useCircleChart(incomedata,'Income')}
      </div>
    )
  
    
  }
}
export default YearCircle


