import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import theme from "./theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
