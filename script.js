// Time

var today = moment();

$("#currentDay").text(today.format("MMM Do, YYYY"));


// Background Color 


var timeActual = today.format("H");

var timeCal = $("#blocks").text();

var timeNumber = timeCal.replace(/\D/g,'');

console.log(timeCal)

console.log(timeNumber)



var taskInputEl = $('#formGroupExampleInput')

function handleFormSubmit(event) {

    event.preventDefault();


    // var task = taskInputEl.val().trim();
    // printProjectData(task);
    
    $("btn btn-danger").addEventListener("click")

    localStorage.setItem(task);
}

const task = localStorage.getItem(taskInputEl)