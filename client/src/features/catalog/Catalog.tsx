import { Project } from "../../app/models/project";

interface Props {
    projects: Project[];
    addProject: () => void;
}

export default function Catalog({projects, addProject}: Props)
{
    return (
        <>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name} - {project.description}</li>
                ))}
            </ul>
            <button onClick={addProject}>Add project</button>
        </>
    )
}