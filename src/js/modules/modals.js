const modals = () => {

  let buttonPressed = false
  
  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {

    const trigger = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)
    const windows = document.querySelectorAll('[data-modal]')

    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault()
        }

        buttonPressed = true

        if (destroy) {
          item.remove()
        }

        windows.forEach(item => {
          item.style.display = 'none'
          item.classList.add('animated', 'fadeIn')
        })
  
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'

      })
    })

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none'
      })
      modal.style.display = 'none'
      document.body.style.overflow = ''
      // document.body.classList.add('modal-open')
    })

    modal.addEventListener('click', (event) => {
      if (event.target && event.target === modal) {
        modal.style.display = 'none'
        document.body.style.overflow = ''
        // document.body.classList.add('modal-open')
        windows.forEach(item => {
          item.style.display = 'none'
        })
      }
    })
  }

  

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display

      document.querySelectorAll('[data-modal]').forEach(item => {
       if (getComputedStyle(item).display !== 'none') {
         display = 'block'
       }  
      })

      if (!display) {
        document.querySelector(selector).style.display = 'block'
        document.body.style.overflow = 'hidden'
      }

    }, time)
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
      if (!buttonPressed && 
        (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1)) {
          document.querySelector(selector).click()
        }
    })
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
  openByScroll('.fixed-gift')
  // showModalByTime('.popup-consultation', 5000)

}

export default modals