//Company details
var companyname = "Example Company"

//Employee details
var name = "Name"

//Tasks
var tasks = "<p> -Finish the contact page</p>";
    tasks += "<p> -Test the waters </p>";
    // ^ Multiple tasks example. To update just rewrite whats in the "" or to add a new task CTRL C+ CTRL R to redo another line then update the "".

function docWrite(variable) {
    document.write(variable);
}

//displays date/time/timzone
var dt = new Date();

//prevents right click
document.addEventListener('contextmenu', event => event.preventDefault());
