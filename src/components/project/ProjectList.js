import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from './ProjectCard.js';
import { getAllProjects, getProjectById, deleteProject } from '../../modules/ProjectManager.js';


export const ProjectList = () => {
    //The initial state is an empty array
    const [projects, setProjects] = useState([]);
    let navigate = useNavigate();

    const getProjectById = () => {
        //grabs project and return from the API,
        // use setProjects to update state
        return getAllProjects().then(projectsFromAPI => {
            setProjects(projectsFromAPI)
        });
    }

    //got the customers from the API on the components's first render
    useEffect(() => {
        getProjectById();
    }, []);

    //this is the delete customer function
    const handleDeleteProject = id => {
        deleteProject(id)
        .then(() => getAllProjects().then(setProjects));
    };

    //.map() loops the projects api array displaying project cards' list
    return (
        <>
            {/* <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {navigate("/projects/create")}}>
                    Add New Project
                    </button>
            </section> */}
            <div className="container-cards">
                {projects.map(project =>
                    <ProjectCard 
                    key={project.id}
                    project={project}
                    handleDeleteProject={handleDeleteProject} />)}
            </div>
        </>
    )



}