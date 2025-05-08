import React from "react";
import image from "../../imgs/about.jpg";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { styles } from "./AboutStyle";
export const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={styles.root}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={styles.heading}
        >
          About Us
        </Typography>

        <Box sx={styles.contentWrapper}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1 }}
          >
            <Typography variant="h4" sx={styles.textTitle}>
              Online Shopping
            </Typography>
            <Typography variant="body1" sx={styles.textBody}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              natus ad sed harum itaque ullam enim quas, veniam accusantium,
              quia animi id eos adipisci iusto molestias asperiores explicabo
              cum vero atque amet corporis! Soluta illum facere consequuntur
              magni. Ullam dolorem repudiandae cumque voluptate consequatur
              consectetur, eos provident necessitatibus reiciendis corrupti!
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1 }}
          >
            <Box
              component="img"
              src={image}
              alt="Online Shopping"
              sx={styles.image(isMobile)}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
