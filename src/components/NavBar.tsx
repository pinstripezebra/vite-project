import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/test-logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="100px"></Image>
      <Text> Portfolio</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
