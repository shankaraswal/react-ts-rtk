import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ProductListCard } from "./views/ProductListCard";
import styles from "./ProductList.module.scss";
import mui from "./ProductList.style.ts";

export const ProductList = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, []);

  console.log(productData);
  return (
    <Grid container className={styles.productListContainer}>
      {productData.map((item, index) => (
        <Grid sx={mui.productGrid} key={index}>
          <ProductListCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};
