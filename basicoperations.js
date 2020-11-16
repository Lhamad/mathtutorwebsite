function addNumbers()
{
        var val1 = parseInt(document.getElementById("value1").value);
        var val2 = parseInt(document.getElementById("value2").value);
        var ansD = document.getElementById("answer");
        ansD.value = val1 + val2;
}


function subtractNumbers()
{
        var val1 = parseInt(document.getElementById("value3").value);
        var val2 = parseInt(document.getElementById("value4").value);
        var ansD = document.getElementById("answer2");
        ansD.value = val1 - val2;
}

function multiplyNumbers()
{
        var val1 = parseInt(document.getElementById("value5").value);
        var val2 = parseInt(document.getElementById("value6").value);
        var ansD = document.getElementById("answer3");
        ansD.value = val1 * val2;
}

function divideNumbers()
{
        var val1 = parseInt(document.getElementById("value7").value);
        var val2 = parseInt(document.getElementById("value8").value);
        var ansD = document.getElementById("answer4");
        ansD.value = val1 / val2;
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