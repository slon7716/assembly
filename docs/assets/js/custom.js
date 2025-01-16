$(document).ready(function () {
   $('select').niceSelect();
});

function installAccordion() {
   const accordionButton = document.querySelectorAll('.accordion-item__button');
   accordionButton.forEach(button => {
      button.addEventListener('click', function (event) {
         const thisAccordionItem = event.target.closest('.accordion-item');
         thisAccordionItem.classList.toggle('active');
      })
   })
}

if (document.querySelector('.accordion')) {
   installAccordion();
}