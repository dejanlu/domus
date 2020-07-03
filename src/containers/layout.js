import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

import "../styles/main.scss";

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
