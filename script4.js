function tosLiDe(x) {
  x = parseInt(x);
  var vaL = -(x * 100);
  document.querySelector(".Ii1").style.transform = `translateX(${vaL}%)`;
  document.querySelector(".Ii2").style.transform = `translateX(${vaL}%)`;
  document.querySelector(".Ii3").style.transform = `translateX(${vaL}%)`;
  document.querySelector(".Ii4").style.transform = `translateX(${vaL}%)`;
  document.querySelector(".Ii5").style.transform = `translateX(${vaL}%)`;
  document.querySelector(".Ii6").style.transform = `translateX(${vaL}%)`;

  document.querySelector(`.InDi${x}`).classList.add("activeindicator");

  for (let i = 0; i <= 5; i++) {
    if (i != x) {
      document.querySelector(`.InDi${i}`).classList.remove("activeindicator");
    }
  }
}