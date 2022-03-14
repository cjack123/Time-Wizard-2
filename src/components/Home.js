// import React, { useState, useEffect } from "react";


export const Home = () => {
    
    return (
        <>
        <section id="header">
            <h1>Project Title</h1>
            <h3>Today's Date</h3>
            <h3>Due Date</h3>
            <p>Project Objective Purpose: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
        <section>
        <button class="collapsible" onclick="coll()" value="">Goal ${}</button> 
        <div class="content">
            <p>Time estimated</p>
            <div>
                        {/* <input> type="checkbox" id="scales" name="scales"
                                checked</input> */}
                        <label for="scales">Step 1</label>
                        </div>
            </div> 
        </section>
        
    </>
    )

}