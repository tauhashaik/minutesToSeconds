let input = document.getElementById('input');
let output = document.getElementById('output');
let calcbtn = document.getElementById('calcbtn');

calcbtn.addEventListener('click', minutesToSeconds)

function minutesToSeconds(){
    let minutes = parseInt(minInput.value);
    if(!isNaN(minutes)){
        let seconds = minutes *60;
    secOutput.value = seconds;
    } else{
        alert(`Please enter a number you FOOL!`)
    }
}