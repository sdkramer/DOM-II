// Your code goes here

const get = (selector) => {
  return document.querySelector(selector);
}


/*****alert on mouseover*****/

function welcomeAlert(event){
  return alert("Welcome to the Fun Bus Website")
}

get('.logo-heading').addEventListener('mouseover', welcomeAlert)

/*****5 color changes on scroll points***/

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    get('.intro').style.backgroundColor = 'orange';
  };
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    get('.content-section').style.backgroundColor = 'pink';
  };
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    get('.inverse-content').style.backgroundColor = 'aqua';
  };
  if (document.body.scrollTop > 700|| document.documentElement.scrollTop > 700) {
    get('.content-destination').style.backgroundColor = 'red';
  };
}