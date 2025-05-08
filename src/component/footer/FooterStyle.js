const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgOTYwIDU0MCIgd2lkdGg9Ijk2MCIgaGVpZ2h0PSI1NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk2MCIgaGVpZ2h0PSI1NDAiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCAzOTdMNTMuMyAzNTlDMTA2LjcgMzIxIDIxMy4zIDI0NSAzMjAgMjI1LjhDNDI2LjcgMjA2LjcgNTMzLjMgMjQ0LjMgNjQwIDI1MS4yQzc0Ni43IDI1OCA4NTMuMyAyMzQgOTA2LjcgMjIyTDk2MCAyMTBMOTYwIDU0MUw5MDYuNyA1NDFDODUzLjMgNTQxIDc0Ni43IDU0MSA2NDAgNTQxQzUzMy4zIDU0MSA0MjYuNyA1NDEgMzIwIDU0MUMyMTMuMyA1NDEgMTA2LjcgNTQxIDUzLjMgNTQxTDAgNTQxWiIgZmlsbD0iIzBBM0M0RSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PC9zdmc+)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.8,
      zIndex: 1,
    },
    zIndex: 2,
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    transition: "0.3s",
    width: "150px",
    height: "70px",
    margin: "0px 20px",
  },
  contactStack: {
    margin: "1rem 3rem",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  contactText: {
    color: "white",
    fontSize: { xs: "16px", sm: "18px", md: "20px" },
  },
};

export default styles;
