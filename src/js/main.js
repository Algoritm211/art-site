import forms from './modules/forms'
import modals from './modules/modals'
import sliders from './modules/sliders'


window.addEventListener('DOMContentLoaded', () => {
  modals()
  sliders('.feedback-slider-item', 'horizotal', '.main-prev-btn', '.main-next-btn')
  sliders('.main-slider-item', 'vertical')
  forms()
})