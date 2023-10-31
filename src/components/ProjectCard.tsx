import {
  Card,
  ImageProps,
  Image,
  CardBody,
  Heading,
  Text,
  UseImageProps,
  UseImageReturn,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  description: string;
  test: string;
  image: string;
}
const ProjectCard = ({ title, description, test, image }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <Image src={image} />
        <Text>{test}</Text>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
