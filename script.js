// Display Time

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


// Change Background Color

var timeActual = today.format("H");
var timeCal = $("#blocks").text();
var timeNumber = timeCal.replace(/\D/g,'');

console.log(timeCal)
console.log(timeNumber)


// for (let i = 0; i < timeCal.length; i++) {
//    return (timeNumber);
// }

// if (timeNumber < timeActual) {
   
// }else if (timeNumber === timeActual) {

// }else (timeNumber > timeActual); {

// };


var taskInputEl = $('#formGroupExampleInput')

function handleFormSubmit(event) {
    event.preventDefault();


    // var task = taskInputEl.val().trim();
    // printProjectData(task);
    
    $("btn btn-danger").addEventListener("click")
    localStorage.setItem(task);
}

const task = localStorage.getItem(taskInputEl)