var cp = 3;
var cn = 0;

if (cp >= 3) {
  document.querySelector(".prevbtn").style.visibility = "hidden";
}

function toslide(x) {
  var CN = cn;
  cn = parseInt(x) - 1;
  cp = 3 - Math.abs(cn);

  if (cn < 0) {
    cn = Math.abs(cn);
    prevslide();
  } else {
    nextslide();
  }
}

function prevslide() {
  if (cp >= 3) {
    document.querySelector(".prevbtn").style.visibility = "hidden";
  }
  if (cp < 3) {
    document.querySelector(".prevbtn").style.visibility = "visible";
    cp++;
    cn--;
    var vaL = -(cn * 100);
    document.querySelector(".i1").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".i2").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".i3").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".i4").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".i5").style.transform = `translateX(${vaL}%)`;
    document.querySelector(".i6").style.transform = `translateX(${vaL}%)`;

    document.querySelector(`.indi${cn}`).classList.add("activeindicator");
    
    for (let i = 0; i <= 3; i++) {
        if (i != cn){
            document.querySelector(`.indi${i}`).classList.remove("activeindicator");                
        }
    }
  }
  if (cn < 3) {
    document.querySelector(".nextbtn").style.visibility = "visible";
  }
  if (cp >= 3) {
    document.querySelector(".prevbtn").style.visibility = "hidden";
  }

}

function nextslide() {
  if (cn >= 3) {
    document.querySelector(".nextbtn").style.visibility = "hidden";
  }
  if (cn < 3) {
    document.querySelector(".nextbtn").style.visibility = "visible";
    cn++;
    cp--;
    var val = -(cn * 100);
    document.querySelector(".i2").style.transform = `translateX(${val}%)`;
    document.querySelector(".i3").style.transform = `translateX(${val}%)`;
    document.querySelector(".i4").style.transform = `translateX(${val}%)`;
    document.querySelector(".i5").style.transform = `translateX(${val}%)`;
    document.querySelector(".i1").style.transform = `translateX(${val}%)`;
    document.querySelector(".i6").style.transform = `translateX(${val}%)`;

    document.querySelector(`.indi${cn}`).classList.add("activeindicator");
    
    for (let i = 0; i <= 3; i++) {
        if (i != cn){
            document.querySelector(`.indi${i}`).classList.remove("activeindicator");                
        }
    }
  }
  if (cp < 3) {
    document.querySelector(".prevbtn").style.visibility = "visible";
  }
  if (cn >= 3) {
    document.querySelector(".nextbtn").style.visibility = "hidden";
  }

}