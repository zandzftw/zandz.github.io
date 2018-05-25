    window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("container");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

<script type = "text/javascript">
        function pic1()
        {
            document.getElementById("img").src ="https://drive.google.com/uc?id=1eNIRO_J1LuMKhWNsPYzoNj9C0uc-ANuh";
            document.getElementById("bio").innerHTML = "ZOMGShiny came into this world kicking and screaming and has decided to keep doing just that. Classically trained by his radio, Shiny has been singing for as long as he can remember (and with his knack for forgetting lyrics, we’ll say he started singing yesterday). Growing up, Shiny never imagined that he would one day be on stage entertaining audiences around the country. However, upon meeting the Boozewolf, he was quickly *Glass Bottle-Bottle Glassed* out onto the stage to sing while Zack played with his wood.<br><br> If you’re wondering about the raccoon and his name; well so is he, so welcome to the club. The raccoon came about in high school out of a joke. This joke has gone on for 11 years now and currently has no sign of stopping. <br><br> Travelling about and meeting such amazing people, Shiny enjoys gaming, sports, music, shinies, hanging out with friends, and drinking his cheese beer. Wanna know what that is? Then book them for a show, or come to a concert near you. Chitter!";
        }
        function pic2()
        {
            document.getElementById("img").src ="https://drive.google.com/uc?id=1zXv-Zo1nxY3X-1stNtGQe1EgMXc0n-B8";
            document.getElementById("bio").innerHTML = "Zack Grey, also known as ''The BoozeWolf,'' is the 7 days younger of the two. He has been playing music since he was barely a teenager and has been playing videogames pretty much forever. <br><br> His wolf character started by him being dubbed a ''derpy wolf'' by his ''friends'' in high school, a moniker which he has stayed pretty true to. The ''Booze'' part came after he developed an appreciation for good beers and a fascination with bad tequila.<br><br>He met Shiny in college where, between mutual banter, music appreciation, & stupidity, they found that they were a good pair of idiots to work together (or at least tolerate one another). <br><br>Zack's often the techy one of the two, always finding new gadgets, games, and things to do or tinker with while constantly dragging Shiny by the arm to check out his projects with puppy dog eyes. When not gaming or performing...Actually, even while gaming and performing, he enjoys a good drink with even better friends and making good stories between the two.";
        } </script>  

<script>
twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "TwitterDev"
  },
  document.getElementById("container")
);
</script>

