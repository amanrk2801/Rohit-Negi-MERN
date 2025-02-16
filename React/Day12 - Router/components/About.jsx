import React from "react";
import { Link, Outlet } from "react-router";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <Outlet></Outlet>
    </>
  );
};

export default About;
