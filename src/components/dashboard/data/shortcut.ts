interface ShortcutData {
  title: string;
  subtitle: string;
  iconClassName: string;
  variant: "normal" | "warning" | "success" | "danger";
}

export const shortcutData: ShortcutData[] = [
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
