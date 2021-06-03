import * as React from "react";
import ReactApexChart from "react-apexcharts";
import clsx from "clsx";

import { latestActivitiesData } from "./data/latestActivities";
import {
  browserUsagePieChartOptions,
  browserUsagePieChartSeries,
} from "./data/browserUsagePieChart";
import {
  customersChartOptions,
  customersChartSeries,
} from "./data/customersChart";

const CustomerBarChart = () => (
  <div id="chart">
    <ReactApexChart
      options={customersChartOptions}
      series={customersChartSeries}
      type="bar"
      height={320}
    />
  </div>
);

const BrowserUsagePieChart = () => (
  <div id="chart">
    <ReactApexChart
      options={browserUsagePieChartOptions}
      series={browserUsagePieChartSeries}
      type="pie"
      width={250}
      height={120}
    />
  </div>
);
export const ActivitiesReport = () => (
  <div className="flex-horizontal activities1">
    <div className="flex-vertical first-column">
      <div className="widget">
        <header className="widget-header">
          <h4 className="widget-title">Activities</h4>
        </header>
        <hr className="widget-separator" />
        <div className="widget-body">
          <div className="streamline">
            {latestActivitiesData.map((activity) => (
              <div
                key={activity.id}
                className={clsx("sl-item", activity.activity_classname)}
              >
                <div className="sl-content">
                  <small className="text-muted">{activity.last_time}</small>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
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
          <CustomerBarChart />
        </div>
      </div>
    </div>
  </div>
);
