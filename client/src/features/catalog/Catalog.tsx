import { Button } from "@mui/material";
import { Project } from "../../app/models/project";
import ProjectList from "./ProjectList";

interface Props {
    projects: Project[];
    addProject: () => void;
}

export default function Catalog({projects, addProject}: Props)
{
    return (
        <>
            <ProjectList projects={projects} />
            <Button variant='contained' onClick={addProject}>Add project</Button>
        </>
    )
}