
const num = 58;
// Items
const card = document.querySelector('.card');
// const container = document.querySelector('.container');
const container = document.querySelector('.tracker');
const background_grid = document.querySelector(`#background_grid`);
const shades = document.querySelector(`#shades`);
const shadow = document.querySelector(`#shadow`);

const icon_1 = document.querySelector(`#icon_1`);
const icon_2 = document.querySelector(`#icon_2`);
const icon_3 = document.querySelector(`#icon_3`);


//Moving animation event
container?.addEventListener('mousemove', (e) => {
  let BCR = container.getBoundingClientRect()
  let X = BCR.right - e.clientX;
  let Y = BCR.bottom - e.clientY;

  let xAxis = ((X - 0)/(BCR.width - 0))*(50 - (-50)) + (-50);
  xAxis = Math.min(50, Math.max(-50, xAxis));

  let yAxis = ((Y - 0)/(BCR.height - 0))*(70 - (10)) + (10);
  yAxis = Math.min(70, Math.max(10, yAxis));

  // console.log(xAxis, yAxis);
  card.style.transform = `rotateX(${yAxis}deg) rotateZ(${xAxis}deg) translateZ(-200px)`;
})

//Animate In
container?.addEventListener('mouseenter', (e) => {
  if(background_grid) background_grid.style.opacity = `0`;
  if(shades) shades.style.opacity = `0`;
  if(shadow) shadow.style.opacity = `0`;

  setTimeout(()=> {
    for(var i=num; i>0; i--) {
      const line = document.querySelector(`#line_${i}`);
      if(line) line.style.transform = `translateZ(calc(${num-i} * var(--height)))`;
    }
    
    if(icon_1) icon_1.style.transform = `translateZ(calc(38.34 * var(--height)))`;
    if(icon_2) icon_2.style.transform = `translateZ(calc(23.34 * var(--height)))`;
    icon_3.style.transform = `translateZ(calc(57 * var(--height)))`;
  }, 200)


})

//Animate Out
container?.addEventListener('mouseleave', (e) => {
  animateOut(e);
})
animateOut = (e) => {
  e.stopPropagation();
  console.log('clicked')

  card.style.transform = `rotateX(0deg) rotateZ(0deg) translateZ(0px)`;

  for(var i=num; i>0; i--) {
    const line = document.querySelector(`#line_${i}`);
    if(line) line.style.transform = `translateZ(0px)`;
  }
  [icon_1, icon_2, icon_3].forEach(icon => {
    if(icon) icon.style.transform = `translateZ(1px)`;
  });

  setTimeout(()=> {
    if(background_grid) background_grid.style.opacity = `1`;
    if(shades) shades.style.opacity = `1`;
    shadow.style.opacity = `1`;
    // shadow.style.boxShadow = `inset -100px 100px 150px 50px #080B1C, inset 50px -50px 150px 100px #080B1C, inset 250px -50px 200px 100px rgba(8, 11, 28, 0.75), inset -170px 30px 150px 250px rgba(8, 11, 28, 0.75)`;
  }, 100)
}

// var menuOpen = false
const nav = document.querySelector(`.nav.destination`);
const line_1 = document.querySelector(`.line_1`);
const line_2 = document.querySelector(`.line_2`);
const line_3 = document.querySelector(`.line_3`);

toggleMenu = () => {
  // menuOpen = !menuOpen
  nav.classList.toggle("open")
}

var tab = "destination"
switchTab = (new_tab) => {
  if(new_tab != tab) {
    nav.classList.remove(tab)
    nav.classList.add(new_tab)
    tab = new_tab
  }
}

const creditsWrapper = document.querySelector(`.credits-wrapper`);
toggleCredits = () => {
  creditsWrapper.classList.toggle("open")
}