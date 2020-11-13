const mask = (selector) => {

  const setCursonPosition = (position, elem) => {
    elem.focus()

    if (elem.setSelectionRange) {
      elem.setSelectionRange(position, position)
    } else if (elem.createTextRange) {
      let range = elem.createTextRange()
      range.collapse(true)
      range.moveEnd('character', pos)
      range.moveStart('character', pos)
      range.select()
    }
  }
  
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __'
    let iterator = 0
    let def = matrix.replace(/\D/g, '')
    let val = this.value.replace(/\D/g, '')

    if (def.length >= val.length) {
      val = def
    }

    this.value = matrix.replace(/./g, function(symbol) {
      return /[_\d]/.test(symbol) && iterator < val.length ? val.charAt(iterator++) : iterator >= val.length ? '' : symbol
    })

    // console.log(iterator);

    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = ''
      }
    } else {
      setCursonPosition(this.value.length, this)
    }
  }

  let inputs = document.querySelectorAll(selector)
  
  inputs.forEach(input => {
    input.addEventListener('input', createMask)
    input.addEventListener('focus', createMask)
    input.addEventListener('blur', createMask)
  })
}

export default mask