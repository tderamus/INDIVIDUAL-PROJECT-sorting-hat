// import components for Sorting Application
import { studentData } from "../data/studentData.js";
import { studentCard } from "../components/studentCard.js";
import { expelledStudentData } from "../data/expelledStudentData.js";
import { expelledStudentCard } from "../components/expelledStudentCard.js";

//Add studentCard to studentData

//add event listener to addStudent form submit button




//Start the sorting application
const startApp = () => {
  studentCard(studentData)
  expelledStudentCard(expelledStudentData)
}


startApp();
