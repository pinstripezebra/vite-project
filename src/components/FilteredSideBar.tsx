import { Button, HStack, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onSelectProject: (projectName: string) => void;
}

const FilteredSideBar = ({ onSelectProject }: Props) => {
  let items = ["Biography", "Resume"];
  let secondItems = [
    "Graffiti Identification",
    "Commodities-Conflict",
    "Aircraft Delay Prediction",
    "Heart Failure Prediction",
  ];
  //Hook function
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const heading = "List";

  return (
    <>
      <List>
        <ListItem>
          <h1>About Me</h1>
        </ListItem>
        {items.map((item) => (
          <ListItem key={item}>
            <HStack>
              <Button onClick={() => onSelectProject(item)} key={item}>
                {item}
              </Button>
            </HStack>
          </ListItem>
        ))}
        <ListItem>
          <h1>Projects</h1>
        </ListItem>
        <ListItem>
          {secondItems.map((secondItem) => (
            <ListItem key={secondItem}>
              <HStack>
                <Button
                  onClick={() => onSelectProject(secondItem)}
                  key={secondItem}
                >
                  {secondItem}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </ListItem>
        <ListItem>
          <h1>Links</h1>
        </ListItem>
        <ListItem>
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/pinstripezebra";
            }}
          >
            {" "}
            github
          </Button>
        </ListItem>

        <ListItem>
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/lucas-see-6b439188/";
            }}
          >
            {" "}
            LinkedIn
          </Button>
        </ListItem>

        <ListItem>
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://medium.com/@seelcs12";
            }}
          >
            {" "}
            Medium
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default FilteredSideBar;
