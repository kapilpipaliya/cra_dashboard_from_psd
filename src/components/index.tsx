import * as React from "react";
import { useState } from "react";
import clsx from "clsx";

import { Menu } from "./dashboard/Menu";
import { Navbar } from "./dashboard/Navbar";
import { WelcomeToInfinity } from "./dashboard/WelcomeToInfinity";
import { ShortcutFeature } from "./dashboard/ShortcutFeature";
import { Sales } from "./dashboard/Sales";
import { ActiveLeads } from "./dashboard/ActiveLeads";
import { ActivitiesReport } from "./dashboard/ActivitiesReport";
import { Footer } from "./dashboard/Footer";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div>
        <Navbar sidebarOpen={sidebarOpen} />
        <div
          className={clsx(
            "flex-grow-1 dashboard-content",
            sidebarOpen ? "shift-right" : ""
          )}
        >
          <WelcomeToInfinity />
          <ShortcutFeature />
          <Sales />
          <ActiveLeads />
          <ActivitiesReport />
          <Footer />
        </div>
      </div>
    </>
  );
};
