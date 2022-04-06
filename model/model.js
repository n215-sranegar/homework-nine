//this information simulates getting data from a database

var homeContent = `<h1>home</h1>`;
var aboutContent = `<h1>about</h1>`;
var productsContent = `<h1>products</h1>`;
var contactContent = `<h1>contact</h1>`;


//this function is being called from the app.js and it has the page name
export function modelPageName(pgName) {
    console.log(pgName);

    //sends to View (index.html) 
    $("#app").html(eval(pgName));
}


