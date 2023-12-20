
/* click outside end */

//! home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click", function () {
  sidebar.style.left = "0";
});
btnCloseSidebar.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});
/* click outside start */
document.addEventListener("click", function (event) {
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSidebar)
  ) {
    sidebar.style.left = "-100%";
  }
});



// slider


let glide = new Glide('.glide',{
  type:'carousel',
  autoplay:2000,
  hoverpause:true,

})






glide.mount()


gsap.to(".toTop",{
  bottom:'30px',
  right:'30px'
})

gsap.to('.toTop',{
  y:-10,
  repeat:-1,
  duration:1,
  yoyo:true
})

document.querySelector('.toTop').addEventListener('click',()=>{
  window.scrollTo(0,0)
})



document.querySelector('.deneme1').addEventListener('wheel',function(e){
  e.preventDefault();
  this.scrollLeft += e.deltaY;
})


// slider bitis








