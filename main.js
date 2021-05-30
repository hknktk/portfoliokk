const menuButton = document.querySelector('.js-menu__button');
const menu = document.querySelector('.js-menu');
const menuLists = document.querySelectorAll('.js-menu__list');

function menuOnOff(target){
  menuButton.addEventListener('click',() => {
    target.classList.toggle('active');
  })
}

menuOnOff(menu);
menuOnOff(menuButton);

function toggleActive(el){
  el.classList.toggle('active');
}

menuLists.forEach(list =>{
  list.addEventListener('click', () => {
    toggleActive(menu);
    toggleActive(menuButton);
  })
})




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

const close_buttons = document.querySelectorAll('.js-close__button');

close_buttons.forEach(button => {
  button.addEventListener('click', () => {
    let button_parent = button.parentElement;
    toggleActive(button_parent);
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

