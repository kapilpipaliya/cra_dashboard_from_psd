import * as React from "react";
import clsx from "clsx";

import { shortcutData } from "./data/shortcut";

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
        <div className="count watermark">
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
