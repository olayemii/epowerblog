import React from "react";
import { Header } from "../header";
import Footer from "../footer/Footer";

function MainLayout(props) {
  let { children } = props;
  return (
    <div className="MainLayout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
