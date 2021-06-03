interface TodoItem {
  id: string;
  todo: string;
  className: string;
  completed: boolean;
}

export const todoData: TodoItem[] = [
  {
    id: "checkbox1",
    todo: "Record The First Episode Of HTML Tutorial",
    className: "checkbox-default",
    completed: false,
  },

  {
    id: "checkbox2",
    todo: "Prepare The Conference Schedule",
    className: "checkbox-pink",
    completed: false,
  },

  {
    id: "checkbox3",
    todo: "Decide The Live Discussion Time",
    className: "checkbox-warning",
    completed: true,
  },

  {
    id: "checkbox4",
    todo: "Prepare For The Next Project",
    className: "checkbox-success",
    completed: true,
  },

  {
    id: "checkbox5",
    todo: "Finish Up AngularJs Tutorial",
    className: "checkbox-danger",
    completed: true,
  },

  {
    id: "checkbox6",
    todo: "Finish Infinity Project",
    className: "checkbox-purple",
    completed: true,
  },
];
