import * as React from "react";
import { TodoList } from "./TodoList";

interface Lead {
  text_color: string;
  type: string;
  lead_name: string;
  views: number;
  favorites: number;
  last_visit: string;
  last_action_type: string;
  last_action: string;
}
const leadData: Lead[] = [
  {
    text_color: "text-primary",
    type: "Buyer",
    lead_name: "Denise Ann",
    views: 150,
    favorites: 150,
    last_visit: "9:23 AM",
    last_action_type: "email",
    last_action: "11/9/2015",
  },
  {
    text_color: "text-primary",
    type: "Buyer",
    lead_name: "Denise Ann",
    views: 150,
    favorites: 202,
    last_visit: "9:23 AM",
    last_action_type: "email",
    last_action: "11/9/2015",
  },
  {
    text_color: "text-success",
    type: "Landlord",
    lead_name: "Denise Ann",
    views: 150,
    favorites: 313,
    last_visit: "9:23 AM",
    last_action_type: "email",
    last_action: "11/9/2015",
  },
  {
    text_color: "text-primary",
    type: "Buyer",
    lead_name: "Denise Ann",
    views: 150,
    favorites: 175,
    last_visit: "9:23 AM",
    last_action_type: "email",
    last_action: "11/9/2015",
  },
  {
    text_color: "text-danger",
    type: "Seller",
    lead_name: "Denise Ann",
    views: 150,
    favorites: 148,
    last_visit: "9:23 AM",
    last_action_type: "email",
    last_action: "11/9/2015",
  },
  {
    text_color: "text-primary",
    type: "Buyer",
    lead_name: "Denise Ann",
    views: 150,
    favorites: 1500,
    last_visit: "9:23 AM",
    last_action_type: "email",
    last_action: "11/9/2015",
  },
  {
    text_color: "text-primary",
    type: "Buyer",
    lead_name: "Denise Ann",
    views: 150,
    favorites: 1270,
    last_visit: "9:23 AM",
    last_action_type: "email",
    last_action: "11/9/2015",
  },
  {
    text_color: "text-danger",
    type: "Buyer",
    lead_name: "Denise Ann",
    views: 150,
    favorites: 3201,
    last_visit: "9:23 AM",
    last_action_type: "email",
    last_action: "11/9/2015",
  },
];

export const ActiveLeads = () => (
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
              {leadData.map((lead) => (
                <tr>
                  <td className={lead.text_color}>{lead.type}</td>
                  <td>{lead.lead_name}</td>
                  <td>{lead.views}</td>
                  <td>{lead.favorites}</td>
                  <td>{lead.last_visit}</td>
                  <td>
                    {lead.last_action_type && (
                      <span className="table-icon fa fa-envelope"></span>
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
