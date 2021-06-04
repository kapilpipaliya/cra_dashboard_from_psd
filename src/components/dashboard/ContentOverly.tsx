import * as React from "react";
import clsx from "clsx";

interface ContentOverlyProps {
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
}
export const ContentOverly = (props: ContentOverlyProps) => {
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <div
      className={clsx(sidebarOpen && "disable-content-overlay")}
      onClick={() => setSidebarOpen(false)}
    />
  );
};
