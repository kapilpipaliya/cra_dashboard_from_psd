import * as React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const chartOptions: ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  xaxis: {},
  legend: {
    position: "top",
    offsetY: 0,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    row: {
      colors: ["#fff", "#f2f2f2"],
    },
  },
};

const chartSeries: Array<any> = [
  {
    name: "Customers",
    data: [
      [1, 200],
      [2, 400],
      [3, 500],
      [4, 700],
      [5, 600],
      [6, 400],
      [7, 500],
      [8, 400],
      [9, 320],
      [10, 380],
      [11, 500],
      [12, 700],
    ],
  },
  {
    name: "Users",
    data: [
      [1, 300],
      [2, 500],
      [3, 600],
      [4, 800],
      [5, 700],
      [6, 500],
      [7, 600],
      [8, 500],
      [9, 420],
      [10, 480],
      [11, 600],
      [12, 700],
    ],
  },
];

const StackedColumnsCharts = () => (
  <div id="chart">
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      height={320}
    />
  </div>
);

const browserUsagePieChartOptions: ApexOptions = {
  chart: {
    width: 120,
    type: "pie",
  },
  labels: ["Chrome", "Safari", "Firefox"],
  responsive: [
    {
      breakpoint: 280,
      options: {
        chart: {
          width: 100,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const BrowserUsagePieChart = () => (
  <div id="chart">
    <ReactApexChart
      options={browserUsagePieChartOptions}
      series={[60, 30, 10]}
      type="pie"
      width={250}
      height={120}
    />
  </div>
);

export const Activities1 = () => (
  <div className="flex-horizontal activities1">
    <div className="flex-vertical first-column">
      <div className="widget">
        <header className="widget-header">
          <h4 className="widget-title">Activities</h4>
        </header>
        <hr className="widget-separator" />
        <div className="widget-body">
          <div className="streamline">
            <div className="sl-item sl-primary">
              <div className="sl-content">
                <small className="text-muted">23 mins ago</small>
                <p>John has just started working on the project</p>
              </div>
            </div>

            <div className="sl-item sl-danger">
              <div className="sl-content">
                <small className="text-muted">23 mins ago</small>
                <p>Jane sent you invitation to attend the party</p>
              </div>
            </div>

            <div className="sl-item sl-success">
              <div className="sl-content">
                <small className="text-muted">23 mins ago</small>
                <p>Sally added you to her circles</p>
              </div>
            </div>

            <div className="sl-item sl-warning">
              <div className="sl-content">
                <small className="text-muted">23 mins ago</small>
                <p>Sara has finished her task</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="widget google-chart">
        <header className="widget-header">
          <h4 className="widget-title">Activities</h4>
        </header>
        <hr className="widget-separator" />
        <div className="widget-body">
          <div className="flex-horizontal pie-chart">
            <BrowserUsagePieChart />
            <div className="chart-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="second-column">
      <div className="widget google-chart">
        <header className="widget-header">
          <h4 className="widget-title">Analytics</h4>
        </header>
        <hr className="widget-separator" />
        <div className="widget-body">
          <StackedColumnsCharts />
        </div>
      </div>
    </div>
  </div>
);
