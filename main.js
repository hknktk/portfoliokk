const menuButton = document.querySelector('.js-menu__button');
const menu = document.querySelector('.js-menu');
const menuList = document.querySelector('.js-menu__list');

function menuFunction(el,cb){
  el.addEventListener('click',() =>{
    cb();
  })
}

menuFunction(menuButton,menuOpenClose);
menuFunction(menuList,menuOpenClose);





function menuOpenClose(){
  menuButton.classList.toggle('active');
  menu.classList.toggle('show');
}


// // テキストアニメーション
// const cb = function (el, isIntersecting) {
//   if(isIntersecting) {
//       const ta = new TextAnimation(el);
//       ta.animate();
//   }
// }

// const so = new ScrollObserver('.', cb);


// const menuButton = document.querySelector('.js-menu__button');
// const menu = document.querySelector('.js-menu');
// const menuList = document.querySelector('.js-menu__list');


// menuButton.addEventListener('click' , () => {
//   menuOpenClose();
// })

// menuList.addEventListener('click' , () => {
//   menuOpenClose();
// })


// function menuOpenClose(){
//   menu.classList.toggle('show');
//   menuButton.classList.toggle('active');
// }


// // テキストアニメーション
// const cb = function (el, isIntersecting) {
//   if(isIntersecting) {
//       const ta = new TextAnimation(el);
//       ta.animate();
//   }
// }

// const so = new ScrollObserver('.box__title', cb);


const callback = function (el, isIntersecting) {
  if(isIntersecting) {
      el.classList.add('inview');
  }
} 


const so2 = new ScrollObserver('.under-line__anime', callback);

