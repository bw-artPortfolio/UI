//show team desc
function toggleDisplay() {
    let targetClass = event.target.className;
    let targetId = document.getElementById(targetClass);

    if(targetId.classList.contains("hidden")) {
        targetId.classList.remove("hidden");
    }    
}

//hide team desc
function hideModal() {
    let targetClass = event.target.className;

    if(targetClass === 'modal') {
       targetClass.classList.add("hidden");
    }
}