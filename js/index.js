const collapsible = document.querySelectorAll('.collapsible');
// console.log(collapsible);

collapsible.forEach((item)=>{
  const header = item.querySelector('.collapsible__header');
  const icon = header.getElementsByTagName('i')[0];
  header.addEventListener('click',()=>{
    item.classList.toggle('collapsible--expanded');
    icon.classList.toggle('fa-xmark');
  })
});

const side_overlay_btn = document.querySelector('.side-overlay-btn');
const side_overlay = document.querySelector('.side-overlay');

side_overlay_btn.addEventListener('click',function(){
  side_overlay.classList.toggle('side-overlay--expanded');
});
// console.log(side_overlay_btn);

const side_overlay_close_btn = document.querySelector('.cross-icon');

side_overlay_close_btn.addEventListener('click',function(){
  side_overlay.classList.toggle('side-overlay--expanded');
});


