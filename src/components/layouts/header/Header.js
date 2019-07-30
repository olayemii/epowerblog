import React from "react";
import Proptypes from "prop-types";

import "./Header.css";

function Header(props) {
  let { title, subtitle } = props;
  return (
    <div className="Header">
      <header className="Header">
        <h1>{title}</h1>
        {subtitle && <h5>PUBLISHED ON {subtitle}</h5>}
      </header>
    </div>
  );
}

Header.propTypes = {
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string
};

Header.defaultProps = {
  title: "Epower Blog",
  subtitle: ""
};

export default Header;
