// import components for Sorting Application
import { studentData } from "../data/studentData.js";
import { studentCard } from "../components/studentCard.js";
import { expelledStudentData } from "../data/expelledStudentData.js";
import { expelledStudentCard } from "../components/expelledStudentCard.js";


//create click event to get addstudent form on DOM when clicked
const addStudentForm =document.querySelector(".add-student-btn");
//create addStudentForm event listener
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



//get the form element from the DOM to add new students
const addStudent = document.querySelector("#student-form");
//Add studentCard to studentData
const studentAdd = (e) => {
  e.preventDefault(); //prevents default action of form button if no function applies
  const studentHouse = studentData.map(element => element);
  const houseChoice = studentHouse[Math.floor(Math.random() * studentHouse.length)];
  // const imageUrl = studentHouse.filter(url => url.houseImageUrl === houseChoice.houseImageUrl);
  
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


//add functions to filter sudents by house assignments
const filter = (array, houseAssigned) => {
  const assignedHouseArray = [];
  array.forEach((option) => {
    if(option.house === houseAssigned){
    assignedHouseArray.push(option);
    }
  });
  return assignedHouseArray;
}


//target DOM elements for filtering
const showAllHouses = document.querySelector(".all-houses");
const showHufflePuff = document.querySelector(".hufflepuff");
const showGryffindor = document.querySelector(".gryffindor");
const showRavenclaw = document.querySelector(".ravenclaw");
const showSlytherin = document.querySelector(".slytherin");

//show all cards on DOM by filter
showAllHouses.addEventListener("click", () => {
  studentCard(studentData);
});

//show Hufflepuff assignments
showHufflePuff.addEventListener("click", () => {
  const hufflepuffAssignments = filter(studentData, "Hufflepuff");
  studentCard(hufflepuffAssignments);
});

//show Gryffindorf assignments
showGryffindor.addEventListener("click", () => {
  const gryffindorAssignments = filter(studentData, "Gryffindor");
  studentCard(gryffindorAssignments);
});

//show Ravenclaw assignments
showRavenclaw.addEventListener("click", () => {
  const ravenclawAssignments = filter(studentData, "Ravenclaw");
  studentCard(ravenclawAssignments);
});

//show Slytherin assignments
showSlytherin.addEventListener("click", () => {
  const slytherinAssignments = filter(studentData, "Slytherin");
  studentCard(slytherinAssignments);
});



//create function to move expelled students to Voldemorts Army list
//target the card div in the html file//
const expellCard = document.querySelector("#card-container")
expellCard.addEventListener('click', (e) => {
    if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    const index = studentData.findIndex(e => e.id === Number(id));
    const expelStnd = studentData.map(element => element);
    const expelArray = {
      house: "Voldemort Army",
      houseImageUrl: expelStnd[index].houseImageUrl,
      firstName: expelStnd[index].firstName,
      lastName: expelStnd[index].lastName,
      spiritElement: "Witchcraft",
    }
    
    expelledStudentData.push( expelArray );
    studentData.splice(index, 1);
    studentCard(studentData);
    expelledStudentCard(expelledStudentData);
    }
}); 


//Start the sorting application
const startApp = () => {
  studentCard(studentData)
  expelledStudentCard(expelledStudentData)
}


startApp();
