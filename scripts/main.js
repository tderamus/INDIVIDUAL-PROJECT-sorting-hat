// import components for Sorting Application
import { studentData } from "../data/studentData.js";
import { studentCard } from "../components/studentCard.js";
import { expelledStudentData } from "../data/expelledStudentData.js";
import { expelledStudentCard } from "../components/expelledStudentCard.js";



//get the form element from the DOM
const addStudent = document.querySelector("#student-form");
//Add studentCard to studentData
const studentAdd = (e) => {
  e.preventDefault(); //prevents default action of form button if no function applies
  const studentHouse = studentData.map(element => element);
  const houseChoice = studentHouse[Math.floor(Math.random() * studentHouse.length)];
  const imageUrl = studentHouse.filter(url => url.houseImageUrl === houseChoice.houseImageUrl);
  
   const studentObj = {
    id: studentData.length + 1,
    house: houseChoice.house,
    houseImageUrl: houseChoice.houseImageUrl,
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    spiritElement: houseChoice.spiritElement,
  }
  
  studentData.push(studentObj);
  studentCard(studentData);
  addStudent.reset();
}


//add event listener to addStudent form submit button
addStudent.addEventListener("submit", studentAdd);



//Start the sorting application
const startApp = () => {
  studentCard(studentData)
  expelledStudentCard(expelledStudentData)
}


startApp();
