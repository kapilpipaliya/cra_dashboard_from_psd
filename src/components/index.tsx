import * as React from "react";
import { Menu } from "./dashboard/Menu";
import { Navbar } from "./dashboard/Navbar";
import { WelcomeToInfinity } from "./dashboard/WelcomeToInfinity";
import { ShortcutFuther } from "./dashboard/ShortcutFuther";
import { SalesIn2014 } from "./dashboard/SalesIn2014";
import { ActiveLeads } from "./dashboard/ActiveLeads";
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
          <SalesIn2014 />
          <ActiveLeads />
        </div>
      </div>
    </>
  );
};
