const filter = () => {
  const menu = document.querySelector('.portfolio-menu')
  const items = menu.querySelectorAll('li')
  const buttonAll = menu.querySelector('.all')
  const buttonLovers = menu.querySelector('.lovers')
  const buttonChief = menu.querySelector('.chef')
  const buttonGirl = menu.querySelector('.girl')
  const buttonGuy = menu.querySelector('.guy')
  const buttonGrandmother = menu.querySelector('.grandmother')
  const buttonGranddad = menu.querySelector('.granddad')
  const wrapper = document.querySelector('.portfolio-wrapper')
  const markAll = wrapper.querySelectorAll('.all')
  const markLovers = wrapper.querySelectorAll('.lovers')
  const markChief = wrapper.querySelectorAll('.chef')
  const markGirl = wrapper.querySelectorAll('.girl')
  const markGuy = wrapper.querySelectorAll('.guy')
  const no = document.querySelector('.portfolio-no')
  
  const typeFilter = (markType) => {
    markAll.forEach(item => {
      item.style.display = 'none'
      item.classList.remove('animated', 'fadeIn')
    })
    no.style.display = 'none'
    no.classList.remove('animated', 'fadeIn')

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block'
        mark.classList.add('animated', 'fadeIn')
      })
    } else {
      no.style.display = 'block'
      no.classList.add('animated', 'fadeIn')
    }
  }

  buttonAll.addEventListener('click', () => {
    typeFilter(markAll)
  })
  buttonLovers.addEventListener('click', () => {
    typeFilter(markLovers)
  })
  buttonChief.addEventListener('click', () => {
    typeFilter(markChief)
  })
  buttonGuy.addEventListener('click', () => {
    typeFilter(markGuy)
  })
  buttonGirl.addEventListener('click', () => {
    typeFilter(markGirl)
  })
  buttonGrandmother.addEventListener('click', () => {
    typeFilter()
  })
  buttonGranddad.addEventListener('click', () => {
    typeFilter()
  })

  menu.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.tagName === 'LI') {
      items.forEach(button => {
        button.classList.remove('active')
      })

      target.classList.add('active')
    }
  })


}

export default filter