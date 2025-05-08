import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, addCategories } from "../../store/ProductSlice";
import BookSlider from "../slider/Slider";
import { Product } from "./Product";
import {
  containerStyles,
  loaderStyles,
  boxStyles,
  paperStyles,
  buttonStyles,
  gridItemStyles,
  productContainerStyles,
} from "./ProcuctListStyle";

import {
  Container,
  Button,
  Box,
  Paper,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { CustomPagination } from "../Pagenation/Pagenation";
export const ProcuctList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const categories = useSelector((state) => state.product.categories);
  const getProduct = () => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        dispatch(addProducts(json));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const getcategory = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        dispatch(addCategories(json));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const getProductInCategory = (catName) => {
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        dispatch(addProducts(json));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProduct();
    getcategory();
  }, []);
  const AllProduct = products.product;

  const productCount = AllProduct.length;
  const productPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(productCount / productPerPage);
  const startIndex = (currentPage - 1) * productPerPage;
  const finishIndex = currentPage * productPerPage;
  const productsPagenation = AllProduct.slice(startIndex, finishIndex);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleClicked = (cat) => {
    setSelectedCategory(cat);
    if (cat === "all") {
      getProduct();
    } else {
      getProductInCategory(cat);
    }
  };

  return (
    <Container disableGutters sx={containerStyles}>
      {loading ? (
        <Box sx={loaderStyles}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={boxStyles}>
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            <Grid
              sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" } }}
            >
              <BookSlider data={AllProduct} />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={4} sx={paperStyles}>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontWeight: "bold", color: "#333" }}
                >
                  Select a product category
                </Typography>

                {AllProduct.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      gap: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleClicked("all");
                        getProduct();
                      }}
                      sx={buttonStyles(selectedCategory, "all")}
                    >
                      All
                    </Button>

                    {categories.map((cat, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        onClick={() => {
                          getProductInCategory(cat);
                          handleClicked(cat);
                        }}
                        sx={buttonStyles(selectedCategory, cat)}
                      >
                        {cat}
                      </Button>
                    ))}
                  </Box>
                )}
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Box sx={productContainerStyles}>
                  {AllProduct.length > 0 &&
                    productsPagenation.map((el) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={el.id}
                        sx={gridItemStyles}
                      >
                        <Box sx={{ width: "100%", height: "100%" }}>
                          <Product elements={el} />
                        </Box>
                      </Grid>
                    ))}
                </Box>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CustomPagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};
export default ProcuctList;
