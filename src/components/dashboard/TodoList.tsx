import * as React from "react";
import clsx from "clsx";

import { todoData } from "./data/todo";

interface TodoItemProps {
  id: string;
  todo: string;
  className?: string;
  defaultChecked?: boolean;
}

const TodoItem = (props: TodoItemProps) => {
  const { id, todo, className, defaultChecked } = props;
  return (
    <li className="todo-item">
      <div className={clsx("checkbox", className)}>
        <input type="checkbox" id={id} defaultChecked={defaultChecked} />
        <label htmlFor={id}>{todo}</label>
      </div>
    </li>
  );
};

export const TodoList = () => (
  <div className="widget todo-widget">
    <header className="widget-header">
      <h4 className="widget-title">Todo List</h4>
    </header>
    <hr className="widget-separator" />
    <div className="widget-body p-b-0">
      <ul className="todo-list">
        {todoData.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            className={todo.className}
            defaultChecked={todo.completed}
          />
        ))}
      </ul>
    </div>
    <div className="new-todo">
      <input type="text" placeholder="add new task" />
    </div>
    <footer className="widget-footer flex-horizontal todo-footer">
      <a className="btn btn-success m-r-md">All</a>
      <a className="btn btn-default">Archive</a>
      <a className="btn btn-default clear-button">Clear completed</a>
    </footer>
  </div>
);
