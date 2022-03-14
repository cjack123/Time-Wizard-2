import React from "react"
import { Link } from "react-router-dom";
import "./GoalCard.css"

export const GoalCard = ({ goal, handleDeleteGoal }) => {
    return (
      <>
      <div className="card">

        <p>Collapsible Goal Set:</p>
        <button class="collapsible" value="">Goal Title</button>

       <section id="middle">
              <div class="field">
                <h3 id="cent">Topics</h3>
                    ${steps.map(
                      step => {
                          return `<input name="faveTopic" value="" type="checkbox">
                          <label>step.title</label>`
                      }).join("")}
                </div>
            </section>


      </div>
      </>

    );
}


