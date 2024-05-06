count = 0;

function triggerIncrement(){
    count += 1 ;
    document.getElementById('count-el').innerText = count;
}

function triggerDecrement(){
    count -= 1;
    document.getElementById('count-el').innerText = count;
}

function triggerReset(){
    count = 0;
    document.getElementById('count-el').innerText = count;
}

function triggerSave(){
    document.getElementById('save-count').innerText = count;
}
