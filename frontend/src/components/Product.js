import { Box, Link, Image, Flex, Heading, Text } from '@chakra-ui/react';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} _hover={{ textDecor: 'none' }}>
      <Box
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        // bgColor="white"
        transition="all"
        _hover={{ shadow: 'xl' }}>
        <Image
          src={product.image}
          alt={product.name}
          minH="360px"
          objectFit="cover"
        />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" mb="3" fontSize="lg">
            {product.name}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Rating value={product.rating} color="yellow.500" />
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              ₹{product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default Product;
