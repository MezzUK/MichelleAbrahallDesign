import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Project } from "../../app/models/project";

export default function ProjectDetails() {
    const {id} = useParams<{id: string}>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/projects/${id}`)
            .then(response => setProject(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id])

    if(loading) return <h3>Loading...</h3>

    if(!project) return <h3>Project not found</h3>

    return (
        <Typography variant='h2'>{project.name}</Typography>
    )
}