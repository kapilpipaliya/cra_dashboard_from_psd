import * as React from "react";
import clsx from "clsx";

import { UserInformation } from "../UserInformation";
import { Navigation } from "../Navigation";

import { navigationOptions } from "./data/navigation";

interface NavbarProps {
  sidebarOpen: boolean;
}

export const Navbar = (props: NavbarProps) => {
  const { sidebarOpen } = props;

  return (
    <div className={clsx("side-bar", sidebarOpen ? "menubar-in" : "")}>
      <a
        href="/"
        className="bg-blue color-white flex-align-items-center flex-horizontal logo"
      >
        <span className="brand-icon">
          <i className="fab fa-gg-circle" />
        </span>
        <span className="brand-name">Infinity</span>
      </a>
      <div
        className={clsx(
          "flex-vertical flex-justify-content-center current-user"
        )}
      >
        <UserInformation
          user={{
            id: 1,
            status: "active",
            role: "Founder of App",
            name: "MOHAMED SAID",
          }}
        />
      </div>
      <Navigation
        isOpen={true}
        setIsOpen={() => 0}
        navigationOptions={navigationOptions}
        isModal={false}
      />
    </div>
  );
};
