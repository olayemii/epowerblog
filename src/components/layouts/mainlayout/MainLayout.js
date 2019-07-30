import React from "react";
import { Header } from "../header";
import Footer from "../footer/Footer";

import "./MainLayout.css";

function MainLayout(props) {
  let { children, headerTitle, headerSubTitle } = props;
  return (
    <div className="MainLayout">
      <Header title={headerTitle} subtitle={headerSubTitle} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
