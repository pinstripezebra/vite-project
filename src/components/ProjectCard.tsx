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
import ConflictImage from "../assets/conflict-commodities.jpg";
import React from "react";

interface Props {
  title: string;
  description: string;
  test: string;
}
const ProjectCard = ({ title, description, test }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <Image src={ConflictImage} />
        <Text>{test}</Text>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
