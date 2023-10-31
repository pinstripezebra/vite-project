import {
  Card,
  ImageProps,
  Image,
  CardBody,
  Heading,
  Text,
  UseImageProps,
  UseImageReturn,
  HStack,
} from "@chakra-ui/react";

import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  skills: string;
}

const BioCard = ({ title, description, image, skills }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Text>Skills: </Text>
          <Text>{skills}</Text>
        </HStack>
        <Image src={image} />
      </CardBody>
    </Card>
  );
};
export default BioCard;
