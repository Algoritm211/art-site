const drop = () => {
  /* Какие события связаны с drag and drop */

  // drag *
  // dragend *
  // dragenter - объект над dropArea
  // dragexit *
  // dragleave - объект перетащили за пределы dropArea
  // dragover - срабатывает каждые 40 мс пока объект над dropArea
  // dragstart *
  // drop - срабатывает когда объект отправлен в dropArea

  // * - срабатывают на перетаскиваемом элементе

  const fileInputs = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false)
    })
  })

  function preventDefaults(event) {
    event.preventDefault()
    event.stopPropagation()
  }

  function highlight(item) {
    item.closest('.file_upload').style.border = '5px solid yellow'
    item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
  }

  function unhighlight(item) {
    item.closest('.file_upload').style.border = 'none'
    if (item.closest('.calc_form')) {
      item.closest('.file_upload').style.backgroundColor = '#fff'
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed'
    }

  }

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false)
    })
  });

  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false)
    })
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', (event) => {
      input.files = event.dataTransfer.files
      let dots
      const arrName = input.files[0].name.split('.')
      arrName[0].length > 7 ? dots = '...' : dots = '.'
      const name = arrName[0].substring(0, 8) + dots + arrName[1]
      input.previousElementSibling.textContent = name
    })
  })

}

export default drop