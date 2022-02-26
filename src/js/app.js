// modal
const loginModal = document.getElementById('modal-login')
const registrationModal = document.getElementById('modal-registration')
const thanksModal = document.getElementById('modal-thanks')
const modalBtn = document.getElementById('modalBtn')
const modalGoToLoginBtn = document.getElementById('modal-goToLoginBtn')
const modalGoToRegistrationBtn = document.getElementById(
  'modal-goToRegistrationBtn'
)
const closeBtns = document.getElementsByClassName('modal-header-close-btn')

modalBtn.addEventListener('click', () => {
  addClass(loginModal)
})

for (const btn of closeBtns) {
  btn.addEventListener('click', () => {
    removeClass(loginModal)
    removeClass(registrationModal)
    removeClass(thanksModal)
  })
}

document.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    removeClass(loginModal)
  }
  if (e.target === registrationModal) {
    removeClass(registrationModal)
  }
  if (e.target === thanksModal) {
    removeClass(thanksModal)
  }
})

modalGoToLoginBtn.addEventListener('click', () => {
  removeClass(registrationModal)
  addClass(loginModal)
})

modalGoToRegistrationBtn.addEventListener('click', () => {
  removeClass(loginModal)
  addClass(registrationModal)
})

function addClass(selector) {
  selector.classList.add('active')
}

function removeClass(selector) {
  selector.classList.remove('active')
}
