/***************************************************/
/********** Image Gallery on College Page **********/
/***************************************************/            
var currentImgNumber = 5;
            
            function mouseOver(n){
                var imgName = "img"+n;
                var mainImg = document.getElementById("mainImg");
                currentImgNumber = n;
                var smallImg = document.getElementById(imgName);
                mainImg.src= smallImg.src;
            }
            
            function onNextClick()
            {
                var imgNumber = currentImgNumber + 1;
                
                if(imgNumber > 10){
                    imgNumber = 1;
                }
                
                var imgName = "img"+imgNumber;
                var nextImg = document.getElementById(imgName);
                var mainImg = document.getElementById("mainImg");
                mainImg.src= nextImg.src;
                currentImgNumber = imgNumber;
            }
            
            function onPrevClick()
            {
                var imgNumber = currentImgNumber - 1;
                
                if(imgNumber < 1){
                    imgNumber = 10;
                }
                
                var imgName = "img"+imgNumber;
                var nextImg = document.getElementById(imgName);
                var mainImg = document.getElementById("mainImg");
                mainImg.src= nextImg.src;
                currentImgNumber = imgNumber;
            }

/***********************************************************************/
/*********** CSS Switcher (Dark/Light Mode) on College Page ************/
/***********************************************************************/
$(document).ready(function(){
    $(".styleswitch").click(function() {
        $('link[rel=stylesheet]').attr('href', $(this).attr('rel'));  
    });
});