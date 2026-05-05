let counterEl = document.getElementById("counterValue");

function onIncrement(){
    let previousCounterVal = counterEl.textContent;
    let updatedCounterVal = parseInt(previousCounterVal) + 1;
    
    if (updatedCounterVal > 0){
        counterEl.style.color = "green";
    }
    else if(updatedCounterVal < 0){
        counterEl.style.color = "red";
    }
    else{
        counterEl.style.color = "black";
    }
    counterEl.textContent = updatedCounterVal;
}

function onReset(){
    let updatedCounterVal = 0;
    counterEl.textContent = updatedCounterVal;
    counterEl.style.color = "black";
}

function onDecrement(){
    let previousCounterVal = counterEl.textContent;
    let updatedCounterVal = parseInt(previousCounterVal) - 1;
    
    if (updatedCounterVal > 0){
        counterEl.style.color = "green";
    }
    else if(updatedCounterVal < 0){
        counterEl.style.color = "red";
    }
    else{
        counterEl.style.color = "black";
    }
    counterEl.textContent = updatedCounterVal;
}