$(document).ready(function () {
    let menuScrollTimer = null;
    $(".nav a").click(function (e) {
        // Prevent default behaviour ( scroll to element )
        e.preventDefault();
        if (menuScrollTimer === null) {
            // Highlight the clicked item
            $('.nav a.active').removeClass('active');
            $(this).addClass('active');
            // Smooth scroll to the target section
            let target = $(this).attr('href');
            $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 1050);
            // Set `menuScrollTimer` timer
            // This will prevents multiple clicks on menu items whule the smooth scroll is taking effect
            // This will also prevent the scroll logic from running
            menuScrollTimer = setTimeout(function () {
clearTimeout(menuScrollTimer);
menuScrollTimer = null;
            }, 1050);
        }
    });

    $(window).scroll(function (e) {
        // Avoid triggering the logic if the scroll event is triggerd from clicking one of the items
        if (menuScrollTimer === null) {
            let windowTop = $(this).scrollTop();

            $('.nav a').each(function (event) {
if (windowTop >= $($(this).attr('href')).offset().top - 100) {
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
}
            });
        }
    });
});


//progress bar starts
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};
//progress bar ends



var typed = $(".typed");

$(function() {
  typed.typed({
    strings: ["Mridul Kar.", "Designer.", "Developer.", "Musician."],
    typeSpeed: 100,
    loop: true,
  });
});




// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
modalImg.alt = this.alt;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
}

// Get the modal2
var modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
modal2.style.display = "block";
modalImg2.src = this.src;
modalImg2.alt = this.alt;
captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal2.style.display = "none";
}


// Get the modal3
var modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    modalImg3.alt = this.alt;
    captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal3.style.display = "none";
}




          