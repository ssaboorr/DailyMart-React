import { Link as RouterLink, useParams } from "react-router-dom";

import {
  Flex,
  Grid,
  Image,
  Heading,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";

import Product from "../components/Product";
import Rating from "../components/Rating";
import products from "../products";

const ProductDetails = () => {
  const { id } = useParams();

  console.log(id);

  const product = products.find((product) => product._id === +id);
  // console.log(product._id);

  console.log(product);

  return (
    <>
      <Flex mt="100px" mb="5">
        <Button
          mx="2"
          as={RouterLink}
          to="/"
          mb="5"
          bgColor="gray.500"
          colorScheme="teal"
        >
          Go back
        </Button>
      </Flex>
      <Grid
        templateColumns={{ lg: "5fr 4fr 3fr", md: "4fr 3fr 2fr", base: "1fr" }}
        gap="10"
      >
        {/* Column one */}
        <Image
          mx="3"
          src={product.image}
          alt={product.name}
          borderRadius="md"
        />
        {/* Column two */}

        <Flex display="flex" flexDirection="column">
          <Heading as="h6" fontSize="base" color="cyan.800">
            {product.brand}
          </Heading>
          <Heading as="h2" fontSize="4xl" color="cyan.500">
            {product.name}
          </Heading>
          <Rating
            value={product.rating}
            text={`Based on ${product.numReviews} reviews`}
          />
          <Heading as="h5" my="5" fontSize="4xl" color="blue.500">
            ₹{product.price}
          </Heading>
          <Text>{product.description}</Text>
        </Flex>

        {/* column 3 */}

        <Flex p="4" direction="column">
          <Flex justifyContent="space-between">
            <Text>Price:</Text>
            <Text fontWeight="bold"> ₹{product.price}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Count In Stock:</Text>
            <Text fontWeight="bold"> {product.countInStock}</Text>
          </Flex>
          <Divider />

          <Button
            bgColor="gray.500"
            textTransform="uppercase"
            letterSpacing="wide"
            colorScheme="teal"
            my="2"
            disabled={product.countInStock === 0}
          >
            Add to Cart
          </Button>
        </Flex>
      </Grid>
    </>
  );
};

export default ProductDetails;
