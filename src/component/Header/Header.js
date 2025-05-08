import React, { useEffect, useState } from "react";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../imgs/logo.png";
import {
  appBarStyles,
  toolbarStyles,
  logoStyles,
  mobileMenuIconStyles,
  mobileMenuPaperStyles,
  navButtonStyles,
  loginButtonStyles,
  registerButtonStyles,
} from "./HeaderStyle";

const pages = [
  {
    title: "Main",
    link: "/",
  },
  {
    title: "about",
    link: "about",
  },
  {
    title: "profile",
    link: "profile",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="fixed" sx={appBarStyles(scrolled)}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={toolbarStyles(scrolled)}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                width: scrolled ? "auto" : "-webkit-fill-available",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-start",
                  padding: "20px 0",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="open navigation menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={mobileMenuIconStyles}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ "& .MuiPaper-root": mobileMenuPaperStyles }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "90vw",
                    }}
                  >
                    <IconButton
                      onClick={handleCloseNavMenu}
                      sx={{ color: "white" }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  {pages.map((page, index) => (
                    <MenuItem
                      key={index}
                      onClick={handleCloseNavMenu}
                      sx={{
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "1rem",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      <Link
                        to={page.link}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {page.title}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Link to="/">
                <img src={Logo} alt="logo" style={logoStyles(scrolled)} />
              </Link>

              {!scrolled && (
                <Box
                  sx={{
                    display: { xs: "flex", md: "flex" },
                    padding: "0px 35px",
                  }}
                >
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    sx={{ borderRadius: "50px" }}
                  >
                    <Button sx={loginButtonStyles}>
                      <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Login
                      </Link>
                    </Button>
                    <Button sx={registerButtonStyles}>
                      <Link
                        to="/register"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Register
                      </Link>
                    </Button>
                  </ButtonGroup>
                </Box>
              )}
            </Box>

            {/* Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
                background:
                  "linear-gradient(156deg, rgb(10 60 78), rgb(15 78 101 / 65%), rgb(10 60 78))",
                marginTop: "10px",
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={navButtonStyles}
                >
                  <Link
                    to={page.link}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {page.title}
                  </Link>
                </Button>
              ))}
              <Button onClick={handleCloseNavMenu} sx={navButtonStyles}>
                <Link to="/purchase" style={{ color: "white" }}>
                  <AddShoppingCartOutlinedIcon fontSize="large" />
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};
export default Header;
