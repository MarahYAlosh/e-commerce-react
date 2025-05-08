import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import Logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import styles from "./FooterStyle";
const Footer = () => {
  const contactInfo = [
    {
      icon: <PhoneAndroidOutlinedIcon sx={{ color: "white" }} />,
      label: " Phone : ",
      value: "0091111111111",
    },
    {
      icon: <DraftsOutlinedIcon sx={{ color: "white" }} />,
      label: " Email : ",
      value: "marah.alosh987@gmail.com",
    },
  ];
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={styles.wrapper}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          gap="1rem"
          justifyContent="space-between"
          alignItems="center"
          sx={styles.container}
        >
          <Box sx={styles.logoWrapper}>
            <Link to="/">
              <img src={Logo} alt="logo" style={styles.logo} />
            </Link>
          </Box>

          <Stack sx={styles.contactStack}>
            {contactInfo.map((item, index) => (
              <Box key={index} sx={styles.contactItem}>
                {item.icon}
                <Typography sx={styles.contactText}>{item.label}</Typography>
                <Typography sx={styles.contactText}>{item.value}</Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
};
export default Footer;
