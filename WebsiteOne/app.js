const saerchInputField = document.getElementById('search')
const navLinks = document.querySelector('.tab__container')
const searhBar = document.querySelector('.search-bar')

saerchInputField.addEventListener('focus', (e) => {
  searhBar.style.width = '100%'
  searhBar.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.15)'
  navLinks.style.display = 'none'
})

document.onclick = (e) => {
  if (e.target !== saerchInputField) {
    searhBar.style.width = 'auto'
    navLinks.style.display = ''
    searhBar.style.boxShadow = ''
  }
}
