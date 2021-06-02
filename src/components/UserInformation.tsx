import * as React from "react";
import clsx from "clsx";

export interface User {
  id: number;
  status: "idle" | "active";
  name: string;
  role: string;
}

export const UserInformation = (props: { user: User }) => (
  <div className="flex-horizontal user-item">
    <div className="user-avatar">
      <img
        src="https://via.placeholder.com/150"
        className="user-image"
        alt={props.user.name}
      />
      <div
        className={clsx(
          "user-status-circle",
          props.user.status === "idle" && "bg-idle",
          props.user.status === "active" && "bg-active"
        )}
      />
    </div>
    <div className={"flex-vertical user-information"}>
      <div className="flex-vertical">
        <div className="user-name">{props.user.name}</div>
        <div className="user-role">{props.user.role}</div>
      </div>
    </div>
  </div>
);
