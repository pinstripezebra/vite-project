import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/testLogo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="100px"></Image>
      <h1> Lucas See, Portfolio of Work</h1>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
