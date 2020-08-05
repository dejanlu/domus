import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

import "../styles/main.scss";

const Layout = ({ children, className }) => (
  <div className={className}>
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Layout;
