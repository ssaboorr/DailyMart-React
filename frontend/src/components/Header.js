import { useState } from "react";
import {
  Flex,
  Heading,
  Link,
  Box,
  Icon,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { HiShoppingBag, HiUser, HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsMoon } from "react-icons/bs";

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Icon color="teal.500" as={BsMoon} onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Icon>
    </header>
  );
}

const MenuItem = ({ children, url }) => {
  return (
    <Link
      href={url}
      fontSize="sm"
      letterSpacing="wide"
      color="teal.500"
      fontWeight="bold"
      textTransform="uppercase"
      mr="5"
      display="block"
      _hover={{ color: "gray.800" }}
      mt={{ base: "4", md: "0" }}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="gray.800"
      w="100%"
      top="0"
      zIndex="2"
      pos="fixed"
    >
      <Flex align="center" mr="5">
        <Heading
          as="h1"
          color="teal.500"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
        >
          <Link href="/" _hover={{ color: "gray.500", textDecor: "none" }}>
            Daily Mart
          </Link>
        </Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none", sm: "block" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="teal.500" w="6" h="6" />
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        <MenuItem url="/">
          <Flex alignItems="center">
            <Icon as={HiShoppingBag} w="4" h="4" mr="1" /> Cart
          </Flex>
        </MenuItem>
        <MenuItem url="/">
          <Flex alignItems="center">
            <Icon as={HiUser} w="4" h="4" mr="1" /> Login
          </Flex>
        </MenuItem>
        <ColorMode />
      </Box>
    </Flex>
  );
};

export default Header;
