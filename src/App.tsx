import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ContentGrid from "./components/ContentGrid";
import ProjectCard from "./components/ProjectCard";
import SidePanel from "./components/SidePanel";
import FilteredSideBar from "./components/FilteredSideBar";
import { useState } from "react";

import ConflictImage from "./assets/conflict-commodities.jpg";
import logo from "./assets/testLogo.jpg";

const firstTitle = "Commodities-Conflict Correlation";
const firstDescription =
  "This project examines the relation between global conflict and commodities pricing.";
const firstHeading = "List";

const secondTitle = "Aircraft Delay Predictions";
const secondDescription =
  "A project using a deep learning approach for aircraft delay prediction.";

function App() {
  //Variable for storing selected project
  const [selectedProject, setProject] = useState("");
  return (
    <Grid templateAreas={'"nav nav" "aside main"'}>
      <GridItem area="nav" bg="cadetblue">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside">
        <FilteredSideBar onSelectProject={(String) => setProject(String)} />
      </GridItem>
      <GridItem area="main">
        {selectedProject == "Commodities-Conflict" && (
          <ProjectCard
            title={firstTitle}
            description={firstDescription}
            test={selectedProject}
            image={ConflictImage}
          />
        )}
        |
        {selectedProject == "Aircraft Delay Prediction" && (
          <ProjectCard
            title={secondTitle}
            description={secondDescription}
            test={selectedProject}
            image={logo}
          />
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
