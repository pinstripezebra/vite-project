import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ContentGrid from "./components/ContentGrid";
import ProjectCard from "./components/ProjectCard";

const firstTitle = "Commodities-Conflict Correlation";
const firstDescription =
  "This project examines the relation between global conflict and commodities pricing.";

function App() {
  return (
    <Grid templateAreas={'"nav nav" "aside main"'}>
      <GridItem area="nav" bg="coral">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>
      <GridItem area="main">
        <ProjectCard title={firstTitle} description={firstDescription} />
      </GridItem>
    </Grid>
  );
}

export default App;
