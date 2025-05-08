import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header.js";
import Footer from "../component/footer/Footer.jsx";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";

const Root = () => {
  return (
    <Fragment>
      <ToastContainer position="top-left" autoClose={5000} />
      <Header />
      <Box
        className="main"
        sx={{ marginTop: { xs: "6rem", sm: "6rem", md: "11rem" } }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Fragment>
  );
};
export default Root;
