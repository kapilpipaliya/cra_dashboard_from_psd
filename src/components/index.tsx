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
import { ContentOverly } from "./dashboard/ContentOverly";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > 800);
  return (
    <>
      <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div>
        <Navbar sidebarOpen={sidebarOpen} />
        <ContentOverly
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div
          className={clsx(
            "flex-grow-1 dashboard-content",
            sidebarOpen ? "shift-right-desktop" : ""
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
