import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./Stats.css";

const Stats = () => {
  const list = JSON.parse(localStorage.getItem("formdata"));
  //console.log(list);

  const genderCounts = [
    { gender: "male", count: 0 },
    { gender: "female", count: 0 },
    { gender: "others", count: 0 },
  ];
  const countryCounts = [
    { country: "India", count: 0 },
    { country: "Australia", count: 0 },
    { country: "USA", count: 0 },
    { country: "England", count: 0 },
  ];
  const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

  if(list.length)
  {
    for (let i = 0; i < list.length; i++) {
    if (list[i].gender == "male") {
      genderCounts[0].count = genderCounts[0].count + 1;
    } else if (list[i].gender == "female") {
      genderCounts[1].count = genderCounts[1].count + 1;
    } else {
      genderCounts[2].count = genderCounts[2].count + 1;
    }

    if (list[i].location == "India") {
      countryCounts[0].count = countryCounts[0].count + 1;
    } else if (list[i].location == "Australia") {
      countryCounts[1].count = countryCounts[1].count + 1;
    } else if (list[i].location == "USA") {
      countryCounts[2].count = countryCounts[2].count + 1;
    } else {
      countryCounts[3].count = countryCounts[3].count + 1;
    }
  }}
  //console.log(genderCounts, countryCounts);

  return (
    <div className="graph-container">
      <div className="bar-graph">
        <h3>Gender Insights</h3>
        <BarChart
          margin={{ top: 100, right: 30, left: 20, bottom: 50 }}
          width={400}
          height={400}
          data={genderCounts}
        >
          <XAxis dataKey="gender" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            barSize={50}
            fill="#8884d8"
            label={({ count }) => count}
          />
        </BarChart>
      </div>
      <div className="pie-chart">
        <h3>Nationality Insights</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={countryCounts}
            dataKey="count"
            nameKey="country"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          >
            {countryCounts.map((entry, index) => (
              <>
                <h3>{entry}</h3>
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              </>
            ))}
          </Pie>
          <Tooltip/>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
