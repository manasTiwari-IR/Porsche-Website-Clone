var Cp = 3;
var Cn = 0;

function tosliDe(x) {
  Cn = parseInt(x) - 1;
  Cp = 3 - Math.abs(Cn);

  if (Cn < 0) {
    Cn = Math.abs(Cn);
    Prevslide();
  } else {
    Nextslide();
  }
}

function Prevslide() {
  if (Cp <= 3) {
    Cp++;
    Cn--;
    var vaL = -(Cn * 100);
    document.querySelector(".I1").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".I2").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".I3").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".I4").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".I5").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".I6").style.transform = `translateX(${vaL}%)`;

    document.querySelector(`.inDi${Cn}`).classList.add("activeindicator");
    
    for (let i = 0; i <= 4; i++) {
        if (i != Cn){
            document.querySelector(`.inDi${i}`).classList.remove("activeindicator");                
        }
    }
  }
}

function Nextslide() {
  if (Cn <= 3) {
    Cn++;
    Cp--;
    var val = -(Cn * 100);
    document.querySelector(".I2").style.transform = `translateX(${val}%)`;
    document.querySelector(".I3").style.transform = `translateX(${val}%)`;
    document.querySelector(".I4").style.transform = `translateX(${val}%)`;
    document.querySelector(".I5").style.transform = `translateX(${val}%)`;
    document.querySelector(".I1").style.transform = `translateX(${val}%)`;
    document.querySelector(".I6").style.transform = `translateX(${val}%)`;

    document.querySelector(`.inDi${Cn}`).classList.add("activeindicator");
    
    for (let i = 0; i <= 4; i++) {
        if (i != Cn){
            document.querySelector(`.inDi${i}`).classList.remove("activeindicator");                
        }
    }
}
}