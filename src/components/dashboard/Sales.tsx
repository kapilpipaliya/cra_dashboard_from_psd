import * as React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const chartSeries: Array<any> = [
  {
    name: "TEAM A",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
  },
];

const chartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    width: [5],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    "01/01/2003",
    "02/01/2003",
    "03/01/2003",
    "04/01/2003",
    "05/01/2003",
    "06/01/2003",
    "07/01/2003",
    "08/01/2003",
    "09/01/2003",
    "10/01/2003",
    "11/01/2003",
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    title: {
      text: "Points",
    },
    min: 0,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (yValue) {
        if (typeof yValue !== "undefined") {
          return yValue.toFixed(0) + " points";
        }
        return yValue;
      },
    },
  },
};

const BarChart = () => (
  <div className="app">
    <div className="mixed-chart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height="280"
      />
    </div>
  </div>
);

export const Sales = () => (
  <div className="flex-horizontal sales-in-2014 widget">
    <div className="first-column">
      <div>
        <h3 className="widget-title">Sales in 2014</h3>
        <p className="">
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits
        </p>
      </div>
    </div>

    <div className="second-column">
      <BarChart />
    </div>
  </div>
);
