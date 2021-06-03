import * as React from "react";
import { useRef } from "react";
import clsx from "clsx";
import { useOutSideClick } from "../hooks/useOutSideClick";

export type NavigationOptionsType = {
  id: number;
  iconClassName?: string;
  title?: string;
  count?: number;
  countType?: "normal" | "warning" | "success" | "danger";
  divider?: boolean;
  header?: boolean;
}[];

interface NavigationProps {
  isOpen?: boolean;
  setIsOpen?: (v: boolean) => void;
  navigationOptions: NavigationOptionsType;
  isModal?: boolean;
  className?: string;
}

export const Navigation = (props: NavigationProps) => {
  const menuDivRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, navigationOptions, isModal, className } = props;
  useOutSideClick(menuDivRef, isOpen, setIsOpen);

  return (
    <div
      ref={menuDivRef}
      className={clsx(
        "flex-vertical navigation-menu color-black",
        isOpen === false && "display-none",
        isModal && "modal",
        className
      )}
    >
      {navigationOptions.map((navItem) => (
        <React.Fragment key={navItem.id}>
          {navItem.divider ? (
            <hr className="divider" />
          ) : (
            <>
              {navItem.header ? (
                <div className="flex-horizontal flex-align-items-center list-item header">
                  <div>{navItem.title}</div>
                </div>
              ) : (
                <div className="flex-horizontal flex-align-items-center list-item menu">
                  <span>
                    <i className={navItem.iconClassName} />
                  </span>
                  <span className="list-title">{navItem.title}</span>
                  {navItem.count && (
                    <span
                      className={clsx(
                        "list-count",
                        navItem.countType || "normal"
                      )}
                    >
                      {navItem.count}
                    </span>
                  )}
                </div>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
