export const wrapperBoxStyle = {
  background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
  py: 8,
};

export const loadingBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
};

export const containerFlexStyle = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  alignItems: "center",
  gap: 6,
};

export const titleStyle = {
  mb: 3,
  fontWeight: 700,
  color: "rgb(40 40 80)",
};

export const textStyle = {
  mb: 3,
  fontWeight: 500,
  color: "rgb(40 40 80)",
};

export const buttonStyle = {
  borderRadius: "20px",
  px: 3,
  py: 1,
  background: "rgb(10 60 78)",
  color: "#fff",
  "&:hover": {
    background: "rgb(10 60 50 / 30%)",
    color: "rgb(10 60 78)",
  },
};

export const imageStyle = (isMobile) => ({
  borderRadius: 4,
  boxShadow: 6,
  width: "100%",
  maxHeight: isMobile ? "auto" : 450,
  objectFit: "cover",
});
