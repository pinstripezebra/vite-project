import { Heading, Text, VStack, Image } from "@chakra-ui/react";
import ConflictImage from "../assets/conflict-commodities.jpg";

const ContentGrid = () => {
  return (
    <VStack>
      <Heading>Commodities-Conflict Correlation</Heading>
      <Text>
        This project examines the relation between global conflict and
        commodities pricing.
      </Text>
      <Image src={ConflictImage} boxSize="600px"></Image>
    </VStack>
  );
};

export default ContentGrid;
