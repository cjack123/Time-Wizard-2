import React, { useState, useEffect } from "react";
import { getProjectById } from "../project/ProjectManager";

export const Queue = ({projectId}) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    getProjectById(projectId).then(project => {
      setProject(project);
    });
  }, [projectId]);

  return (
    <div className="project-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};