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
          <li class="list-group-item">${cardItem.spiritElement}</li>
        </ul>
        <button class="btn btn-danger" id="expel--${cardItem.id}">EXPEL</button>
      </div> 
      `
  
  });
  renderCards("#card-container", domString);
}


