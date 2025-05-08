export const appBarStyles = (scrolled) => ({
  height: { xs: "auto", md: scrolled ? "100px" : "190px" },
  background: "rgb(10 60 78)",
  padding: { xs: "5px 0", md: "10px 0" },
  flexDirection: { xs: "column", sm: "row" },
  transition: "0.2s",
  overflow: "hidden",
});

export const toolbarStyles = (scrolled) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  minHeight: scrolled ? "60px" : "100px",
  flexDirection: scrolled ? "row-reverse" : "column",
});

export const logoStyles = (scrolled) => ({
  transition: "0.1s",
  width: scrolled ? "110px" : "140px",
  height: scrolled ? "66px" : "86px",
  margin: "0px 20px",
});

export const mobileMenuIconStyles = {
  color: "white",
};

export const mobileMenuPaperStyles = {
  width: "100vw",
  height: "auto",
  maxHeight: "300px",
  backgroundColor: "rgba(44, 62, 80, 0.95)",
  color: "white",
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  overflowY: "auto",
};

export const navButtonStyles = {
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: "scale(1.05)",
    transition: "all 0.3s ease-in-out",
  },
  my: 2,
  mx: 1,
  fontSize: "1.2rem",
  textTransform: "uppercase",
  fontWeight: 700,
  textShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
};

export const loginButtonStyles = {
  fontSize: "1.2rem",
  padding: "12px 30px",
  background: "linear-gradient(45deg, #0077b6, #00b4d8)",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  border: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(45deg, #005f99, #0096c7)",
    transform: "scale(1.02)",
  },
};

export const registerButtonStyles = {
  fontSize: "1.2rem",
  padding: "12px 30px",
  background: "linear-gradient(45deg, #ff7300, #ffa200)",
  color: "white",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  border: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(45deg, #e66400, #ff8c00)",
    transform: "scale(1.02)",
  },
};
