import * as React from "react";
import { useRef, useState } from "react";
import clsx from "clsx";

import { useOutSideClick } from "../../hooks/useOutSideClick";
import { Navigation } from "../Navigation";
import { UserInformation } from "../UserInformation";

import { profileMenuOptions } from "./data/profileMenu";
import { followers } from "./data/followers";

import "./Dashboard.scss";

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
        <i className="fas fa-bars" />
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
              navigationOptions={profileMenuOptions}
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

export const Followers = (props: FollowersProps) => {
  const menuDivRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = props;
  useOutSideClick(menuDivRef, isOpen, setIsOpen);

  return (
    <div
      ref={menuDivRef}
      className={clsx(
        "flex-vertical",
        !isOpen && "display-none",
        "modal",
        "followers-menu"
      )}
    >
      <div className="header flex-vertical flex-justify-content-center">
        Followers
      </div>
      {followers.map((user) => (
        <div key={user.id}>
          <UserInformation user={user} />
        </div>
      ))}
    </div>
  );
};
