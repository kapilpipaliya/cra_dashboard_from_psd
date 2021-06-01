import * as React from "react";
import { Menu } from "./dashboard/Menu";
import { Navbar } from "./dashboard/Navbar";
import { WelcomeToInfinity } from "./dashboard/WelcomeToInfinity";
import { ShortcutFuther } from "./dashboard/ShortcutFuther";
interface DashboardProps {}

export const Dashboard = (props: DashboardProps) => {
  return (
    <>
      <Menu />
      <div className="flex-horizontal">
        <Navbar />
        <div className="flex-grow-1 dashboard-content">
          <WelcomeToInfinity />
          <ShortcutFuther />
        </div>
      </div>
    </>
  );
};
