// import components for Sorting Application
import { studentData } from "../data/studentData.js";
import { studentCard } from "../components/studentCard.js";
import { expelledStudentData } from "../data/expelledStudentData.js";
import { expelledStudentCard } from "../components/expelledStudentCard.js";

//create click event to get form on DOM when clicked

const addStudentForm =document.querySelector(".add-student-btn");

addStudentForm.addEventListener("click", (e) =>{
  e.preventDefault();
  const formcContent = document.querySelector("#student-form");
  formcContent.innerHTML = `
   <div class="input-group mb-3">
      <span class="input-group-text">FirstName:</span>
      <input type="text" id="firstName" class="form-control" placeholder="" aria-label="FirstName" aria-describedby="basic-addon2">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">LastName::</span>
      <input type="text"  id="lastName" class="form-control" placeholder="" aria-label="LastName" aria-describedby="basic-addon2">
    </div>

    <div class="submit-btn">
      <button type="submit" id="submitStudent" class="btn btn-primary btn-lg">Submit</button>
    </div>  
  `
})



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
