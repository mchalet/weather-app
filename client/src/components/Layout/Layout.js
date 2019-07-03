import React from "react";

import SimpleAppBar from './Header/Header';

const Layout = props => {
  return (
    <>
      <SimpleAppBar />
      <main>{props.children}</main>
    </>
  );
};


export default Layout;
