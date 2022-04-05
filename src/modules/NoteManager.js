const remoteURL = "http://localhost:8088"


export const getNoteById = (noteId) => {
    //be sure your notes have good data and related to a goal and note
    return fetch(`${remoteURL}/notes/${noteId}?_expand=user&_expand=project`)
    .then(res => res.json())
}

export const getGoalNoteById = (goalId) => {
    //be sure your goals have good data and related to a project and goal
    return fetch(`${remoteURL}/notes?goalId=${goalId}`)
    .then(res => res.json())
}

export const getAllNotes = () => {
    return fetch(`${remoteURL}/notes`)
    .then(res => res.json())
}

export const deleteNote = (id) => {
    return fetch(`${remoteURL}/notess/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}