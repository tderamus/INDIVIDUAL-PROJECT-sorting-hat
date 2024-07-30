// create utility function to target DOM element ID and pass it an HTML string to render to the index.html page

export const renderCards = (elID, htmlString) => {
       const elSelected = document.querySelector(elID);
       elSelected.textContent = htmlString;
}
