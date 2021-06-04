import { ApexOptions } from "apexcharts";

export const browserUsagePieChartOptions: ApexOptions = {
  chart: {
    width: 120,
    type: "pie",
  },
  labels: ["Chrome", "Safari", "Firefox"],
  responsive: [
    {
      breakpoint: 800,
      options: {
        chart: {
          height: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
export const browserUsagePieChartSeries: Array<any> = [60, 30, 10];
