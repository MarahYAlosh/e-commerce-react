export const styles = {
  root: {
    background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
    py: 8,
  },
  heading: {
    fontWeight: "bold",
    color: "rgb(10 60 78)",
    mb: 6,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  textTitle: {
    mb: 3,
    fontWeight: 700,
    color: "rgb(40 40 80)",
  },
  textBody: {
    color: "#333",
    fontSize: "1.1rem",
    lineHeight: 1.8,
  },
  image: (isMobile) => ({
    borderRadius: 4,
    boxShadow: 6,
    width: "100%",
    maxHeight: isMobile ? "auto" : 450,
    objectFit: "cover",
  }),
};
