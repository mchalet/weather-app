import React from "react";
import PropTypes from "prop-types";

import SimpleAppBar from './Header/Header';

const Layout = props => {
  return (
    <>
      <SimpleAppBar />
      <main>{props.children}</main>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
