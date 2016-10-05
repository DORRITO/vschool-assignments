function mario() {
    
    var goombaMath = parseInt(document.getElementById("goombaVal").value);
    var goombaTotal = document.getElementById("goombaTotal");
    
    var bombMath = parseInt(document.getElementById("bombVal").value);
    var bombTotal = document.getElementById("bombTotal");
    
    var cheepMath = parseInt(document.getElementById("cheepVal").value);
    var cheepTotal = document.getElementById("cheepTotal");
    
    var total = document.getElementById("total");

    var newTotal = ((goombaMath * 5) + (bombMath * 7) + (cheepMath * 11));
    
    goombaTotal.innerHTML = goombaMath * 5;
    bombTotal.innerHTML = bombMath * 7;
    cheepTotal.innerHTML = cheepMath * 11;
    total.innerHTML = newTotal;
}