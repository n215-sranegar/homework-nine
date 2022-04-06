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
var aboutContent = `<div class="about-container"><h1>Activites</h1>
<p>Explore the Rockies and tap into the best of Colorado unfiltered right here in Winter Park. 
From lush forests to towering peaks, find endless adventures at Winter Park Resort!</p>
<h2>ADVANCED PURCHASE IS HIGHLY RECOMMENDED AND SOMETIMES REQUIRED</h2>
<div class="activities-wrapper">
<div class="activity a1">
<h2>Ski / Snowboarding ></h2></div>
<div class="activity a2">
<h2>Tubing Hill ></h2></div>
<div class="activity a3">
<h2>Astronomy Tour ></h2></div>
</div>
</div>`;

var lessonsContent = `<div class="lessons-container">
<div class="lessons-wrapper">
<div class="lessons-content">
<h2>PRIVATE SKI & SNOWBOARD LESSONS</h2>
<p>Receive guest-centered instruction for yourself and up to five friends or family members ages 3 and up. From beginners to experts, a personalized lesson awaits.</p>
<div class="lesson-btn-wrapper">
<button>LEARN MORE</button></div></div>
<div class="lessons-img l1"></div>
</div>

<div class="lessons-wrapper">
<div class="lessons-content">
<h2>KIDS GROUP SKI LESSONS (AGE 4-14)</h2>
<p>No matter your child’s skill level, a group lesson ensures a fun, and educational experience for an unbeatable value. Kids skiing group lessons offered to participants ages 4 - 14 years old.</p>
<div class="lesson-btn-wrapper">
<button>LEARN MORE</button></div></div>
<div class="lessons-img l2"></div>
</div>

<div class="lessons-wrapper">
<div class="lessons-content">
<h2>KIDS GROUP SNOWBOARD LESSONS (AGE 4-14)</h2>
<p>No matter your child’s skill level, a group lesson ensures a fun, and educational experience for an unbeatable value. Kids snowboarding group lessons offered to participants ages 4 - 14 years old.</p>
<div class="lesson-btn-wrapper">
<button>LEARN MORE</button></div></div>
<div class="lessons-img l3"></div>
</div>

</div>`;

var contactContent = `<div class="contact-page-wrapper">
<div class="contact-container">
  <div class="contact-info-left">
    <div class="contact-info questions">
      <h4>Contact</h4>
      <p>Have questions about our products or your order? Send us a message! We'll get back to you within 48 hours.</p>
    </div>

  <div class="contact-info">
    <h4>Phone Number</h4>
    <p>555-555-4305</p>
  </div>
  <div class="contact-info">
    <h4>Visit Us</h4>
    <p>85 Parsenn Road<br>
      Winter Park, CO 80583
      </p>
  </div>
</div>
  <div class="contact-form">
    <h1>Contact</h1>
    <div class="contact-info questions">
      <p>Have questions about our products or your order? Send us a message! We'll get back to you within 48 hours.</p>
    </div>
    <input type="text" placeholder="name">
    <input type="text" placeholder="email">
    <textarea name="" id="" cols="30" rows="10" placeholder="message..."></textarea>
    <button>SEND</button>
  </div>
</div> 
</div>`;


//this function is being called from the app.js and it has the page name
export function modelPageName(pgName) {
    console.log(pgName);

    //sends to View (index.html) 
    $("#app").html(eval(pgName));
}


