import React from "react"
import { Link } from "react-router-dom";
import "./GoalCard.css"

export const GoalCard = ({ goal, handleDeleteGoal }) => {
    return (
      <div className="card">
            {/* <p>Title: {goal.title}</p>
            <p>Description: {goal.description}</p> */}
            <Link to={`/goals/${goal.id}/edit`}>
              <button>Edit</button>
              </Link>
        </div>
    );
}