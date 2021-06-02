import * as React from "react";
import clsx from "clsx";
import { UserInformation } from "../UserInformation";
import { Navigation, NavigationOptionsType } from "../Navigation";

const navigationOptions: NavigationOptionsType = [
  { id: 0, header: true, title: "UI Kits" },
  { id: 1, iconClassName: "fas fa-home", title: "Dashboard" },
  {
    id: 2,
    iconClassName: "fas fa-poo-storm",
    title: "Apps",
    count: 3,
    countType: "danger",
  },
  {
    id: 3,
    iconClassName: "fas fa-globe-americas",
    title: "Components",
    count: 9,
    countType: "success",
  },
  {
    id: 4,
    iconClassName: "fas fa-envelope",
    title: "EMAIL",
    count: 4,
    countType: "normal",
  },
  { id: 5, iconClassName: "far fa-newspaper", title: "Form" },
  { id: 6, iconClassName: "fas fa-map", title: "Maps" },
  {
    id: 7,
    iconClassName: "far fa-copy",
    title: "Pages",
    count: 8,
    countType: "danger",
  },
  { id: 8, iconClassName: "fas fa-sliders-h", title: "Menu" },
  { id: 9, divider: true },
  { id: 10, iconClassName: "fas fa-cog", title: "Settings" },
  {
    id: 11,
    iconClassName: "fas fa-file-signature",
    title: "Document",
    count: 2,
    countType: "normal",
  },
  { id: 12, iconClassName: "far fa-file-alt", title: "HTML Version" },
];

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
          <i className="fab fa-gg-circle"></i>
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
