import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ProductListCard } from "./views/ProductListCard";

export const ProductList = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, []);

  console.log(productData);
  return (
    <Grid container spacing={10} justifyContent={"flex-start"}>
      {productData.map((item, index) => (
        <Grid xs={2} sm={3} key={index}>
          <ProductListCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};
