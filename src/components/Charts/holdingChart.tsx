import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  Util,
  PathUtil,
  Shape, 
} from "bizcharts";

class YearLine extends React.Component {

  render() {
    const data = [
      {
          month: "Jan",
          type: "Outcome",
          temperature: 7
      },
      {
          month: "Jan",
          type: "Income",
          temperature: 3.9
      },
      {
          month: "Feb",
          type: "Outcome",
          temperature: 6.9
      },
      {
          month: "Feb",
          type: "Income",
          temperature: 4.2
      },
      {
          month: "Mar",
          type: "Outcome",
          temperature: 9.5
      },
      {
          month: "Mar",
          type: "Income",
          temperature: 5.7
      },
      {
          month: "Apr",
          type: "Outcome",
          temperature: 14.5
      },
      {
          month: "Apr",
          type: "Income",
          temperature: 8.5
      },
      {
          month: "May",
          type: "Outcome",
          temperature: 18.4
      },
      {
          month: "May",
          type: "Income",
          temperature: 11.9
      },
      {
          month: "Jun",
          type: "Outcome",
          temperature: 21.5
      },
      {
          month: "Jun",
          type: "Income",
          temperature: 15.2
      },
      {
          month: "Jul",
          type: "Outcome",
          temperature: 25.2
      },
      {
          month: "Jul",
          type: "Income",
          temperature: 17
      },
      {
          month: "Aug",
          type: "Outcome",
          temperature: 26.5
      },
      {
          month: "Aug",
          type: "Income",
          temperature: 16.6
      },
      {
          month: "Sep",
          type: "Outcome",
          temperature: 23.3
      },
      {
          month: "Sep",
          type: "Income",
          temperature: 14.2
      },
      {
          month: "Oct",
          type: "Outcome",
          temperature: 18.3
      },
      {
          month: "Oct",
          type: "Income",
          temperature: 10.3
      },
      {
          month: "Nov",
          type: "Outcome",
          temperature: 13.9
      },
      {
          month: "Nov",
          type: "Income",
          temperature: 6.6
      },
      {
          month: "Dec",
          type: "Outcome",
          temperature: 9.6
      },
      {
          month: "Dec",
          type: "Income",
          temperature: 4.8
      }
    ];
    const cols = {
      month: {
        range: [0, 1]
      }
    };
  
   
    const COLORS = [
      "#0088FE",
      "#00C49F",
      "#FFBB28",
      "#FF8441",
      "#EE3B61",
      "#FF6590",
      "#9575DE",
      "#8EA4F1",
      "#C6E8D2",
      "#FFDB91",
      "#FF9054"
    ];
    return (
        <div className="YearLine"><Chart height={window.innerHeight*0.3} data={data} scale={cols} forceFit>
        <Legend />
        <Axis name="month" />
        <Axis
          name="temperature"
          label={{
            formatter: val => `$${val}k`
          }}
        />
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Geom
          type="line"
          position="month*temperature"
          size={2}
          color={"type"}
          shape={"smooth"}
        />
        <Geom
          type="point"
          position="month*temperature"
          size={4}
          shape={"circle"}
          color={"type"}
          style={{
            stroke: "#fff",
            lineWidth: 1
          }}
        />
      </Chart></div>
        

    );
  }
}
export default YearLine;


