interface Activities {
  id: number;
  last_time: string;
  description: string;
  activity_classname: string;
}

export const latestActivitiesData: Activities[] = [
  {
    id: 1,
    activity_classname: "sl-primary",
    last_time: "23 mins ago",
    description: "John has just started working on the project",
  },
  {
    id: 2,
    activity_classname: "sl-danger",
    last_time: "23 mins ago",
    description: "Jane sent you invitation to attend the party",
  },
  {
    id: 3,
    activity_classname: "sl-success",
    last_time: "23 mins ago",
    description: "Sally added you to her circles",
  },
  {
    id: 4,
    activity_classname: "sl-warning",
    last_time: "23 mins ago",
    description: "Sara has finished her task",
  },
];
