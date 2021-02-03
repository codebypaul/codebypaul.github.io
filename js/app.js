const nav = document.querySelector('nav')
const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')
const toggleSwitch = document.querySelector('.switch')
const menuBtn = document.querySelector('.menuBtn')
const bioBtn = document.querySelectorAll('.bio-btn')
const bio = document.querySelector('.bio')
const menuList = document.querySelectorAll('.list-group-item')
const menu = document.querySelector('.menu')
const displayContainer = document.querySelector('.display-my-stuff')
const projectBtn = document.querySelector('#project')
const websiteBtn = document.querySelector('#website')
const gameBtn = document.querySelector('#game')
const websites = document.querySelector('.websites')
const projects = document.querySelector('.projects')
const games = document.querySelector('.games')
const aboutContainer = document.querySelector('.about')
const cards = document.querySelectorAll('.card')
let nightMode = false
let menuOpen = false
const shortBio = "Hello World! My name is  Paul and I am a Software Engineer. If I'm not writing code, I'm trying to become a master of Brazilian Jiu Jitsu and Rubiks cubes."
const longBio = "Welcome to PWProjectWorks! My name is Paul Williams and I'm a software engineering graduate of General Assembly. Before writing code, I trained daily to become a high level Brazilian Jiu Jitsu competitor. \n I've used my passion for teaching to fuel my own education."
//functions
toggle.addEventListener('click',()=>{
  if (nightMode === false){
    nightMode = true
    toggleSwitch.classList.add('dark')
    bioBtn.forEach(btn=>btn.classList.add('dark'))
    toggle.style.borderColor = 'white'
    body.style.background ='black'
    nav.style.background= 'black'
    menuList.forEach(item=>item.classList.add('dark'))
    body.style.color = 'white'
    menuBtn.style.borderColor = 'white'
    menuBtn.style.color = 'white'
    cards.forEach(card=>{
      card.style.background = 'black'
      card.style.borderColor = 'white'
    })
  }else{
    nightMode = false
    toggle.style.borderColor = 'black'
    toggleSwitch.classList.remove('dark')
    bioBtn.forEach(btn=>btn.classList.remove('dark'))
    body.style.background ='white'
    nav.style.background= 'white'
    menuList.forEach(item=>item.classList.remove('dark'))
    body.style.color = 'black'
    menuBtn.style.borderColor = 'rgb(223,223,223)'
    menuBtn.style.color = 'black'
    cards.forEach(card=>{
      card.style.background = 'white'
      card.style.borderColor = 'rgb(223,223,223)'
    })
  }
})
//menu button
menuBtn.addEventListener('click',()=>{
  if (menuOpen === false){
    menuOpen = true
    menu.classList.add('open')
  } else {
    menuOpen = false
    menu.classList.remove('open')
  }
})
//what will be shown depending on menu choice
projectBtn.addEventListener('click',()=>{
  displayContainer.innerHTML = ''
  displayContainer.appendChild(projects)
  projects.scrollIntoView()
})
websiteBtn.addEventListener('click',()=>{
  displayContainer.innerHTML = ''
  displayContainer.appendChild(websites)
  websites.scrollIntoView()
})
gameBtn.addEventListener('click',()=>{
  displayContainer.innerHTML = ''
  displayContainer.appendChild(games)
  games.scrollIntoView()
})

//bio change buttons
bioBtn[0].addEventListener('click',()=>{
  bio.textContent = shortBio
})
bioBtn[1].addEventListener('click',()=>{
  bio.textContent = longBio
})
//what i want to see when the page is loaded
document.addEventListener('DOMContentLoaded',()=>{
  bio.textContent = shortBio
  displayContainer.innerHTML = ''
})