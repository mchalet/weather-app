import React from "react";
import PropTypes from "prop-types";

const Layout = props => {
  return (
    <>
      <div>Header</div>
      <main>{props.children}</main>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
