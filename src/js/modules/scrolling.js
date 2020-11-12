import calc from "./calc"

const scrolling = (upSelector) => {

  const upElem = document.querySelector(upSelector)

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn')
      upElem.classList.remove('fadeOut')
    } else {
      upElem.classList.remove('fadeIn')
      upElem.classList.add('animated', 'fadeOut')
    }
  })

  /* SCROLLING WITH RAF */

  let links = document.querySelectorAll('[href^="#"]')
  let speed = 0.7

  links.forEach((link) => {
      link.addEventListener('click', function(event) {
        event.preventDefault()
  
        let widthTop = document.documentElement.scrollTop
        let hash = this.hash
        let toBlock = document.querySelector(hash).getBoundingClientRect().top // Получаем доступ к свойству top
        let start = null
  
        requestAnimationFrame(frame)
  
        function frame(time) {
          if (start === null) {
            start = time
          }
          
          let progress = time - start
          let pixelPerAnimation = 
          toBlock < 0 
          ? Math.max(widthTop - progress / speed, widthTop + toBlock) 
          : Math.min(widthTop + progress / speed, widthTop + toBlock)
          document.documentElement.scrollTo(0, pixelPerAnimation)
          if (pixelPerAnimation !== widthTop + toBlock) {
            requestAnimationFrame(frame)
          } else {
            location.hash = hash
          }
        }
      })
  })

  /* PURE JS SCROLLING */

  // const element = document.documentElement
  // const body = document.body

  // const calcScroll = () => {
  //   upElem.addEventListener('click', function(event) {
  //     let scrollTop = Math.round(body.scrollTop || element.scrollTop)

  //     if (this.hash !== '') {
  //       event.preventDefault()
  //       let hashElement = document.querySelector(this.hash)
  //       let hashElementTop = 0
  //       // offsetParent - элемент, относительно которого будет позиционироваться hashElement
  //       // offsetParent - ищет ближайшего предка
  //       while (hashElement.offsetParent) {
  //         hashElementTop += hashElement.offsetTop // offsetTop - кол-во пикселей, на которое делается отступ сверху относительно родительского элемента
  //         hashElement = hashElement.offsetParent
  //       }

  //       hashElementTop = Math.round(hashElementTop)
  //       smoothScroll(scrollTop, hashElementTop, this.hash)
  //     }

  //   })
  // }

  // const smoothScroll = (from, to, hash) => {
  //   let timeInterval = 1
  //   let prevScrollTop
  //   let speed

  //   if (to > from) {
  //     speed = 30
  //   } else {
  //     speed = -30
  //   }

  //   let move = setInterval(function () {
  //     let scrollTop = Math.round(body.scrollTop || element.scrollTop)

  //     if (
  //       prevScrollTop === scrollTop ||
  //       (to > from && scrollTop >= to) ||
  //       (to < from && scrollTop <= to)
  //     ) {
  //       clearInterval(move)
  //       history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash)
  //     } else {
  //       body.scrollTop += speed
  //       element.scrollTop += speed
  //       prevScrollTop = scrollTop
  //     }
  //   }, timeInterval)
  // }

  // calcScroll()
}

export default scrolling