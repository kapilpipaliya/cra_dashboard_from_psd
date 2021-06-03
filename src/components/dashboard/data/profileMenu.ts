import { NavigationOptionsType } from "../../Navigation";

export const profileMenuOptions: NavigationOptionsType = [
  { id: 1, iconClassName: "fas fa-user", title: "My Profile" },
  { id: 2, iconClassName: "fas fa-euro-sign", title: "Balance" },
  {
    id: 3,
    iconClassName: "fas fa-globe-americas",
    title: "Collections",
    count: 29,
    countType: "normal",
  },
  { id: 4, iconClassName: "fas fa-male", title: "Friends" },
  { id: 5, divider: true },

  { id: 6, iconClassName: "fas fa-calendar-alt", title: "Events" },
  { id: 7, iconClassName: "fas fa-users-cog", title: "Account settings" },
];
