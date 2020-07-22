import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer data-testid="footer" className="footer">
      <nav className="footer__nav">
        <Link to="/">Početna</Link>
        <Link to="/about">O nama</Link>
        <Link to="/offer">Ponuda objekata</Link>
        <Link to="/blog">Naš blog</Link>
      </nav>
      <p className="footer__cop paragraph heading--light">
        Copyright © Domus™ 1997 - 2020. Sva prava su zadržana.
      </p>
    </footer>
  );
};

export default Footer;
