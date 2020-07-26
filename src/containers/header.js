import React, { useState } from "react";

import Navigation from "./navigation";
import BackgroundOverlay from "../components/backgroundOverlay";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && <BackgroundOverlay isOpen={isOpen} setOpen={setOpen} />}
      <header
        data-testid="header"
        className={`header ${isOpen && "header--overflow"}`}
      >
        <Navigation isOpen={isOpen} setOpen={setOpen} />
      </header>
    </>
  );
};

export default Header;
