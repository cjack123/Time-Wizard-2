import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../../modules/ProjectManager';
import './ProjectForm.js'

//Problem: The input text autofills for all textboxes.
//line 21
//I need my add goal and add step buttons to render a new goal/step template
//There needs to be a function that associates the id of all of the array options in database.





export const ProjectForm = () => {
    // State will contain both Event data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

    const navigate = useNavigate();


    const [appProject, setProject] = useState ({
        userId: 0,
        title: "",
        description: "",
        dueDate: "",
		// add goals and steps on 3/19/22. maybe add topics? Personal, professional, school, chores, cooking, hobbies, et
		goals: "",
		steps: ""

    })

    const [isLoading, setIsLoading] = useState(false);

    const handleControlledInputChange = (project) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newProject = { ...appProject }
		let selectedVal = project.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (project.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Project is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newProject[project.target.id] = selectedVal
		// update state
		setProject(newProject)
	}

    const handleClickSaveProject = (project) => {
		project.preventDefault() //Prevents the browser from submitting the form

		const user = JSON.parse(sessionStorage.getItem("TimeWizard_users"))
		const newProject = { ...appProject }
		newProject.userId = user.id
		newProject.dateTime = new Date().toLocaleString();
		// setProject(newProject)
		//invoke addProject passing project as an argument.
		//once complete, change the url and display the project list
		addProject(newProject)
			.then(() => navigate("/projects"))
		
	}

    return (
        <>
        <form className="projectForm">

			<section className="project_header">
            <h2 className="projectForm_header">New Project</h2>
				<fieldset>
						<div className="form-group">
							<label htmlFor="text">Title</label>
							<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="English Paper" value={appProject.title} />
							</div>
							</fieldset>
				<fieldset>
						<div className="form-group">
							<label htmlFor="date">Due Date</label>
							<input type="date" id="dueDate" onChange={handleControlledInputChange} required autoFocus className="form-control" value={appProject.dueDate} />
							</div>
							</fieldset>
				<fieldset>
						<div className="form-group">
							<label htmlFor="textarea">Description</label>
							<input type="textarea" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="This paper is about how the Albert Bandura's behavior theory and Mary Ainsworth attachment theory are the greater indictors of personality." value={appProject.description} />
							</div>
							</fieldset>
				<button>Add Goal</button>
				</section>
{/* Goals Section */}
			<section className="goals_section">
			<h2>Add Goals</h2>
				<h3>Goal 1</h3> 
				{/* I want a function that +1 each time a goal or step is added */}
				<fieldset>
						<div className="form-group">
							<label htmlFor="text">Title</label>
							<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Outline" value={appProject.title} />
							</div>
							</fieldset>
				<fieldset>
						<div className="form-group">
							<label htmlFor="date">Due Date</label>
							<input type="date" id="dueDate" onChange={handleControlledInputChange} required autoFocus className="form-control" value={appProject.dueDate} />
							</div>
							</fieldset>	
				<fieldset>
						<div className="form-group">
							<label htmlFor="textarea">Description</label>
							<input type="textarea" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="The outline is a requirement and counts for 5% of the assignment." value={appProject.description} />
							</div>
							</fieldset>		
				<button>Add Step</button>
				</section>

{/* Steps Section */}
			<section className="steps_section">
			<h2>Add Steps</h2>
				<h3>Step 1</h3> 
				<fieldset>
						<div className="form-group">
							<label htmlFor="text">Description</label>
							<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Outline" value={appProject.title} />
							</div>
							</fieldset>
				<fieldset>
						<div className="form-group">
							<label htmlFor="text">Description</label>
							<input type="number" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" value={appProject.title} />
							</div>
							</fieldset>

				</section>

			<br></br><br></br><br></br><br></br><br></br>
            <button className="btn btn-primary"
				onClick={handleClickSaveProject}>
				Save Project
			</button>

        </form>
        </>
    )

}