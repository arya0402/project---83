canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var color = "colorInput";
var width = "widthInput";
var radius = "radiusInput";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    color = document.getElementById("colorInput").value;
    width = document.getElementById("widthInput").value;
    radius = document.getElementById("radiusInput").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    color = document.getElementById("colorInput").value;
    width = document.getElementById("widthInput").value;
    radius = document.getElementById("radiusInput").value;
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    color = document.getElementById("colorInput").value;
    width = document.getElementById("widthInput").value;
    radius = document.getElementById("radiusInput").value;
    mouseEvent = "mouseleave";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    console.log(mouseEvent);
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown") {
        console.log("Current poisition of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function clearArea(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

