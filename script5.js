function tosd(x) {
  x = parseInt(x);
  var t = parseInt(x);
  t = -(t * 100);
  document.querySelector(".d1").style.transform = `translateX(${t}%)`;
  document.querySelector(".d2").style.transform = `translateX(${t}%)`;
  document.querySelector(".d3").style.transform = `translateX(${t}%)`;
  document.querySelector(".d4").style.transform = `translateX(${t}%)`;

  document.querySelector(`.iD${x}`).classList.add("activeindicator");
  for (var i = 0; i <= 2; i++) {
    if (i != x) {
      document.querySelector(`.iD${i}`).classList.remove("activeindicator");
    }
  }
}

function toSD(x) {
  x = parseInt(x);
  var t = parseInt(x);
  t = -(t * 100);
  document.querySelector(".d1").style.transform = `translateX(${t}%)`;
  document.querySelector(".d2").style.transform = `translateX(${t}%)`;
  document.querySelector(".d3").style.transform = `translateX(${t}%)`;
  document.querySelector(".d4").style.transform = `translateX(${t}%)`;

  document.querySelector(`.ID${x}`).classList.add("activeindicator");
  for (var i = 0; i <= 3; i++) {
    if (i != x) {
      document.querySelector(`.ID${i}`).classList.remove("activeindicator");
    }
  }
}
