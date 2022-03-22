import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
// import { getProjectById, deleteProject } from "../../modules/ProjectManager";
import { getGoalById, deleteGoal } from "../../modules/GoalManager";
import { GoalList } from "../goal/GoalList"
import { GoalForm } from "../goal/GoalForm"

//Add ProjectTaskManager

//This component will be render on the home page.
//Format will include checkboxes for the steps and goals.
//Once prject is completed it will either be deleted or moved to a new array of completed projects.
//I will use the ProjectCard and ProjectTask component.
//AnimalDetains in Kennels shpould be a reference for this file.


export const ProjectTask = () => {
    
    const [animal, setGoal] = useState({ Title: "", Description: "", });
    const [isLoading, setIsLoading] = useState(true);


    return (

        <>
        <GoalList />
        </>
    )

}