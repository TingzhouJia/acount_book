import React from 'react'
import {Card, Button} from 'antd'
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
        <Card>
            cover={

            
          <Chart
            height={window.innerHeight*0.3}
            data={dv}
           
           
            forceFit
          >
            <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
            <Axis name="percent" />
          
            <Tooltip
              showTitle={false}
              itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Guide>
              <Html
                position={["50%", "50%"]}
                html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>Lefted<br><span style=&quot;color:#262626;font-size:2.5em&quot;>72</span>%</div>"
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
              <Label
                content="percent"
                formatter={(val, item) => {
                  return item.point.item + ": " + val;
                }}
              />
            </Geom>
          </Chart>
            }
            actions={[<Button>Details</Button>]}
        </Card>
      );
    }
  }
  export default CircleCard