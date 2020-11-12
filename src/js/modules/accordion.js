const accordion = (triggersSelector) => {
  const buttons = document.querySelectorAll(triggersSelector)
  // const blocks = document.querySelectorAll(itemsSelector)
  // - для второго варианта решения, в параметры передавать также селектор itemsSelector 

  /* 1 VARIANT */

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(button => {
        button.classList.remove('active-style')
        button.nextElementSibling.classList.remove('active-content')
        button.nextElementSibling.style.maxHeight = '0px'
      })

      this.classList.toggle('active-style')
      this.nextElementSibling.classList.toggle('active-content')

      if (this.classList.contains('active-style')) {
        //Рассчитываю высоту блока (параметр scrollHeight), также 80 из-за padding
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'
      } else {
        this.nextElementSibling.style.maxHeight = '0px'
      }
    })
  })






  /* 2 VARIANT */
  // blocks.forEach(block => {
  //   block.classList.add('animated', 'fadeInDown')
  // })

  // buttons.forEach(button => {
  //   button.addEventListener('click', function() {
  //     if (!this.classList.contains('active')) {
  //       buttons.forEach(btn => {
  //         btn.classList.remove('active', 'active-style')
  //       })
  //       this.classList.add('active', 'active-style')
  //     }
  //   })
  // })

}

export default accordion