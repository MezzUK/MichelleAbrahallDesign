import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Project } from "../../app/models/project";

interface Props {
    projects: Project[];
    addProject: () => void;
}

export default function Catalog({projects, addProject}: Props)
{
    return (
        <>
            <List>
                {projects.map((project) => (
                    <ListItem key={project.id}>
                        <ListItemAvatar>
                            <Avatar src={project.imageUrl} />
                        </ListItemAvatar>
                        <ListItemText>
                            {project.name} - {project.description}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <Button variant='contained' onClick={addProject}>Add project</Button>
        </>
    )
}