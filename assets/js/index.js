var timeDisplayEl = $('#time-date');
var row = $('row');
var present = $('present');

function displayTime() {
    var rightNow = moment().format('hh:mm:ss a [on] MMM DD, YYYY');
    timeDisplayEl.text(rightNow);

    if(row === rightNow){
      document.bgColor = present;
    }
}

setInterval(displayTime, 1000);

// $(document).ready(function(){

// var hour = document.querySelector("hour");

//     if(hour === displayTime){
//         console.log("this works");
//     };
        
        
  
//    function changeColor(){
//     var status = document.getElementById("present").value;
//     document.bgColor = status;

//   }  
    

// });

var input = document.querySelector("description");
var saveBtn = document.querySelector("saveBtn");

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var schedule = {
    input: input.value.trim(),
  };

  // set new submission to local storage 
  localStorage.setItem("schedule", JSON.stringify(schedule));
  
});
