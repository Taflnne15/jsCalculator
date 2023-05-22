// let output = document.querySelector('#output')
// function calculate(value) {
//     output.value += value

// }



// function del() {
// let result = document.getElementById('answer');
// result.value = result.value.slice(0,-1);

  let result=document.getElementById('output');

    function intakecalculate(number){
result.value+=number;

  }

function Result(){
   result.value=eval(result.value) 
}

function clearSum() {
result.value = '';
}


function delSum(){
let output = result.value;
result.value = output.slice(0, -1)
}




