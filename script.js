document.querySelector('.overlay-button').addEventListener('click', function() {
    // alert('Button Clicked!');
    var audio = document.getElementById('myAudio');
    modal.style.display = "block";
    audio.play().catch(function(error) {
        // Handle the case where the user's browser doesn't allow autoplay
        console.log(error);
    });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("bruh");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
