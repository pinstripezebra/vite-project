import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ContentGrid from "./components/ContentGrid";
import ProjectCard from "./components/ProjectCard";
import SidePanel from "./components/SidePanel";
import FilteredSideBar from "./components/FilteredSideBar";
import { useState } from "react";

const firstTitle = "Commodities-Conflict Correlation";
const firstDescription =
  "This project examines the relation between global conflict and commodities pricing.";

const firstHeading = "List";

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
        <ProjectCard
          title={firstTitle}
          description={firstDescription}
          test={selectedProject}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
