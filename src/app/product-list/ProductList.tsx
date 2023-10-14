import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { ProductListCard } from "./views/ProductListCard";
import { Container } from "@mui/material";

export const ProductList = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, []);

  console.log(productData);
  return (
    <Grid container spacing={2} justifyContent={"flex-start"}>
      {productData.map((item, index) => (
        <Grid xs={2} sm={4} md={3} lg={3} key={index}>
          <ProductListCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};
