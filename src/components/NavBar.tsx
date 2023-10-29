import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/test-logo.jpg";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="100px"></Image>
      <Text> Navbar</Text>
    </HStack>
  );
};

export default NavBar;
