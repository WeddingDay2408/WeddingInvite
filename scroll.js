const elements = document.querySelectorAll('.text-container, .image-block');
window.addEventListener('scroll', function() {
 for (let i = 0; i < elements.length; i++) {
   if (window.scrollY >= elements[i].offsetTop && window.scrollY <= elements[i + 0.1].offsetTop + elements[i].clientHeight) {
     elements[i].style.opacity = '0';
   } 
   else {
     elements[i].style.opacity = '1';
   }
 }
});