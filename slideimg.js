// Devo dare al mio click sx i comandi per muovermi tra un immagine e l'altra da dx a sx. Facciamo andare l'immagine alla precedente. Aggiungo e rimuovo la classe active.
function leftClick(){

  var activePic = $("img.active");
  activePic.removeClass("active");

  var prevPic = activePic.prev("img");

  if(activePic.hasClass("first")){
    prevPic = $("img.last");
  }

  prevPic.addClass("active");
// Richiamo myDot() in modo che ad ogni click io vado a recuperare l'indice. Mi servirà dopo per aggiornare il pallino in base alla foto.
  myDots();
}

function rightClick(){
  // Per generare l'evento al click della parte dx. Si leva e si aggiunge la classe active a una img dopo l'altra consentendo così di attivare o disattivare il display block;
  var activePic = $("img.active");
  activePic.removeClass("active");

  // .next è la funzione per andare all'elemento dopo
  var nextPic = activePic.next("img");

// per saltare il bug che mi fa finire la serie delle img.Con un if riesco a identificare l'ultima e dargli un comando eventuale.
  if(activePic.hasClass("last")){
    nextPic = $("img.first");
  }

  nextPic.addClass("active");
  myDots();

}

function myDots(){

  var pics = $ (".picture-container > img");
  var activeInd;
  for ( var i = 0; i < pics.length; i++){
// eq mi serve per recuperare l'indice. Mi fa trattare l'elemento come un array.
    if (pics.eq(i).hasClass("active")){
      activeInd = i;
    }
  }
// Tolgo e aggiungo con la concatenazione le classi che svuotano e riempiono il pallino.
  var oldDot = $(".direct-link-wrapper > i.fas");
  oldDot.removeClass("fas").addClass("far");
// Ora devo solo associare con eq ecc ad ogni immagine il suo pallino corrispondente.
  var dots = $(".direct-link-wrapper > i");
  var nextDot = dots.eq(activeInd);
  // faccio l'inverso di quando ho svuotato il pallino
  nextDot.removeClass("far").addClass("fas");

}

// Ora bisogna solo associare i pallini con la relativa immagine.
function clickDot(){
  // Prima di tutto tramite this e me associo l'indice che mi ero già calcolato con i pallini corrispondenti
  var me = $(this);
  var meIndex = me.index()
// Associo l'immagine levando la classe active
  var activePic = $("img.active");
  activePic.removeClass("active");

  var pics = $(".picture-container > img");
  var nextPic = pics.eq(meIndex);
  //Associo il pallino richiamndo la funzione e mettendo la nextpic
  nextPic.addClass("active");
  myDots();



}

function init (){

  var leftPart = $(".left-part");
  var rightPart = $(".right-part");
  var dots = $(".direct-link-wrapper > i");

  leftPart.click(leftClick);
  rightPart.click(rightClick);
  dots.click(clickDot);
}


$(document).ready(init);
