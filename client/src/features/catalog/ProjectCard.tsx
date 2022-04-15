import { Card, Button, CardActions, CardContent, CardMedia, Typography, CardHeader, Avatar, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { Project } from "../../app/models/project";

interface Props{
    project: Project;
}

export default function ProjectCard({project}: Props)
{
    return(
        <Card>
            <CardActionArea component={Link} to={`/catalog/${project.id}`}>
                <CardMedia
                    component="img"
                    image={project.imageUrl}
                    alt={project.name}
                />
            </CardActionArea>
      </Card>
    )
}