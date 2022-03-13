import React from "react"
import { Link } from "react-router-dom";
import "./StepCard.css"

export const StepCard = ({ step, handleDeleteStep }) => {
    return (
      <div className="card">
          <h3>Name: <span className="card-custname">
            {step.name}
              </span></h3>
            <p>Title: {step.title}</p>
            <Link to={`/steps/${step.id}/edit`}>
              <button>Edit</button>
              </Link>
            <button type="button" onClick={() => handleDeleteStep(step.id)}>Terminate Membership</button>
        </div>
    );
}