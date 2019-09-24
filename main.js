//show hide team desc
function toggleDisplay() {
let current = event.target.className;
let statusCheck = document.getElementById(current);

if(statusCheck.classList.contains("hidden")) {
        statusCheck.classList.remove("hidden");
    }
else {
    statusCheck.classList.add("hidden");
}
}