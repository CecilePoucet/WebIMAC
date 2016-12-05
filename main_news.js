window.onload = function(){

    myCarroussel.start();
}

function carrousel(){
    var me = this;
    me.nbSlide;
    me.currentSlide = 0;
    me.timer = 1000;
    me.slides = [];

    me.start = function(){
        console.log("start");
        // Récupération des slides
        me.slides = document.getElementsByClassName("slide");
        // Récupération du nombre de slides
        me.nbSlide = me.slides.length;
        // On associe événement et fonction
        document.getElementById('ctrl-left').addEventListener("click",function(){me.toLeft()}); /*Ce serait plus beau en JQUERY mais je sais pas l'écrire (E)*/
        document.getElementById('ctrl-right').addEventListener("click",function(){me.toRight()}); /*Ce serait plus beau en JQUERY mais je sais pas l'écrire (E)*/
        // On met les photos dans le bon ordre d'index (concrètement on les inverses)
        for(var i = 1; i <  me.nbSlide; i++){
            me.slides[i].style.display = "none";
        }
    }

    me.toLeft = function(){
        console.log("toLeft");
        if(me.currentSlide > 0){
            me.slides[me.currentSlide].style.display = "none";
            me.currentSlide --;
            me.slides[me.currentSlide].style.display = "block";
        }


//J'ai rajouté ça pour que le carroussel retourne à la fin quand on arrive à la première slide et qu'on va à gauche. (E)
       else if(me.currentSlide==0) {
        	me.slides[me.currentSlide].style.display = "none";
        	me.currentSlide=me.nbSlide - 1;
        	me.slides[me.currentSlide].style.display = "block";
        }
    }

    me.toRight = function(){
        console.log("toRight");
        if(me.currentSlide < me.nbSlide - 1){
            me.slides[me.currentSlide].style.display = "none";
            me.currentSlide ++;
            me.slides[me.currentSlide].style.display = "block";
        
        }
//J'ai rajouté ça pour que le carroussel retourne au début quand on arrive à la dernière slide et qu'on va à droite. (E)
        else if(me.currentSlide==me.nbSlide-1) {
        	me.slides[me.currentSlide].style.display = "none";
        	me.currentSlide=0;
        	me.slides[me.currentSlide].style.display = "block";
        }
    }

}

var myCarroussel = new carrousel();
