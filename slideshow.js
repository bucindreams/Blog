/*<![CDATA[*/ 
  
var timeOut = 2e3,
    slideIndex = 0,
    autoOn = !0;

function autoSlides() {
    timeOut -= 20, 1 == autoOn && timeOut < 0 && showSlides(), setTimeout(autoSlides, 20)
}

function prevSlide() {
    timeOut = 2e3;
    var e = document.getElementsByClassName("mySlides"),
        s = document.getElementsByClassName("dot");
    for (i = 0; i < e.length; i++) e[i].style.display = "none", s[i].className = s[i].className.replace(" active", "");
    --slideIndex > e.length && (slideIndex = 1), 0 == slideIndex && (slideIndex = 3), e[slideIndex - 1].style.display = "block", s[slideIndex - 1].className += " active"
}

function showSlides() {
    timeOut = 2e3;
    var e = document.getElementsByClassName("mySlides"),
        s = document.getElementsByClassName("dot");
    for (i = 0; i < e.length; i++) e[i].style.display = "none", s[i].className = s[i].className.replace(" active", "");
    ++slideIndex > e.length && (slideIndex = 1), e[slideIndex - 1].style.display = "block", s[slideIndex - 1].className += " active"
}
autoSlides();
/*]]>*/