
var Logo = document.getElementById("Logo");
var scrollPosition2 = 0
var timer = null;
window.addEventListener("scroll", function() {
    
    const scrollPosition1 = document.documentElement.scrollTop;
    if(scrollPosition1 > scrollPosition2){
        Logo.src = "../photo/ЧелДляСайтаВниз.png";
    }
    if(scrollPosition1 < scrollPosition2){
        Logo.src = "../photo/ЧелДляСайтаВверх.png";
    }
    scrollPosition2 = scrollPosition1;
    
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
        Logo.src = "../photo/ЧелДляСайтаpngВправо.png";
    }, 50);
}, false);

 function GoStart() {
    window.scrollTo(pageXOffset, 0);
  };
