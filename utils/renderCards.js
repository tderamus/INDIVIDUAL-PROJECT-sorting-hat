// create utility function to target DOM element ID and pass it an HTML string to render to the index.html page

export const renderCards = (elId, htmlString) => {
       const selectedElId = document.querySelector(elId);
       selectedElId.innerHTML = htmlString;
}
