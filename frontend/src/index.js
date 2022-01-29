import { render } from "react-dom";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

render(
  <ChakraProvider>
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.querySelector("#root")
);
