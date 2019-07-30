import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <footer>
        <h1>Copyright {new Date().getFullYear()}</h1>
      </footer>
    </div>
  );
}

export default Footer;
