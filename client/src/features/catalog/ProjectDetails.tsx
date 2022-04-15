import { Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
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
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={project.imageUrl} alt={project.name} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h6'>WHO: {project.name}</Typography>
                <Box sx={{ m: 2 }} />
                
                <Typography variant='h5'>What</Typography>
                <Divider sx={{mb: 2}}></Divider>
                <Typography variant='body1'>{project.description}</Typography>
                <Box sx={{ m: 2 }} />

                <Typography variant='h5'>Why</Typography>
                <Divider sx={{mb: 2}}></Divider>
            </Grid>
        </Grid>
    )
}