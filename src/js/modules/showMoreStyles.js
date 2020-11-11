const showMoreStyles = (triggerSelector, stylesCards) => {

  const cards = document.querySelectorAll(stylesCards)
  const button = document.querySelector(triggerSelector)

  cards.forEach(card => {
    card.classList.add('animated', 'fadeInUp')
  })

  button.addEventListener('click', () => {
    cards.forEach(card => {
      card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2')
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
    })
    button.style.display = 'none'
  })

}

export default showMoreStyles