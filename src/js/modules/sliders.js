const sliders = (sliderSelector, direction, prevSelector, nextSelector) => {

  let slideIndex = 1
  let paused = false
  const items = document.querySelectorAll(sliderSelector)

  function showSlides(itemIndex) {
    if (itemIndex > items.length) {
      slideIndex = 1
    }

    if (itemIndex < 1) {
      slideIndex = items.length
    }
    
    items.forEach(item => {
      item.classList.add('animated')
      item.style.display = 'none'
    })

    items[slideIndex - 1].style.display = 'block'
  }
  showSlides(slideIndex)

  function changeSlides(itemIndex) {
    showSlides(slideIndex += itemIndex)
  }

  try {
    const prevButton = document.querySelector(prevSelector)
    const nextButton = document.querySelector(nextSelector)

    prevButton.addEventListener('click', () => {
      changeSlides(-1)
      items[slideIndex - 1].classList.remove('slideInLeft')
      items[slideIndex - 1].classList.add('slideInRight')
    })

    nextButton.addEventListener('click', () => {
      changeSlides(1)
      items[slideIndex - 1].classList.remove('slideInRight')
      items[slideIndex - 1].classList.add('slideInLeft')
    })
  } catch (error) {
    console.log(error);
  }

  function activateAnimation() {
    if (direction === 'vertical') {
      paused = setInterval(() => {
        changeSlides(1)
        items[slideIndex - 1].classList.add('slideInDown')
      }, 3000)
    } else {
      paused = setInterval(() => {
        changeSlides(1)
        items[slideIndex - 1].classList.remove('slideInRight')
        items[slideIndex - 1].classList.add('slideInLeft')
      }, 3000)
    }
  }

  activateAnimation() 

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused)
  })
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation()
  })


}

export default sliders