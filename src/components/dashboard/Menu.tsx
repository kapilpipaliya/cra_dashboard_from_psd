import * as React from "react";
import { useRef, useState } from "react";
import clsx from "clsx";

import { useOutSideClick } from "../../hooks/useOutSideClick";
import { Navigation, NavigationOptionsType } from "../Navigation";
import { User, UserInformation } from "../UserInformation";

import "./Dashboard.scss";

const navigationOptions: NavigationOptionsType = [
  { id: 1, iconClassName: "fas fa-user", title: "My Profile" },
  { id: 2, iconClassName: "fas fa-euro-sign", title: "Balance" },
  {
    id: 3,
    iconClassName: "fas fa-globe-americas",
    title: "Collections",
    count: 29,
    countType: "normal",
  },
  { id: 4, iconClassName: "fas fa-male", title: "Friends" },
  { id: 5, divider: true },

  { id: 6, iconClassName: "fas fa-calendar-alt", title: "Events" },
  { id: 7, iconClassName: "fas fa-users-cog", title: "Account settings" },
];

interface MenuProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = (props: MenuProps) => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [followersMenu, setFollowersMenu] = useState(false);
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <div
      className={clsx(
        "flex-horizontal flex-align-items-center  flex-grow-1 bg-light-blue color-white header-nav",
        sidebarOpen ? "shift-right" : ""
      )}
    >
      <span
        className="hamburger-box"
        onClick={() => setSidebarOpen((prevState) => !prevState)}
      >
        <i className="fas fa-bars"></i>
      </span>
      <h5>Dashboard</h5>
      <div className="flex-grow-1">
        <div className="flex-horizontal flex-justify-content-end menu-actions">
          <div className="bedge profile-menu-container cursor-pointer">
            <i
              className="icon far fa-bell"
              onClick={() => setProfileMenu((prevState) => !prevState)}
            />
            <span
              className="icon badge-item"
              onClick={() => setProfileMenu((prevState) => !prevState)}
            >
              3
            </span>
            <Navigation
              isOpen={profileMenu}
              setIsOpen={setProfileMenu}
              navigationOptions={navigationOptions}
              isModal
            />
          </div>
          <div className="bedge followers-menu-container ">
            <i className="icon far fa-envelope" />
            <span className="badge-item">4</span>
          </div>
          <div className="bedge">
            <i className="icon fas fa-search" />
          </div>
          <div className="bedge cursor-pointer">
            <i
              className="icon fas fa-th"
              onClick={() => setFollowersMenu((prevState) => !prevState)}
            />
            <Followers isOpen={followersMenu} setIsOpen={setFollowersMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FollowersProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const users: User[] = [
  {
    id: 1,
    status: "idle",
    name: "Chris Fox",
    role: "Designer, Blogger",
  },
  {
    id: 2,
    status: "idle",
    name: "Mohmed Said",
    role: "UI/UX Developer",
  },
  {
    id: 3,
    status: "active",
    name: "Mogen Polish",
    role: "Art Director, Movie cutter",
  },
  {
    id: 4,
    status: "idle",
    name: "Chris Fox",
    role: "Designer, Blogger",
  },
  {
    id: 5,
    status: "idle",
    name: "Mohmed Said",
    role: "UI/UX Developer",
  },
  {
    id: 6,
    status: "active",
    name: "Mogen Polish",
    role: "Art Director, Movie cutter",
  },
  {
    id: 7,
    status: "idle",
    name: "Chris Fox",
    role: "Designer, Blogger",
  },
  {
    id: 8,
    status: "idle",
    name: "Mohmed Said",
    role: "UI/UX Developer",
  },
  {
    id: 9,
    status: "active",
    name: "Mogen Polish",
    role: "Art Director, Movie cutter",
  },
  {
    id: 10,
    status: "idle",
    name: "Chris Fox",
    role: "Designer, Blogger",
  },
  {
    id: 11,
    status: "idle",
    name: "Mohmed Said",
    role: "UI/UX Developer",
  },
  {
    id: 12,
    status: "active",
    name: "Mogen Polish",
    role: "Art Director, Movie cutter",
  },
];

export const Followers = (props: FollowersProps) => {
  const menuDivRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = props;
  useOutSideClick(menuDivRef, isOpen, setIsOpen);

  return (
    <div
      ref={menuDivRef}
      className={clsx(
        "flex-vertical color-black ",
        !isOpen && "display-none",
        "modal",
        "followers-menu"
      )}
    >
      <div className="header flex-vertical flex-justify-content-center">
        Followers
      </div>
      {users.map((user) => (
        <div key={user.id}>
          <UserInformation user={user} />
        </div>
      ))}
    </div>
  );
};
