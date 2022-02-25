import { Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Project } from "../models/project";
import Header from "./Header";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  function addProject() 
  {
      setProjects(prevState => [...prevState,
      {
        id: prevState.length + 1,
        name: 'Project ' + (prevState.length + 1),
        description: 'Description Project ' + (prevState.length + 1),
        category: 'Category 1',
        imageUrl: "http://picsum.photos/200"
      }])
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog projects={projects} addProject={addProject} />
      </Container>
    </>
  );
}

export default App;
