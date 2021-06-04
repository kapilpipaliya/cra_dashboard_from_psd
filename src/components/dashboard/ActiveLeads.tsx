import * as React from "react";
import { TodoList } from "./TodoList";
import { leadData } from "./data/leadData";

export const ActiveLeads = () => (
  <div className="flex-horizontal active-leads">
    <div className="first-column">
      <div className="widget">
        <header className="widget-header">
          <h4 className="widget-title">Active Leads</h4>
        </header>
        <hr className="widget-separator" />
        <div className="widget-body overflow-x table-container">
          <table className="table">
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
              {leadData.map((lead) => (
                <tr key={lead.id}>
                  <td className={lead.text_color}>{lead.type}</td>
                  <td>{lead.lead_name}</td>
                  <td>{lead.views}</td>
                  <td>{lead.favorites}</td>
                  <td>{lead.last_visit}</td>
                  <td>
                    {lead.last_action_type && (
                      <span className="table-icon fa fa-envelope" />
                    )}
                    {lead.last_action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="second-column">
      <TodoList />
    </div>
  </div>
);
