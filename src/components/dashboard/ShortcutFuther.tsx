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
    <div className="flex-vertical card">
      <div className="flex-horizontal flex-align-items-center">
        <div className="flex-vertical">
          <div className={clsx("title", variant)}>{title}</div>
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
export const ShortcutFuther = () => {
  return (
    <div className="flex-horizontal shortcut-feature">
      <Card
        title="66,163K"
        subtitle="Total Leads"
        iconClassName="fas fa-shopping-bag"
        variant="normal"
      />
      <Card
        title="3,490K"
        subtitle="Total Pending"
        iconClassName="far fa-times-circle"
        variant="danger"
      />
      <Card
        title="38,372K"
        subtitle="Case Closed"
        iconClassName="fas fa-lock"
        variant="success"
      />
      <Card
        title="5,355K"
        subtitle="Task Completed"
        iconClassName="fas fa-paste"
        variant="warning"
      />
    </div>
  );
};
