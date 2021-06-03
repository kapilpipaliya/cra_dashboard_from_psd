import * as React from "react";

export const Footer = () => (
  <div>
    <footer className="flex-horizontal flex-align-items-center dashboard-footer">
      <div className="copyright ">Copyright Abc 2015 &copy;</div>
      <ul className="flex-horizontal  footer-menu">
        <li>
          <a>Careers</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>
            Feedback <i className="fa fa-angle-up m-l-md" />
          </a>
        </li>
      </ul>
    </footer>
  </div>
);
