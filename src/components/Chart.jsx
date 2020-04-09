import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip, 
  Legend
} from "recharts";

const Chart = ({ sparklineData }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
  //   <LineChart
  //   layout="vertical"
  //   width={500}
  //   height={300}
  //   data={formattedData}
  //   margin={{
  //     top: 20, right: 30, left: 20, bottom: 5,
  //   }}
  // >
  //   <CartesianGrid stroke="white" strokeDasharray="3 3"  />
  //   <XAxis dataKey="date" interval={3} />
  //   <YAxis  />
  //   <Tooltip />
  //   <Legend />
  //   <Line type ="monotone" dataKey="value" stroke="#8884d8" />

  // </LineChart>
  //   );
  // }


    <LineChart width={1100} height={300} data={formattedData}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;
