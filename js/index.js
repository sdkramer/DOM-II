// Your code goes here

const get = (selector) => {
  return document.querySelector(selector);
}


/*****alert on mouseover*****/

function welcomeAlert(event){
  return alert("Welcome to the Fun Bus Website")
}

get('.logo-heading').addEventListener('mouseover', welcomeAlert)

/****sound on image***/
function busHorn (event){
  horn.play();
}

get('.intro img').addEventListener('click', busHorn)


/*****5 color changes on scroll points***/

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    get('.intro').style.backgroundColor = 'orange';
  }else{
    get('.intro').style.backgroundColor = '';
  };

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    get('.content-section').style.backgroundColor = 'pink';
  }else{
    get('.content-section').style.backgroundColor = '';
  };

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    get('.inverse-content').style.backgroundColor = 'aqua';
  }else{
    get('.inverse-content').style.backgroundColor = '';
  };

  if (document.body.scrollTop > 700|| document.documentElement.scrollTop > 700) {
    get('.content-destination').style.backgroundColor = 'red';
  }else{
    get('.content-destination').style.backgroundColor = '';
  };

  if (document.body.scrollTop > 900|| document.documentElement.scrollTop > 900) {
    get('.content-pick').style.backgroundColor = 'green';
  }else{
    get('.content-pick').style.backgroundColor = ''; 
  };
}

/****wheel*****/

function bigText(event){
return alert('hi')
}

get('p').addEventListener('click', bigText)