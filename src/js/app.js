// modal
const loginModal = document.getElementById('modal-login')
const registrationModal = document.getElementById('modal-registration')
const thanksModal = document.getElementById('modal-thanks')

const modalBtn = document.getElementById('modalBtn')
const modalGoToLoginBtn = document.getElementById('modal-goToLoginBtn')
const modalGoToRegistrationBtn = document.getElementById(
  'modal-goToRegistrationBtn'
)
const closeBtns = document.getElementsByClassName('modal-close-btn')

modalBtn.addEventListener('click', () => {
  addClass(loginModal)
})

for (const btn of closeBtns) {
  btn.addEventListener('click', () => {
    if (loginModal.classList.contains('active')) {
      loginModal.classList.remove('active')
    }
  })
}

modalGoToLoginBtn.addEventListener('click', () => {
  removeClass(registrationModal)
  addClass(loginModal)
})

modalGoToRegistrationBtn.addEventListener('click', () => {
  removeClass(loginModal)
  addClass(registrationModal)
})
//to open modal

window.addEventListener('click', outsideClick)

//func to open modal
function addClass(selector) {
  selector.classList.add('active')
}

//func to close modal
function removeClass(selector) {
  selector.classList.remove('active')
}

//func to close modal if outside click
function outsideClick(e) {
  if (e.target == loginModal) {
    loginModal.style.display = 'none'
  }
}
