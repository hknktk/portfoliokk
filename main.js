const menuButton = document.querySelector('.js-menu__button');
const menu = document.querySelector('.js-menu');
const menuList = document.querySelector('.js-menu__list');

function toggleActive(el,target){
  el.addEventListener('click',() =>{
    target.classList.toggle('active');
  })
}

toggleActive(menuButton,menu);
toggleActive(menuList,menu);

toggleActive(menuButton,menuButton);
toggleActive(menuList,menuButton);


function addActive(el){
  el.classList.add('active');
}

const detail_buttons = document.querySelectorAll('.js-detail__button');



detail_buttons.forEach(button => {
  button.addEventListener('click', () => {
    let button_parent = button.parentElement;
    let detail_box = button_parent.nextElementSibling;
    addActive(detail_box);
  })
})



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

