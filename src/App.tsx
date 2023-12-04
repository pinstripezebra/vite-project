import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ContentGrid from "./components/ContentGrid";
import ProjectCard from "./components/ProjectCard";
import SidePanel from "./components/SidePanel";
import FilteredSideBar from "./components/FilteredSideBar";
import { useState } from "react";

import ConflictImage from "./assets/conflict-commodities.jpg";
import HeartFailureImage from "./assets/heart-failure-prediction.jpg";
import logo from "./assets/testLogo.jpg";
import BioPicture from "./assets/BioPicture.jpg";
import AirlineImage from "./assets/airline.jpg";
import BioCard from "./components/BioCard";
import ResumeCard from "./components/ResumeCard";

const firstTitle = "Commodities-Conflict Correlation";
const firstDescription =
  "This project examines the relation between global conflict and commodities pricing using Dash and Sklearn. Data is pulled from the Nasdaq and ACLED Apis, cleaned, aggregated, and modeled with Pandas/SkLearn, and then visualized in a Dash Application. The end Application was then deployed as an Azure Web application.";
const firstHeading = "List";
const firstSkillList = ["Python", "Pandas", "Dash", "Sklearn", "Azure"];

const secondTitle = "Aircraft Delay Predictions";
const secondDescription =
  "This project uses a deep learning approach to airline delay prediction using operation and weather data to predict whether an individual flight will be delayed.";
const secondSkillList = ["Python", "Pandas", "Tensorflow", "Sklearn"];

const thirdTitle = "Heart Failure Prediction";
const thirdDescription =
  "This project uses a Random Forest Classifier to predict heart failure based on input vairables like blood pressure, diabetes, etc. The data and model are then deployed as a Dash Application on Azure.";
const thirdSkillList = ["Python", "Pandas", "Dash", "Sklearn", "Plotly"];

const bioTitle = "Biograpy";
const bioContent =
  "I'm a Data Science professional with a background in Industrial Engineering and 4 years experience delivering Analytic Solutions in the Semiconductor Space. My education includes a Bachelors in Industrial Engineering with a Masters in Data Science. My recent work has focused on developing and deploying models based on tabular datasets using inference, prediction, or clustering to drive business value. In my spare time I enjoy exploring Socio-Economic and Political Data, Image Recognition, and NLP.";
const bioSkills = "Python, SQL, Machine Learning, MS Azure, Data Analysis";

function App() {
  //Variable for storing selected project
  //const [selectedProject, setProject] = useState("");
  const [selectedProject, setProject] = useState("Biography");
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
            link={"https://commoditesconflict.azurewebsites.net/"}
            linkName="Commmodities-Conflict Azure Application"
            skills={firstSkillList}
          />
        )}
        |
        {selectedProject == "Heart Failure Prediction" && (
          <ProjectCard
            title={thirdTitle}
            description={thirdDescription}
            test={selectedProject}
            image={HeartFailureImage}
            link={"https://dash-tutorial.azurewebsites.net/"}
            linkName="Heart-Failure-Prediction Azure Application"
            skills={firstSkillList}
          />
        )}
        |
        {selectedProject == "Aircraft Delay Prediction" && (
          <ProjectCard
            title={secondTitle}
            description={secondDescription}
            test={selectedProject}
            image={AirlineImage}
            link={"https://github.com/pinstripezebra/DS785-Capstone"}
            linkName="Delay Prediction Github"
            skills={secondSkillList}
          />
        )}{" "}
        |
        {selectedProject == "Biography" && (
          <BioCard
            title={bioTitle}
            description={bioContent}
            image={BioPicture}
          />
        )}
        |{selectedProject == "Resume" && <ResumeCard />}
      </GridItem>
    </Grid>
  );
}

export default App;
