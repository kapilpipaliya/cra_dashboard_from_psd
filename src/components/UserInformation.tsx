import * as React from "react";
import clsx from "clsx";

export interface User {
  id: number;
  status: "idle" | "active";
  name: string;
  role: string;
}

export const UserInformation = (props: { user: User }) => {
  const { user } = props;

  return (
    <div className="flex-horizontal user-item">
      <div className="user-avatar">
        <img
          src="https://via.placeholder.com/150"
          className="user-image"
          alt={user.name}
        />
        <div
          className={clsx(
            "user-status-circle",
            user.status === "idle" && "bg-idle",
            user.status === "active" && "bg-active"
          )}
        />
      </div>
      <div className={"flex-vertical user-information"}>
        <div className="flex-vertical">
          <div className="user-name">{user.name}</div>
          <div className="user-role">{user.role}</div>
        </div>
      </div>
    </div>
  );
};
