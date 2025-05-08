import { useDispatch, useSelector } from "react-redux";
import { removePurchase } from "../../store/PurchaseSlice";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { containerStyles, totalPriceTextStyles } from "./PurchaseProductStyle";

export const PurchaseProduct = () => {
  const { purchase } = useSelector((state) => state);
  const dispatch = useDispatch();

  const totalPrice = purchase.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const content = () => {
    return purchase.map((el, index) => (
      <Grid item xs={12} key={index}>
        <Card
          sx={{
            display: "flex",
            borderRadius: 4,

            boxShadow: 5,
            overflow: "hidden",
            position: "relative",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <IconButton
            onClick={() => dispatch(removePurchase(el))}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: "rgba(255,255,255,0.7)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Grid
            container
            spacing={2}
            alignItems="stretch"
            sx={{
              flexDirection: { xs: "column", sm: "row", md: "row" },
            }}
          >
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={el.image}
                alt={el.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: 300,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="center"
              sx={{ width: "50%" }}
            >
              <CardContent sx={{ padding: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {el.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  <strong>Type:</strong> {el.category}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  <strong>Quantity:</strong> {el.quantity}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  <strong>Price:</strong> {el.price}$
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {el.description}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    ));
  };

  return (
    <Container maxWidth="md" sx={containerStyles}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={totalPriceTextStyles}
      >
        Total Price: {totalPrice}$
      </Typography>

      <Grid container spacing={4}>
        {content()}
      </Grid>
    </Container>
  );
};
