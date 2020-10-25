
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
  

  