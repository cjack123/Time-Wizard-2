import React from "react";
// import { Link } from "react-router-dom";
import "./Project.css"

export const ProjectCard = ({ project, handleDeleteEvent }) => {

    // const countDown = (day1, day2) => {
    
    //     var today = Date.now();
    
    //     // The number of milliseconds in one day
    //     var deadline = 1000 * 60 * 60 * 24

    //     // Convert both dates to milliseconds
    //     var date1_ms = date1.getTime()
    //     var date2_ms = date2.getTime()

    //     // Calculate the difference in milliseconds
    //     var difference_ms = Math.abs(date1_ms - date2_ms)

    //     // Convert back to days and return
    //     return Math.round(difference_ms/deadline)
    // } 

    return (
        <div className="card">
            <h1>{project.title}</h1>
            <h2>Due Date: {project.dueDate}</h2>
            <h2>Days Left: {} </h2>
            <img />
            <button>View Project</button>
        </div>
    )
}