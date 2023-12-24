'use strict'

function openCard() {
  const envelope = document.querySelector('.envelope')

  envelope.style.display = 'none'
}

function setVh() {
  const root = document.documentElement
  const vh = window.innerHeight * 0.01
  root.style.setProperty('--vh', vh + 'px')
}

setVh();
window.addEventListener('resize', setVh)
document.querySelector('.card__open-btn').addEventListener('click', openCard)


document.querySelector('#gift').addEventListener('click', function () {
  document.querySelector('.wrapper').style.display = 'none'
  document.querySelector('.nextgift').style.display = 'block'
  document.querySelector('body').style.background = '#171E2B'

  document.querySelector('#gift-yellow').addEventListener('click', runLove)
  document.querySelector('#gift-red').addEventListener('click', runLove)
  
})

function runLove () {
  document.querySelector('.bgoverlay').classList.toggle('tran')
  document.querySelector('.bgoverlay .title').addEventListener('click', function(){
    document.querySelector('.bgoverlay .container').classList.toggle('open')
  });
}

