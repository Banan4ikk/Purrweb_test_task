((window, document) => {
   window.onload = () => {
      const cookieAlert = document.querySelector('.cookie');
      const confirmButton = document.getElementById('confirm_cookie_button')

      cookieAlert.classList.add('show_cookies')

      confirmButton.addEventListener('click', () => {
         cookieAlert.classList.remove('show_cookies')
      })

      // confirmButton.removeEventListener()
   }
})(window, document, undefined)