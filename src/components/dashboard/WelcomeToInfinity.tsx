import * as React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  count: number;
}

const Card = (props: CardProps) => {
  const { title, subtitle, count } = props;

  return (
    <div className="flex-horizontal flex-align-items-center widget card">
      <div className="flex-vertical">
        <h3 className="widget-title">{title}</h3>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="count">{count}</div>
    </div>
  );
};

export const WelcomeToInfinity = () => (
  <div className="widgets-container">
    <div className="flex-horizontal welcome-container">
      <Card
        title="Welcome to Infinity"
        subtitle="Number Of Views"
        count={102}
      />
      <Card title="Active" subtitle="Leads/Contacts" count={325} />
    </div>
  </div>
);
