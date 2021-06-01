import * as React from "react";

export const ActiveLeads = () => {
  return (
    <div className="flex-horizontal active-leads">
      <div className="first-column">
        <div className="widget">
          <header className="widget-header">
            <h4 className="widget-title">Active Leads</h4>
          </header>
          <hr className="widget-separator" />
          <div className="widget-body">
            <table className="table no-cellborder">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Lead Name</th>
                  <th>Views</th>
                  <th>Favorites</th>
                  <th>Last Visit</th>
                  <th>Last Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-primary">Buyer</td>
                  <td>Denise Ann</td>
                  <td>150</td>
                  <td>150</td>
                  <td>9:23 AM</td>
                  <td>
                    <span className="table-icon fa fa-envelope"></span>{" "}
                    11/9/2015
                  </td>
                </tr>
                <tr>
                  <td className="text-primary">Buyer</td>
                  <td>Denise Ann</td>
                  <td>150</td>
                  <td>202</td>
                  <td>9:23 AM</td>
                  <td>
                    <span className="table-icon fa fa-envelope"></span>{" "}
                    11/9/2015
                  </td>
                </tr>
                <tr>
                  <td className="text-success">Landlord</td>
                  <td>Denise Ann</td>
                  <td>150</td>
                  <td>313</td>
                  <td>9:23 AM</td>
                  <td>
                    <span className="table-icon fa fa-envelope"></span>{" "}
                    11/9/2015
                  </td>
                </tr>
                <tr>
                  <td className="text-primary">Buyer</td>
                  <td>Denise Ann</td>
                  <td>150</td>
                  <td>175</td>
                  <td>9:23 AM</td>
                  <td>
                    <span className="table-icon fa fa-envelope"></span>{" "}
                    11/9/2015
                  </td>
                </tr>
                <tr>
                  <td className="text-danger">Seller</td>
                  <td>Denise Ann</td>
                  <td>150</td>
                  <td>148</td>
                  <td>9:23 AM</td>
                  <td>
                    <span className="table-icon fa fa-envelope"></span>{" "}
                    11/9/2015
                  </td>
                </tr>
                <tr>
                  <td className="text-primary">Buyer</td>
                  <td>Denise Ann</td>
                  <td>150</td>
                  <td>1500</td>
                  <td>9:23 AM</td>
                  <td>
                    <span className="table-icon fa fa-envelope"></span>{" "}
                    11/9/2015
                  </td>
                </tr>
                <tr>
                  <td className="text-primary">Buyer</td>
                  <td>Denise Ann</td>
                  <td>150</td>
                  <td>1270</td>
                  <td>9:23 AM</td>
                  <td>
                    <span className="table-icon fa fa-envelope"></span>{" "}
                    11/9/2015
                  </td>
                </tr>
                <tr>
                  <td className="text-danger">Buyer</td>
                  <td>Denise Ann</td>
                  <td>150</td>
                  <td>3201</td>
                  <td>9:23 AM</td>
                  <td>
                    <span className="table-icon fa fa-envelope"></span>{" "}
                    11/9/2015
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="second-column">
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
                  <label htmlFor="checkbox2">
                    Prepare The Conference Schedule
                  </label>
                </div>
              </li>

              <li className="todo-item">
                <div className="checkbox checkbox-warning">
                  <input type="checkbox" id="checkbox4" checked />
                  <label htmlFor="checkbox4">
                    Decide The Live Discussion Time
                  </label>
                </div>
              </li>

              <li className="todo-item">
                <div className="checkbox checkbox-success">
                  <input type="checkbox" id="checkbox3" checked />
                  <label htmlFor="checkbox3">
                    Prepare For The Next Project
                  </label>
                </div>
              </li>

              <li className="todo-item">
                <div className="checkbox checkbox-danger">
                  <input type="checkbox" id="checkbox5" checked />
                  <label htmlFor="checkbox5">
                    Finish Up AngularJs Tutorial
                  </label>
                </div>
              </li>

              <li className="todo-item">
                <div className="checkbox checkbox-purple">
                  <input type="checkbox" id="checkbox1" checked />
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
      </div>
    </div>
  );
};
