import { ApexOptions } from "apexcharts";

export const customersChartOptions: ApexOptions = {
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

export const customersChartSeries: Array<any> = [
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