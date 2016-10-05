var box = document.getElementById("box");

box.addEventListener("dblclick", dblClick);
box.addEventListener("mouseover", mouseOver);
box.addEventListener("mouseup", mouseUp);
box.addEventListener("mousedown", down);
box.addEventListener("mouseout", out);
                                    
function dblClick() {
    box.style.background = "green";
}

function mouseOver() {
    box.style.background = "blue";
}

function mouseUp() {
    box.style.background = "yellow";
}

function down() {
    box.style.background = "red";
}

function out() {
    box.style.background = "orange";
}