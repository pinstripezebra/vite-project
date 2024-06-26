import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/testLogo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <h2> Lucas See, M.S.</h2>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
