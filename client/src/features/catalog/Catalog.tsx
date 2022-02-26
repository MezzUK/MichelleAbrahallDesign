import { useState, useEffect } from "react";
import { Project } from "../../app/models/project";
import ProjectList from "./ProjectList";

export default function Catalog()
{
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
        .then(response => response.json())
        .then(data => setProjects(data))
    }, [])

    return (
        <>
            <ProjectList projects={projects} />
        </>
    )
}