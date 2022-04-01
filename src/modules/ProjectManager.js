const remoteURL = "http://localhost:8088"

export const getProjectById = (projectId) => {
    //retrieves project properties json object
    return fetch(`${remoteURL}/projects/${projectId}?_expand=user`)
    .then(res => res.json())
}

export const getProjectUserById = (userId) => {
    //be sure your goals have good data and related to a project and goal
    return fetch(`${remoteURL}/projects?userId=${userId}`)
    .then(res => res.json())
}

export const getAllProjects = () => {
    return fetch (`${remoteURL}/projects`)
    .then(res => res.json())
}

export const deleteProject = (id) => {
    return fetch(`${remoteURL}/projects/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}

export const updateProject = (editedProject) => {
    return fetch(`${remoteURL}/projects/${editedProject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedProject)
    }).then(data => data.json());
}
  
export const addProject = (newProject) => {
    return fetch(`${remoteURL}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProject)
    }).then(response => response.json())
}
