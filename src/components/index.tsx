import * as React from "react";

import { Menu } from "./dashboard/Menu";
import { Navbar } from "./dashboard/Navbar";
import { WelcomeToInfinity } from "./dashboard/WelcomeToInfinity";
import { ShortcutFeature } from "./dashboard/ShortcutFeature";
import { SalesIn2014 } from "./dashboard/SalesIn2014";
import { ActiveLeads } from "./dashboard/ActiveLeads";
import { Activities1 } from "./dashboard/Activities1";
import { Footer } from "./dashboard/Footer";

export const Dashboard = () => (
  <>
    <Menu />
    <div className="flex-horizontal">
      <Navbar />
      <div className="flex-grow-1 dashboard-content">
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
