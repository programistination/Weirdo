const MenuBtn = document.querySelector('#menu-icon');
const CloseMenuBtn = document.querySelector('#close-menu-icon');
const Menu = document.querySelector('#menu');
const contact = document.querySelector('#contact-btn');
const contactForm = document.querySelector('#contact-form');

MenuBtn.addEventListener('click', (e) => {
   Menu.classList.add('open');
   MenuBtn.classList.add('hidden');
   CloseMenuBtn.classList.add('visible');
   document.body.style.position = 'fixed';
   e.preventDefault();
});

CloseMenuBtn.addEventListener('click', (e) => {
   Menu.classList.remove('open');
   MenuBtn.classList.remove('hidden');
   CloseMenuBtn.classList.remove('visible');
   document.body.style.position = '';
   e.preventDefault();
});

contact.addEventListener('click', (e) => {
   contactForm.innerHTML = `  <div>
   <label class="lab" for="name">Name</label>
   <input class="inp" id="name" type="text" />
</div>

<div>
   <label class="lab" for="email">Email</label>
   <input class="inp" id="email" type="email" />
</div>

<div>
   <label class="lab" for="email">Question</label>
   <textarea
      name="problem"
      id="problem"
      cols="30"
      rows="8"
   ></textarea>
</div>

<div><input id="send" type="button" value="Send" /></div>`;
   document.querySelector('#contact-title').remove();
   contact.remove();
   e.preventDefault();
});

AOS.init({
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 70, // offset (in px) from the original trigger point
   duration: 650, // values from 0 to 3000, with step 50ms
   easing: 'cubic-bezier(0.69, 0.23, 0.15, 0.67)', // default easing for AOS animations
});

var lastScrollTop = 0;
var header = document.getElementById('desktop-header');

window.addEventListener('scroll', function () {
   var scrollTop = this.pageYOffset || document.documentElement.scrollTop;

   if (scrollTop > lastScrollTop) {
      header.style.top = '-100px';
   } else {
      header.style.top = '0';
      header.style.background = '#00082c';
   }
   lastScrollTop = scrollTop;

   if (window.pageYOffset == 0) {
      header.style.background = 'transparent';
   }
});
