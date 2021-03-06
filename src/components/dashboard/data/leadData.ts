interface Lead {
  id: number;
  text_color: string;
  type: string;
  lead_name: string;
  views: number;
  favorites: number;
  last_visit: string;
  last_action_type: string;
  last_action: string;
}

export const leadData: Lead[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
