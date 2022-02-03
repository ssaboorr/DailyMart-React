import { Heading, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import product from "../products";
import axios from "axios";

const HomeScreen = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      
      const { data } = await axios.get("/api/products");
      setProduct(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Heading marginTop="80px" as="h2" mb="8" fontSize="2xl">
        Latest Products
      </Heading>
      <Grid
        p="8"
        templateColumns={{
          lg: "repeat(4,1fr)",
          md: "repeat(2,1fr)",
          base: "1fr",
        }}
        gap="8"
      >
        {product.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
