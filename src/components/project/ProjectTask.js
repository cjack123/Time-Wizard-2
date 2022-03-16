

//This is the project page that displays one one project at a time.


export const ProjectTask = () => {

    var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }

    return (
        <>
            <section id="header">
                <h1>Project Title</h1>
                <h3>Today's Date</h3>
                <h3>Due Date</h3>
                    <p>Project Objective Purpose: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </section>



            <section id="goals">
            <button class="collapsible" onclick="coll()" value="">Goal ${}</button>
                <div class="content">
                    <p>Step 1</p>


                    {/* When expanded, steps will show with checkout*/}

                    <div>
                        <input> type="checkbox" id="scales" name="scales"
                                checked</input>
                        <label for="scales">Step 1</label>
                        </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns"></input>
                        <label for="horns">Step 2</label>
                        </div>
                </div>
                </section>

        </>
    )
}

<section id="goals">
            <button class="collapsible" onclick="coll()" value="">Goal ${}</button>
                <div class="content">
                    <p>Step 1</p>


                    {/* When expanded, steps will show with checkout*/}

                    <div>
                        <input> type="checkbox" id="scales" name="scales"
                                checked</input>
                        <label for="scales">Step 1</label>
                        </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns"></input>
                        <label for="horns">Step 2</label>
                        </div>
                </div>
                </section>