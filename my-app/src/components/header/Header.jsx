import React from "react";
const Header = ({ texter, headerType }) => {
  return <headerType className="header">{texter}</headerType>;
};

export default Header;
