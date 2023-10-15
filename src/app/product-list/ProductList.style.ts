const mui = {
  productGrid: {
    flex: {
      xs: "100%", // <= 599
      sm: "calc(50% - 20px)", // >600 <899
      md: "calc(33% - 20px)", // > 900 < 1199
      lg: "calc(25% - 20px)", // > 1200 < 1535
      xl: "calc(20% - 20px)", // >=1536
    },
  },
};

export default mui;
