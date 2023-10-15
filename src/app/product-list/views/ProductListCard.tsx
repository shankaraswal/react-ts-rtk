import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ProductListCard.module.scss";
import { Box } from "@mui/material";

export const ProductListCard = ({ data }: any) => {
  const randomLastIncresedPrice = (price: number) => {
    const randomIncresedPrice = Math.floor(Math.random() * price);
    const precentDiff = Math.floor((randomIncresedPrice / price) * 100);
    return {
      lastPrice: price + randomIncresedPrice,
      discountPerent: precentDiff,
    };
  };

  return (
    <Card className={styles.productCard}>
      <CardMedia
        component="img"
        className={styles.productThumbnail}
        image={data.images[0]}
        title={data.title}
      />
      <CardContent className={styles.productContent}>
        <Typography component="p">{data.title}</Typography>
        <Typography component="h3">
          <span className={styles.currentPrice}>{`$${data.price}.00`}</span>
          <span className={styles.lastPrice}>{`$${
            randomLastIncresedPrice(data.price).lastPrice
          }.00`}</span>
          <span className={styles.discountPerent}>{`(${
            randomLastIncresedPrice(data.price).discountPerent
          }% OFF)`}</span>
        </Typography>
      </CardContent>
      <Box sx={{ display: "grid", rowGap: 2, paddingX: 5 }}>
        <Button variant="contained" size="small" fullWidth>
          Add to Cart
        </Button>
        <Button variant="outlined" size="small" fullWidth>
          View Detail
        </Button>
      </Box>
    </Card>
  );
};
