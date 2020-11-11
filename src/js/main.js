import calc from './modules/calc'
import checkTextInputs from './modules/checkTextInputs'
import forms from './modules/forms'
import mask from './modules/mask'
import modals from './modules/modals'
import showMoreStyles from './modules/showMoreStyles'
import sliders from './modules/sliders'


window.addEventListener('DOMContentLoaded', () => {
  modals()
  sliders('.feedback-slider-item', 'horizotal', '.main-prev-btn', '.main-next-btn')
  sliders('.main-slider-item', 'vertical')
  forms()
  mask('[name="phone"]')
  checkTextInputs('[name="name"]')
  checkTextInputs('[name="message"]')
  showMoreStyles('.button-styles', '#styles .row')
  calc('#size', '#material', '#options', '.promocode', '.calc-price')
})