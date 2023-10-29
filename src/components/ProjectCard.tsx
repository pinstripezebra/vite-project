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
}
const ProjectCard = ({ title, description }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <Image src={ConflictImage} />
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
