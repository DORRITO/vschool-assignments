$(document).ready(function() {
    
    $(".classButton").click(function mario(){


        var goombaMath = $( "#goombaVal" ).val();
        var goombaTotal = $( "#goombaTotal" )[0];

        var bombMath = $( "#bombVal" ).val();
        var bombTotal = $( "#bombTotal" )[0];

        var cheepMath = $( "#cheepVal" ).val();
        var cheepTotal = $( "#cheepTotal" )[0];

        var total = $( "total" )[0];

        var newTotal = ((goombaMath * 5) + (bombMath * 7) + (cheepMath * 11));


        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'smw_coin.wav');
        audioElement.setAttribute('autoplay', 'autoplay');


        $( "#goombaTotal" ).html(goombaMath * 5);
        $( "#bombTotal ").html(bombMath * 7);
        $( "#cheepTotal ").html(cheepMath * 11);
        $( "#total" ).html(newTotal);
    });
    
    $( ".dark" ).click(function dark(){
        $(document.body).css({'background-image': "https://images5.alphacoders.com/445/thumb-1920-445906.jpg", "box-shadow": "inset 0 0 0 1000px rgba(0,0,0,.2)"});
    });

});