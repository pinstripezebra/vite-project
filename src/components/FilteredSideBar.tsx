import { Button, HStack, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onSelectProject: (projectName: string) => void;
}

const FilteredSideBar = ({ onSelectProject }: Props) => {
  let items = [
    "Bio",
    "Commodities-Conflict",
    "Aircraft Delay Prediction",
    "Resume",
  ];
  //Hook function
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const heading = "List";

  return (
    <>
      <h1>heading</h1>
      <List>
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
      </List>
    </>
  );
};

export default FilteredSideBar;
