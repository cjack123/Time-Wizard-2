import React from "react";
import { Link } from "react-router-dom";
import "./Project.css"
// import {getAllProjects} from "../../ProjectManager"



export const ProjectCard = ({ project, handleDeleteProject }) => {

    
    return (
        <div className="card">
            <h1>{project.title}</h1>
            <h2>Due Date: {project.dueDate}</h2>
            <p>Reason: {project.description}</p>
            <Link to={`/projects/${project.id}/task`}><button>View Project Tasks</button></Link>
            <button type="button" onClick={() => handleDeleteProject(project.id)}>Delete Project</button>
        </div>
    )
}