const remoteURL = "http://localhost:8088"

export const getStepById = (stepId) => {
  //be sure your steps have good data and related to a location and step
  return fetch(`${remoteURL}/steps/${stepId}`)
  .then(res => res.json())
}

export const getAllSteps = () => {
  return fetch(`${remoteURL}/steps`)
  .then(res => res.json())
}

export const deleteStep = (id) => {
  return fetch(`${remoteURL}/steps/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addStep = (newStep) => {
  return fetch(`${remoteURL}/steps`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newStep)
  }).then(response => response.json())
}

export const updateStep = (editedStep) => {
  return fetch(`${remoteURL}/steps/${editedStep.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedStep)
  }).then(data => data.json());
}