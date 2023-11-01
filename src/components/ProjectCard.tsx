import {
  Card,
  ImageProps,
  Image,
  CardBody,
  Heading,
  Text,
  UseImageProps,
  UseImageReturn,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";

interface Props {
  title: string;
  description: string;
  test: string;
  image: string;
  link: string;
  linkName: string;
}
const ProjectCard = ({
  title,
  description,
  test,
  image,
  link,
  linkName,
}: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <Link href={link} isExternal>
          {linkName}
          <ExternalLinkIcon mx="2px" />
        </Link>
        <Image src={image} />
        <Text>{test}</Text>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
