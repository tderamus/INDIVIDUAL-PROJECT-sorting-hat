import { renderCards } from "../utils/renderCards.js";

// create studentCard function with htmlString to place studentData on the DOM
export const studentCard = (array) => {
  let domString = "";
  array.forEach(cardItem => {
  
  domString += `
          <div class="card" style="width: 18rem;">
        <img src=${cardItem.houseImageUrl} class="card-img-top" alt=${cardItem.house}>
        <div class="card-body">
          <h5 class="card-title">${cardItem.house}</h5></div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${cardItem.firstName}</li>
          <li class="list-group-item">${cardItem.lastName}</li>
        </ul>
      </div> 
      `
  
  });
  renderCards("#card-container", domString);
}


{/* <div class="card text-bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">${cardItem.house}</div>
  <div class="card-image" style="background-image: url(${cardItem.houseImageUrl});"></div>
    <div 
    <div class="card-body"></div>
    <h5 class="card-title">${cardItem.firstName}</h5>
    <div class="card-body"></div>
    <h5 class="card-title">${cardItem.lastName}</h5> */}
