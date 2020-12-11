//shorthand function
function docWrite(variable) {
    document.write(variable);
}

//displays date/time/timzone
var dt = new Date();

//prevents right click
document.addEventListener('contextmenu', event => event.preventDefault());
