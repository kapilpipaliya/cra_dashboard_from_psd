import * as React from "react";
import Chart from "react-apexcharts";
type ChartProps = React.ComponentProps<typeof Chart>;
const chartData: ChartProps = {
  series: [
    {
      name: "Likes",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp!), "dd MMM");
        },
      },
    },
    title: {
      text: "Social Media",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      colors: ["#FFA41B"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: -10,
      max: 40,
      title: {
        text: "Engagement",
      },
    },
  },
};

const App = () => {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="500"
            height="230"
          />
        </div>
      </div>
    </div>
  );
};

interface SalesIn2014Props {}
export const SalesIn2014 = (props: SalesIn2014Props) => {
  return (
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
        <App />
      </div>
    </div>
  );
};
