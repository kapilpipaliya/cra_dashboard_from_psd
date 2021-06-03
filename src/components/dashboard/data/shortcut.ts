interface ShortcutData {
  id: number;
  title: string;
  subtitle: string;
  iconClassName: string;
  variant: "normal" | "warning" | "success" | "danger";
}

export const shortcutData: ShortcutData[] = [
  {
    id: 1,
    title: "66,163K",
    subtitle: "Total Leads",
    iconClassName: "fas fa-shopping-bag",
    variant: "normal",
  },
  {
    id: 2,
    title: "3,490K",
    subtitle: "Total Pending",
    iconClassName: "far fa-times-circle",
    variant: "danger",
  },
  {
    id: 3,
    title: "38,372K",
    subtitle: "Case Closed",
    iconClassName: "fas fa-lock",
    variant: "success",
  },
  {
    id: 4,
    title: "5,355K",
    subtitle: "Task Completed",
    iconClassName: "fas fa-paste",
    variant: "warning",
  },
];
