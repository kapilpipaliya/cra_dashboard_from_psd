import * as React from "react";
import clsx from "clsx";

interface CardProps {
  title: string;
  subtitle: string;
  iconClassName: string;
  variant: "normal" | "warning" | "success" | "danger";
}

const Card = (props: CardProps) => {
  const { title, subtitle, iconClassName, variant } = props;
  return (
    <div className="flex-vertical widget card">
      <div className="flex-horizontal flex-align-items-center top-part">
        <div className="flex-vertical">
          <h3 className={clsx("widget-title", variant)}>{title}</h3>
          <div className="subtitle">{subtitle}</div>
        </div>
        <div className="count">
          <i className={iconClassName} />
        </div>
      </div>
      <div className={clsx("flex-horizontal footer", variant)}>
        <div className="change">% change</div>
        <i className="fas fa-chart-bar" />
      </div>
    </div>
  );
};

interface ShortcutData {
  title: string;
  subtitle: string;
  iconClassName: string;
  variant: "normal" | "warning" | "success" | "danger";
}
const shortcutData: ShortcutData[] = [
  {
    title: "66,163K",
    subtitle: "Total Leads",
    iconClassName: "fas fa-shopping-bag",
    variant: "normal",
  },
  {
    title: "3,490K",
    subtitle: "Total Pending",
    iconClassName: "far fa-times-circle",
    variant: "danger",
  },
  {
    title: "38,372K",
    subtitle: "Case Closed",
    iconClassName: "fas fa-lock",
    variant: "success",
  },
  {
    title: "5,355K",
    subtitle: "Task Completed",
    iconClassName: "fas fa-paste",
    variant: "warning",
  },
];

export const ShortcutFeature = () => (
  <div className="flex-horizontal shortcut-feature">
    {shortcutData.map((shortcut) => (
      <Card
        title={shortcut.title}
        subtitle={shortcut.subtitle}
        iconClassName={shortcut.iconClassName}
        variant={shortcut.variant}
      />
    ))}
  </div>
);