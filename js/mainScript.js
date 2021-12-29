const onScroll = () => {
   const missionBlock = document.getElementById('mission_block');
   const missionText = document.getElementById('mission_text');
   const missionImg = document.getElementById('mission_img');

   let observer = new IntersectionObserver(
      (entries) => {
         const entry = entries[0];

         if (entry.isIntersecting) {
            missionImg.style.transform = "translateX(-65%) rotateZ(-90deg)"
            missionImg.style.transition = "transform 1s ease-in-out"

            missionText.style.opacity = "0.2"
            missionText.style.transform = "translateX(235%)"
            missionText.style.transition = "opacity 1s ease-in-out"
            missionText.style.transition = "transform 1s ease-in-out"
         }
         observer.unobserve(missionBlock)
      },
      {threshold: 1}
   );

   observer.observe(missionBlock);
}

const cookieAlert = () => {
   const cookie = document.querySelector('.cookie');
   const confirmButton = document.getElementById('confirm_cookie_button')

   cookie.classList.add('show_cookies')

   confirmButton.addEventListener('click', () => {
      cookie.classList.remove('show_cookies')
   })

   // confirmButton.removeEventListener()
}

const formError = () => {
   let form = document.getElementById('form');
   const formItems = document.querySelectorAll('input, textarea')

   form.addEventListener('submit', (event) => {
      event.preventDefault();
      for (let i = 0; i < formItems.length; i++) {
         if (formItems[i].value === "") {
            formItems[i].classList.add('formError')
         } else {
            formItems[i].classList.remove('formError');
         }
      }
   })
}

((window, document) => {
   window.onload = () => {
      onScroll();
      cookieAlert();
      formError();
   }
})(window, document, undefined)