import * as React from "react";
import clsx from "clsx";

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
        <TodoItem
          id="checkbox1"
          todo="Record The First Episode Of HTML Tutorial"
          className="checkbox-default"
        />
        <TodoItem
          id="checkbox2"
          todo="Prepare The Conference Schedule"
          className="checkbox-pink"
        />
        <TodoItem
          id="checkbox3"
          todo="Decide The Live Discussion Time"
          className="checkbox-warning"
          defaultChecked
        />
        <TodoItem
          id="checkbox4"
          todo="Prepare For The Next Project"
          className="checkbox-success"
          defaultChecked
        />
        <TodoItem
          id="checkbox5"
          todo="Finish Up AngularJs Tutorial"
          className="checkbox-danger"
          defaultChecked
        />
        <TodoItem
          id="checkbox6"
          todo="Finish Infinity Project"
          className="checkbox-purple"
          defaultChecked
        />
      </ul>
    </div>
    <div className="new-todo">
      <input type="text" placeholder="add new task" />
    </div>
    <footer className="widget-footer">
      <a className="btn btn-success m-r-md">All</a>
      <a className="btn btn-default">Archive</a>
      <a className="btn btn-default pull-right">Clear completed</a>
    </footer>
  </div>
);
