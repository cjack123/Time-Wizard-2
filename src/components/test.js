// import { ProjectList } from "../project/ProjectList"
import { getAllProjects } from "../modules/ProjectManager"

//// testing out code and theores here (upside smiley face)
export const ProjectSorter = (project) => {
    
    const dates = project.dateTime

}


// export const Test = () => {

//     var timer;

//     var compareDate = new Date();
//     compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

//     timer = setInterval(function() {
//     timeBetweenDates(compareDate);
//     }, 1000);

//     function timeBetweenDates(toDate) {
//     var dateEntered = toDate;
//     var now = new Date();
//     var difference = dateEntered.getTime() - now.getTime();

//     if (difference <= 0) {

//         // Timer done
//         clearInterval(timer);
    
//     } else {
        
//         const hours =24
//         var days = Math.floor(hours / 24);

//         $(`#days`).text(days);
        
//     }
//     }

//     return (

//         <div id="timer">
//             <span id="days"></span>days
//             </div>
//     )
// }