window.location = "";

window.location.href = "";

window.location.reload(); 
window.location.reload(true); // forcing the page to relaod from the server  
// The location.reload() method reloads the current web page.
// The method gives the exact same result as pressing the RELOAD button in your browser.

window.location


window.history.pushState()


// params

const params = new URL(document.location).searchParams
const query = params.get('query');
