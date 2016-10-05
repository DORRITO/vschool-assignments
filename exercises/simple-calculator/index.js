
function add() {
    var userAdd1 = document.getElementById("addInput1").value;
    var userAdd2 = document.getElementById("addInput2").value;
    var answer1 = document.getElementById("answer1");
    
    var add1 = parseInt(userAdd1);
    var add2 = parseInt(userAdd2);

    answer1.innerHTML = add1 + add2;
    

}

function sub() {
    var userSub1 = document.getElementById("subInput1").value;
    var userSub2 = document.getElementById("subInput2").value;
    var answer2 = document.getElementById("answer2");
    var sub1 = parseInt(userSub1);
    var sub2 = parseInt(userSub2);

    answer2.innerHTML = (sub1 - sub2);
}

function multiply() {
    var userMult1 = document.getElementById("multInput1").value;
    var userMult2 = document.getElementById("multInput2").value;
    var answer3 = document.getElementById("answer3");

    var mult1 = parseInt(userMult1);
    var mult2 = parseInt(userMult2);

    answer3.innerHTML = (mult1 * mult2);
}