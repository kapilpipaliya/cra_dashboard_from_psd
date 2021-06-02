import * as React from "react";
import { useState } from "react";
import clsx from "clsx";
import { Menu } from "./dashboard/Menu";
import { Navbar } from "./dashboard/Navbar";
import { WelcomeToInfinity } from "./dashboard/WelcomeToInfinity";
import { ShortcutFeature } from "./dashboard/ShortcutFeature";
import { SalesIn2014 } from "./dashboard/SalesIn2014";
import { ActiveLeads } from "./dashboard/ActiveLeads";
import { Activities1 } from "./dashboard/Activities1";
import { Footer } from "./dashboard/Footer";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-horizontal">
        <Navbar sidebarOpen={sidebarOpen} />
        <div
          className={clsx(
            "flex-grow-1 dashboard-content",
            sidebarOpen ? "shift-right" : ""
          )}
        >
          <WelcomeToInfinity />
          <ShortcutFeature />
          <SalesIn2014 />
          <ActiveLeads />
          <Activities1 />
          <Footer />
        </div>
      </div>
    </>
  );
};
