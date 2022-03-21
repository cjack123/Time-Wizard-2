import React from "react";
import { Link } from "react-router-dom";
import "./Project.css"
// import {getAllProjects} from "../../ProjectManager"



export const ProjectCard = ({ project, handleDeleteProject }) => {

    const countDown = (project) => {
    
        var dueDate = project.dueDate
        var today = Date.now();
    
        // The number of milliseconds in one day
        var deadline = 1000 * 60 * 60 * 24

        // Convert both dates to milliseconds
        var dueDate = dueDate.getTime()
        var today = today.getTime()

        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(dueDate - today)

        // Convert back to days and return
        return Math.round(difference_ms/deadline)
    } 



    
    return (
        <div className="card">
            <h1>{project.title}</h1>
            <h2>Due Date: {project.dueDate}</h2>
            <h2>Days Left: {countDown()} Days </h2>
            <p>Reason: {project.description}</p>
            <Link to={`/projects/${project.id}/task`}><button>View Project Tasks</button></Link>
            <button type="button" onClick={() => handleDeleteProject(project.id)}>Delete Project</button>
        </div>
    )
}