export const loginWrapperStyle = (cover) => ({
  marginTop: { xs: "6rem", sm: "6rem", md: "11rem" },
  minHeight: "100vh",
  width: "100%",
  backgroundImage: `url(${cover})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  py: 4,
});

export const loginContainerStyle = {
  width: { xs: "90%", sm: "70%", md: "50%", lg: "30%" },
};

export const loginPaperStyle = {
  p: { xs: 3, sm: 4 },
  borderRadius: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
};

export const loginImageStyle = {
  width: { xs: 80, sm: 100, md: 120 },
  height: "auto",
  mb: 2,
};

export const loginFormStyle = {
  width: "100%",
};

export const submitButtonStyle = {
  background: "rgb(10 60 78)",
};
