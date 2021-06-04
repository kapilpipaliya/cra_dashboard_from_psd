import * as React from "react";
import ReactApexChart from "react-apexcharts";

import { salesChartOptions, salesChartSeries } from "./data/salesChart";

const SalesLineChart = () => (
  <div className="app">
    <div className="mixed-chart">
      <ReactApexChart
        options={salesChartOptions}
        series={salesChartSeries}
        type="line"
        height="280"
      />
    </div>
  </div>
);

export const Sales = () => (
  <div className="widgets-container">
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
        <SalesLineChart />
      </div>
    </div>
  </div>
);
