export const containerStyles = {
  width: "98vw",
  maxWidth: "100%",
  mt: 5,
  px: { xs: 2, sm: 3, md: 5 },
};

export const loaderStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
};

export const boxStyles = {
  width: "100%",
};

export const paperStyles = {
  p: 3,
  textAlign: "center",
  borderRadius: 4,
  background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
};

export const buttonStyles = (selectedCategory, category) => ({
  borderRadius: "20px",
  px: 3,
  py: 1,
  background: selectedCategory === category ? "rgb(10 60 78)" : "#f3e5f5",
  color: selectedCategory === category ? "#fff" : "rgb(10 60 78)",
  "&:hover": {
    background: selectedCategory === category ? "rgb(10 60 78)" : "#e1bee7",
  },
});

export const gridItemStyles = {
  display: "flex",
};

export const productContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: 3,
  justifyContent: "center",
  px: 2,
  py: 4,
};
// styles.ts

export const cardStyles = {
  maxWidth: 300,
  height: 440,
  position: "relative",
  overflow: "hidden",
  boxShadow: "0px 4px 7px rgba(0,0,0,0.5)",
  transition: "transform 0.5s",
  "&:hover": {
    transform: "scale(0.97)",
  },
  "&:hover .overlay": {
    clipPath: "circle(75%)",
  },
};

export const cardMediaStyles = {
  height: "100%",
  width: "100%",
  transition: "all 0.5s",
  "&:hover": {
    transform: "scale(1.6) rotate(20deg)",
    filter: "blur(3px)",
  },
};

export const overlayStyles = {
  position: "absolute",
  inset: 0,
  backgroundColor: "rgb(236, 234, 234)",
  padding: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  clipPath: "circle(0% at 100% 100%)",
  transition: "clip-path 0.7s ease-in-out",
  zIndex: 2,
};

export const titleStyles = {
  color: "rgb(10 60 78)",
  mb: 2,
};
