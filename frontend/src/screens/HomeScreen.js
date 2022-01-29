import { Heading, Grid } from "@chakra-ui/react";

import Product from "../components/Product";
import product from "../products";

const HomeScreen = () => {
  return (
    <>
      <Heading marginTop="80px" as="h2" mb="8" fontSize="2xl">
        Latest Products
      </Heading>
      <Grid p="8" templateColumns={{lg:'repeat(4,1fr)',md:'repeat(2,1fr)',base:'1fr'}} gap="8">
        {product.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
};


export default HomeScreen