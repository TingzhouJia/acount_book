import React from 'react'
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
  
  class CircleCard extends React.Component {
    render() {
      const { DataView } = DataSet;
      const { Html } = Guide;
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
      const dv = new DataView();
      dv.source(data).transform({
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
              color="item"
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
  }
  export default CircleCard