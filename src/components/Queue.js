import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from './ProjectCard.js';
import { getAllProjects, getProjectById, deleteProject, getProjectUserById } from '../../modules/ProjectManager.js';


export const ProjectList = () => {
    //The initial state is an empty array
    const [projects, setProjects] = useState([]);
    let navigate = useNavigate();

    const getProjects = () => {
        //After the date comes back from the API,
        // we use the setprojects funstion to update state
        return getProjectById().then(projectsFromAPI => {
            setProjects(projectsFromAPI)
        });
    }

    //got the customers from the API on the components's first render
    useEffect(() => {
        getProjects();
    }, []);
 
    //this is the delete customer function
    const handleDeleteProject = id => {
        deleteProject(id)
        .then(() => getProjectById().then(setProjects));
    };
//hello

    //.map() loops the projects api array displaying project cards' list
    return (
        <>

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