import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-info">
        <div className="f-info-socials">
          <i className="fa-brands fa-facebook" style={{ fontSize: "32px" }}></i>&nbsp;&nbsp;&nbsp;
          <i className="fa-brands fa-instagram" style={{ fontSize: "32px" }}></i>&nbsp;&nbsp;&nbsp;
          <i className="fa-brands fa-linkedin" style={{ fontSize: "32px" }}></i>
        </div>

        <div className="f-info-brand">
          <strong>SwaadConnect Pvt. Ltd.</strong> &copy; 2025 — Crafted by{" "}
          <span className="creator-name">Purva Jadhav</span>
        </div>

        <div className="f-info-links">
          <Link to="/privacy">Privacy</Link>
          &nbsp;
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
};
