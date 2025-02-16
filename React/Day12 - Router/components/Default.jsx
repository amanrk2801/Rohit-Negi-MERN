import React from "react";
import { Outlet } from "react-router";

const Default = () => {
  return (
    <>
      <h2>Default Page</h2>
      <Outlet></Outlet>
    </>
  );
};

export default Default;
