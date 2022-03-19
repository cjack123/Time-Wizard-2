import React from "react"
// import { Link } from "react-router-dom";
import "./Goal.css"

export const GoalCard = ({ goal, project }) => {



  return (
    <div className="card">
      <div className="card-content">
      <form>
        <label for="fname" >Step :{goal.title}</label>
        <input type="chechbox" id="fname" name="fname"></input>
        </form>
        </div>
      </div>
      
  );





}


