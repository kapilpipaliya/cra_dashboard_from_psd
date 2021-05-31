import * as React from "react";
import { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import Brand from "../../images/Brand.png";
import clsx from "clsx";

export const Navbar = () => {
  const [profileMenu, setProfilemenu] = useState(false);
  const [followerseMenu, setFollowersemenu] = useState(false);

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
              <Navigation isOpen={profileMenu} setIsOpen={setProfilemenu} />
            </div>
            <div className="bedge followers-menu-container ">
              <i className="far fa-envelope"></i>
              <span className="badge-item">4</span>
            </div>
            <div className="bedge">
              <i className="fas fa-search"></i>
            </div>
            <div
              className="bedge cursor-pointer"
              onClick={() => setFollowersemenu((prevState) => !prevState)}
            >
              <i className="fas fa-th"></i>
              <Followers
                isOpen={followerseMenu}
                setIsOpen={setFollowersemenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const useOutSideClick = (
  ref: React.MutableRefObject<HTMLElement | null>,
  isOpen: boolean,
  setIsOpen: (v: boolean) => void
) => {
  useEffect(() => {
    if (isOpen) {
      const outSideHandler = (event: MouseEvent) => {
        const el = ref.current;
        if (el && !el.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", outSideHandler);
      return () => document.removeEventListener("click", outSideHandler);
    }
  }, [isOpen]);
};
interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}
export const Navigation = (props: NavigationProps) => {
  const menuDivRef = useRef<HTMLDivElement>(null);
  useOutSideClick(menuDivRef, props.isOpen, props.setIsOpen);
  return (
    <div
      ref={menuDivRef}
      className={clsx(
        "flex-vertical navigation-menu color-black",
        !props.isOpen && "display-none"
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
          <i className="fas fa-globe-americas"></i>
        </span>
        <span className="list-title">Collections</span>
        <span className="list-count">29</span>
      </div>
      <div className="flex-horizontal list-item">
        <span>
          <i className="fas fa-male"></i>
        </span>
        <span className="list-title">Friends</span>
      </div>
      <hr className="divider" />
      <div className="flex-horizontal list-item">
        <span>
          <i className="far fa-calendar-alt"></i>
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
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
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
  const menuDivRef = useRef<HTMLDivElement>(null);
  useOutSideClick(menuDivRef, props.isOpen, props.setIsOpen);
  return (
    <div
      ref={menuDivRef}
      className={clsx(
        "flex-vertical followers-menu color-black",
        !props.isOpen && "display-none"
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
                src="https://via.placeholder.com/150"
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
              <div className="flex-vertical">
                <div className="user-name">{u.name}</div>
                <div className="user-role">{u.role}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
