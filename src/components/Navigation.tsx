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
}

export const Navigation = (props: NavigationProps) => {
  const menuDivRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, navigationOptions, isModal } = props;
  useOutSideClick(menuDivRef, isOpen, setIsOpen);

  return (
    <div
      ref={menuDivRef}
      className={clsx(
        "flex-vertical navigation-menu color-black",
        !isOpen && "display-none",
        isModal && "modal"
      )}
    >
      {navigationOptions.map((v) => (
        <React.Fragment key={v.id}>
          {v.divider ? (
            <hr className="divider" />
          ) : (
            <>
              {v.header ? (
                <div className="flex-horizontal flex-align-items-center list-item header">
                  <div>{v.title}</div>
                </div>
              ) : (
                <div className="flex-horizontal flex-align-items-center list-item menu">
                  <span>
                    <i className={v.iconClassName} />
                  </span>
                  <span className="list-title">{v.title}</span>
                  {v.count && (
                    <span
                      className={clsx("list-count", v.countType || "normal")}
                    >
                      {v.count}
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
