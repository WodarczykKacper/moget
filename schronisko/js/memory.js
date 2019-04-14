document.addEventListener('DOMContentLoaded', function () {
    openMenu();
    navSize();
    //    scrollerMaster();
    scrollOp();
    //    scrollerTop();
    //    changeHover();
    //    hoverAnimation();
    //    showPaws();
    hoverPP();
    showArrow();
    smoothScroll();
    imageUp();

});

function openMenu() {
    let openM = document.getElementById('menuResp');
    let ulToggle = document.querySelector('#main-nav ul');
    openM.addEventListener('click', function () {
        ulToggle.classList.toggle('active');
    })
}

window.addEventListener('scroll', function () {
    navSize();
});

function navSize() {
    let scrollPos = window.pageYOffset;
    let heightNav = document.getElementById('main-nav').offsetHeight;
    if (scrollPos > heightNav)
        document.getElementById('main-nav').classList.add('change');
    else
        document.getElementById('main-nav').classList.remove('change');
}


window.addEventListener('scroll', function () {
    scrollOp();
    //    showPaws();
    showArrow();
    imageUp();
});

function scrollOp() {
    let scrollPos = window.pageYOffset;
    let heightMyMain = document.getElementById('myMain').offsetHeight;
    let result = (scrollPos / heightMyMain);
    document.addEventListener('scroll', function () {
        document.getElementById('myMain').style.filter = 'sepia(' + 1.5 * result + ')';
    })


}

//window.onscroll = function() {scrollerMaster()};

//function scrollerMaster() {
//  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    document.getElementById("scroller").style.display = "block";
//  } else {
//    document.getElementById("scroller").style.display = "none";
//  }
//}
//
//function scrollerTop(){
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
//}
//
//
//function hoverAnimation(){
//    let btn = document.getElementById('#logo');
//    btn.addEventListener('click', function () {
//    window.scrollTo(500,500)
//        
//    })
//    
//}


//function changeHover(){
//    let pof = document.getElementsByClassName('partoffooter');
//      if ( pof)



//function showPaws() {
//    let paw = document.getElementsByClassName('catPaw');
//    let highS = window.pageYOffset;
//        console.log(highS);
//    if (highS > 1000);
//       paw.classList.add = 'oezu';
//        }


function hoverPP() {
    let picFir = document.getElementById('leftt')
    let picSec = document.getElementById('rightt')
    picFir.addEventListener('mouseover', function () {
        document.getElementById('secondGirl').style.opacity = "1"
        document.getElementById('SGtittle').style.opacity = "0"
    })
    picFir.addEventListener('mouseout', function () {
        document.getElementById('secondGirl').style.opacity = "0"
        document.getElementById('SGtittle').style.opacity = "1"
    })
    picSec.addEventListener('mouseover', function () {
        document.getElementById('firstGirl').style.opacity = "1"
        document.getElementById('FGtittle').style.opacity = "0"
    })
    picSec.addEventListener('mouseout', function () {
        document.getElementById('firstGirl').style.opacity = "0"
        document.getElementById('FGtittle').style.opacity = "1"
    })
}

function showArrow() {
    var currentPosition = $(this).scrollTop();
    var distance = $('#secfirnav').offset().top;

    if (currentPosition >= distance) {
        $('.arrow').addClass('scrolled');
    } else {
        $('.arrow').removeClass('scrolled');
    }
}

function smoothScroll() {
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
};


function imageUp() {
    let currentPosition = window.pageYOffset;
    let background = document.getElementById('myMain');
    let distance = background.offsetTop;
    console.log(distance);
    console.log(currentPosition);
    if (currentPosition >= distance) {
        background.style.backgroundPosition = '0px ' + -currentPosition / 1.5 + 'px';
        let start = 0;
    } else {
        background.style.backgroundPosition = '0 -100px';
    }
}
$(document).ready(function () {
    $('#galfir').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    $('#galsec').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
})
