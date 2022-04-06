//this information simulates getting data from a database

var homeContent = `
<div class="hero">
<h1>Winter Park Resort</h1>
<p>Winter Park, CO</p></div>
<div class="booking-container">
<h2>Book Early and Save!</h2>
<div class="home-booking-buttons-wrapper">
<div class="home-booking-buttons">
<h3>Lodging</h3></div>
<div class="home-booking-buttons">
<h3>Lift Ticketes</h3></div>
<div class="home-booking-buttons">
<h3>Rentals</h3></div>
<div class="home-booking-buttons">
<h3>Tubing Hill</h3></div>
<div class="home-booking-buttons">
<h3>Season Passes</h3></div>
</div>
</div>
<div class="lodging">
<h2>On-site Lodging</h2>
<div class="button-wrapper"><button>Book Now!</button></div></div>`;
var aboutContent = `<h1>about</h1>`;
var productsContent = `<h1>products</h1>`;
var contactContent = `<h1>contact</h1>`;


//this function is being called from the app.js and it has the page name
export function modelPageName(pgName) {
    console.log(pgName);

    //sends to View (index.html) 
    $("#app").html(eval(pgName));
}


