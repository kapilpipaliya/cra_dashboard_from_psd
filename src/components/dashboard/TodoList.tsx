import * as React from "react";

export const TodoList = () => (
  <div className="widget todo-widget">
    <header className="widget-header">
      <h4 className="widget-title">Todo List</h4>
    </header>
    <hr className="widget-separator" />
    <div className="widget-body p-b-0">
      <ul className="todo-list">
        <li className="todo-item">
          <div className="checkbox checkbox-default">
            <input type="checkbox" id="checkbox02" />
            <label htmlFor="checkbox02">
              Record The First Episode Of HTML Tutorial
            </label>
          </div>
        </li>

        <li className="todo-item">
          <div className="checkbox checkbox-pink">
            <input type="checkbox" id="checkbox2" />
            <label htmlFor="checkbox2">Prepare The Conference Schedule</label>
          </div>
        </li>

        <li className="todo-item">
          <div className="checkbox checkbox-warning">
            <input type="checkbox" id="checkbox4" defaultChecked />
            <label htmlFor="checkbox4">Decide The Live Discussion Time</label>
          </div>
        </li>

        <li className="todo-item">
          <div className="checkbox checkbox-success">
            <input type="checkbox" id="checkbox3" defaultChecked />
            <label htmlFor="checkbox3">Prepare For The Next Project</label>
          </div>
        </li>

        <li className="todo-item">
          <div className="checkbox checkbox-danger">
            <input type="checkbox" id="checkbox5" defaultChecked />
            <label htmlFor="checkbox5">Finish Up AngularJs Tutorial</label>
          </div>
        </li>

        <li className="todo-item">
          <div className="checkbox checkbox-purple">
            <input type="checkbox" id="checkbox1" defaultChecked />
            <label htmlFor="checkbox1">Finish Infinity Project</label>
          </div>
        </li>
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
