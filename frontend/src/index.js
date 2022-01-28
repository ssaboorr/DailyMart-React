import { render } from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.querySelector("#root")
);
