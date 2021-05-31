import * as React from "react";
import { useState } from "react";
import "./Navbar.scss";
import Brand from "../../images/Brand.png";
import clsx from "clsx";

interface NavbarProps {}
export const Navbar = (props: NavbarProps) => {
  const [profileMenu, setProfilemenu] = useState(false);
  const [followerseMenu, setFollowersemenu] = useState(true);

  return (
    <div className="flex-horizontal">
      <div className="bg-blue color-white flex-align-items-center flex-horizontal logo">
        <img src={Brand} />
        <h1>Infinity</h1>
      </div>
      <div className="flex-align-items-center  flex-grow flex-horizontal bg-light-blue color-white header-nav">
        <h3>Dashbaord</h3>
        <div className="flex-grow">
          <div className="flex-horizontal flex-justify-content-end">
            <div
              className="bedge profile-menu-container cursor-pointer"
              onClick={() => setProfilemenu((prevState) => !prevState)}
            >
              <i className="far fa-bell"></i>
              <span className="badge-item">3</span>
              <Navigation visible={profileMenu} />
            </div>
            <div
              className="bedge followers-menu-container cursor-pointer"
              onClick={() => setFollowersemenu((prevState) => !prevState)}
            >
              <i className="far fa-envelope"></i>
              <span className="badge-item">4</span>
              <Followers visible={followerseMenu} />
            </div>
            <div className="bedge">
              <i className="fas fa-search"></i>
            </div>
            <div className="bedge">
              <i className="fas fa-th"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavigationProps {
  visible: boolean;
}
export const Navigation = (props: NavigationProps) => {
  return (
    <div
      className={clsx(
        "flex-vertical navigation-menu color-black",
        !props.visible && "display-none"
      )}
    >
      <div className="flex-horizontal list-item">
        <span>
          <i className="fas fa-user"></i>
        </span>
        <span className="list-title">My profile</span>
      </div>
      <div className="flex-horizontal list-item">
        <span>
          <i className="fas fa-euro-sign"></i>
        </span>
        <span className="list-title">Balance</span>
      </div>
      <div className="flex-horizontal list-item">
        <span>
          <i className="fas fa-user"></i>
        </span>
        <span className="list-title">Collections</span>
        <span className="list-count">29</span>
      </div>
      <div className="flex-horizontal list-item">
        <span>
          <i className="fas fa-globe-americas"></i>
        </span>
        <span className="list-title">Friends</span>
      </div>
      <hr className="divider" />
      <div className="flex-horizontal list-item">
        <span>
          <i className="fas fa-male"></i>
        </span>
        <span className="list-title">Events</span>
      </div>
      <div className="flex-horizontal list-item">
        <span>
          <i className="fas fa-users-cog"></i>
        </span>
        <span className="list-title">Account settings</span>
      </div>
    </div>
  );
};

interface FollowersProps {
  visible: boolean;
}
const users = [
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
  {
    id: 13,
    status: "idle",
    name: "Chris Fox",
    role: "Designer, Blogger",
  },
  {
    id: 14,
    status: "idle",
    name: "Mohmed Said",
    role: "UI/UX Developer",
  },
  {
    id: 15,
    status: "active",
    name: "Mogen Polish",
    role: "Art Director, Movie cutter",
  },
];
export const Followers = (props: FollowersProps) => {
  return (
    <div
      className={clsx(
        "flex-vertical followers-menu color-black",
        !props.visible && "display-none"
      )}
    >
      <div className="header flex-vertical flex-justify-content-center">
        Followers
      </div>
      {users.map((u) => (
        <div key={u.id}>
          <div className="flex-horizontal user-item">
            <div className="user-avatar">
              <img
                src="http://pinegrow.com/placeholders/img12.jpg"
                className="user-image"
              />
              <div
                className={clsx(
                  "user-status-circle",
                  u.status == "idle" && "bg-idle",
                  u.status === "active" && "bg-active"
                )}
              ></div>
            </div>
            <div className={"flex-vertical user-information"}>
              <div className="user-name">{u.name}</div>
              <div className="user-role">{u.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
