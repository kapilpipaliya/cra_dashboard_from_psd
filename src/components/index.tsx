import * as React from "react";
import { Menu } from "./dashboard/Menu";
import { Navbar } from "./dashboard/Navbar";
interface DashboardProps {}

export const Dashboard = (props: DashboardProps) => {
  return (
    <>
      <Menu />
      <Navbar />
    </>
  );
};
