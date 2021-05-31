import * as React from "react";
import { useRef } from "react";
import { useOutSideClick } from "../hooks/useOutSideClick";
import clsx from "clsx";

export type NavigationOptionsType = {
  id: number;
  iconClassName?: string;
  title?: string;
  count?: number;
  countType?: string;
  divider?: boolean;
}[];

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  navigationOptions: NavigationOptionsType;
}

export const Navigation = (props: NavigationProps) => {
  const menuDivRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, navigationOptions } = props;
  useOutSideClick(menuDivRef, isOpen, setIsOpen);
  return (
    <div
      ref={menuDivRef}
      className={clsx(
        "flex-vertical navigation-menu color-black",
        !isOpen && "display-none"
      )}
    >
      {navigationOptions.map((v) => (
        <React.Fragment key={v.id}>
          {v.divider ? (
            <hr className="divider" />
          ) : (
            <div className="flex-horizontal list-item">
              <span>
                <i className={v.iconClassName} />
              </span>
              <span className="list-title">{v.title}</span>
              {v.count && <span className="list-count">{v.count}</span>}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
