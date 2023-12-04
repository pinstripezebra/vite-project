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
  Badge,
  VStack,
} from "@chakra-ui/react";

import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
}

const BioCard = ({ title, description, image }: Props) => {
  let skills = [
    "Python",
    "SQL",
    "Machine Learning",
    "MS Azure",
    "Data Analysis",
    "Data Visualization",
    "React",
  ];
  return (
    <Card>
      <CardBody>
        <Heading>{title}</Heading>
        <HStack align={"top"}>
          <Image src={image} />
          <VStack align={"left"}>
            <Text>{description}</Text>
            <HStack>
              <Heading as="h2">Skills: </Heading>
              {skills.map((skill) => (
                <Badge>{skill}</Badge>
              ))}
            </HStack>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
};
export default BioCard;
