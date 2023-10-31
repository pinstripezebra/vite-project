import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ContentGrid from "./components/ContentGrid";
import ProjectCard from "./components/ProjectCard";
import SidePanel from "./components/SidePanel";
import FilteredSideBar from "./components/FilteredSideBar";
import { useState } from "react";

import ConflictImage from "./assets/conflict-commodities.jpg";
import logo from "./assets/testLogo.jpg";
import BioPicture from "./assets/BioPicture.jpg";
import BioCard from "./components/BioCard";

const firstTitle = "Commodities-Conflict Correlation";
const firstDescription =
  "This project examines the relation between global conflict and commodities pricing using Dash and Sklearn. Data is pulled from the Nasdaq and ACLED Apis, cleaned, aggregated, and modeled with Pandas/SkLearn, and then visualized in a Dash Application. The end Application was then deployed as an Azure Web application.";
const firstHeading = "List";

const secondTitle = "Aircraft Delay Predictions";
const secondDescription =
  "A project using a deep learning approach for aircraft delay prediction.";

const bioTitle = "Biograpy";
const bioContent =
  "Data Science professional with a background in Industrial Engineering and 4 years experience delivering Analytic Solutions in the SemiConductor Manufacturing Space. In my spare time I enjoy exploring Socio-Economic and Political Data, Image Recognition, and NLP.";
const bioSkills = "Python, SQL, Machine Learning, MS Azure, Data Analysis";

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
        )}{" "}
        |
        {selectedProject == "Bio" && (
          <BioCard
            title={bioTitle}
            description={bioContent}
            image={BioPicture}
            skills={bioSkills}
          />
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
