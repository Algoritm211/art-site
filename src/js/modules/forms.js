// import checkNuminputs from "./checkNuminputs"

import { postData } from "../services/requests"

const forms = () => {
  const form = document.querySelectorAll('form')
  const inputs = document.querySelectorAll('input')
  const upload = document.querySelectorAll('[name="upload"]')

  // checkNuminputs('input[name="user_phone"]')

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Что-то пошло не так',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  }

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  }

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = ''
    })
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран'
    })
  }

  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      let dots
      const arrName = item.files[0].name.split('.')
      arrName[0].length > 7 ? dots = '...' : dots = '.'
      const name = arrName[0].substring(0, 8) + dots + arrName[1]
      item.previousElementSibling.textContent = name
    })
  })

  form.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault()

      let statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      item.parentNode.appendChild(statusMessage)

      item.classList.add('animated', 'fadeOutUp')
      setTimeout(() => {
        item.style.display = 'none'
      }, 400)

      let statusImg = document.createElement('img')
      statusImg.setAttribute('src', message.spinner)
      statusImg.classList.add('animated', 'fadeInUp')
      statusMessage.appendChild(statusImg)

      let textMessage = document.createElement('div')
      textMessage.textContent = message.loading
      statusMessage.appendChild(textMessage)

      const formData = new FormData(item)
      let api
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question //Ищет ближайший элемент выше по иерархии
      console.log(api);

      postData(api, formData)
        .then(result => {
          console.log(result);
          statusImg.setAttribute('src', message.ok)
          textMessage.textContent = message.success
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail)
          textMessage.textContent = message.failure
        })
        .finally(() => {
          clearInputs()
          setTimeout(() => {
            statusMessage.remove()
            item.style.display = 'block'
            item.classList.remove('fadeOutUp')
            item.classList.add('fadeInUp')
          }, 3000)
        })
    })
  })
}

export default forms