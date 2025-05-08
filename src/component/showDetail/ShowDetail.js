import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showDetailProduct } from "../../store/ProductSlice";
import { addPurchase } from "../../store/PurchaseSlice";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  Button,
  CircularProgress,
} from "@mui/material";
import {
  wrapperBoxStyle,
  loadingBoxStyle,
  containerFlexStyle,
  titleStyle,
  textStyle,
  buttonStyle,
  imageStyle,
} from "./ShowDetailStyle";
import { motion } from "framer-motion";
export const ShowDetail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const [loading, setLoading] = useState(true);
  const { showProduct } = useSelector((state) => state.product);
  const getProduct = () => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(showDetailProduct(json));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={wrapperBoxStyle}>
      {loading ? (
        <Box sx={loadingBoxStyle}>
          <CircularProgress />
        </Box>
      ) : (
        <Container maxWidth="lg">
          <Box sx={containerFlexStyle}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ flex: 1 }}
            >
              <Typography variant="h4" sx={titleStyle}>
                {showProduct.title}
              </Typography>

              <Typography variant="h6" sx={textStyle}>
                Type : {showProduct.category}
              </Typography>

              <Typography variant="h6" sx={textStyle}>
                Price : {showProduct.price}
              </Typography>

              <Typography variant="h6" sx={textStyle}>
                Description : {showProduct.description}
              </Typography>

              <Button
                sx={buttonStyle}
                onClick={() => dispatch(addPurchase(showProduct))}
              >
                Add to Card
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ flex: 1 }}
            >
              <Box
                component="img"
                src={showProduct.image}
                alt={showProduct.title}
                sx={imageStyle(isMobile)}
              />
            </motion.div>
          </Box>
        </Container>
      )}
    </Box>
  );
};
