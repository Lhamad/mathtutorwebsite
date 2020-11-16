
function validate() {
    var input = document.createElement('input');
    input.type='email';
    input.value=document.getElementById('test').value;
      
    if (input.checkValidity()) {
        alert('We will respond to this email address within 2 business days.');
    } else {
        alert('Please provide a valid email address');
    }
      
    return false;
  }
  

  
    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }