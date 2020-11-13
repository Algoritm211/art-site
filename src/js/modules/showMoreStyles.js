import { getData } from "../services/requests"

const showMoreStyles = (triggerSelector, wrapper) => {

  // const cards = document.querySelectorAll(stylesCards)
  const button = document.querySelector(triggerSelector)

  // cards.forEach(card => {
  //   card.classList.add('animated', 'fadeInUp')
  // })

  // button.addEventListener('click', () => {
  //   cards.forEach(card => {
  //     card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2')
  //     card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
  //   })
  //   button.style.display = 'none'
  // })

  button.addEventListener('click', () => {
    getData('http://localhost:3000/styles')
      .then(data => createCards(data))
      .catch(error => console.log(error))

    button.style.display = 'none'

  })


  function createCards(response) {
    response.forEach(item => {
      let card = document.createElement('div')
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
      card.classList.add('animated', 'fadeInUp')

      const {src, title, link} = item

      card.innerHTML = `
        <div class=styles-block>
          <img src=${src} alt>
          <h4>${title}</h4>
          <a href="${link}">Подробнее</a>
        </div>
      `

      document.querySelector(wrapper).appendChild(card)
    })
  }


}

export default showMoreStyles