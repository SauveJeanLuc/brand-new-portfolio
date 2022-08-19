import { useEffect, useState } from 'react'
// import './js/index'
import './scss/merged.scss'
import DarkIcon from './static/svg/moon.svg'
import LightIcon from './static/svg/Sun.svg'
import HelloIcon from './static/svg/Hello.svg'

function App() {

  function DarkMode (){
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'dark'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon' : 'sun'

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'moon' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)

      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
    })
  }

  return (
    <>
        <div class="wrapper">
      <header class="header">
        <div class="container">
          <div class="header__wrapper">
            <div class="logo">
              <a href="#" class="nav__link">
                {/* <svg class="icon" id="theme-button">
                  <use class="dark-icon" xlinkHref="svg/sprite.svg#moon"></use>
                  <use class="light-icon" xlinkHref="svg/sprite.svg#Sun"></use>
                </svg> */}
                <span class="icon" id="theme-button" onClick={DarkMode}>
                  <img src={DarkIcon} alt="Dark Icon" class="dark-icon"/>
                  <img src={LightIcon} alt="Dark Icon" class="light-icon"/>
                </span>

              </a>
            </div>
          </div>
        </div>
      </header>
      <main class="main">
        <section class="hero section">
          <div class="container container__inner">
            <div class="hero__wrapper">
              <h1 class="title">
                Hello!
                {/* <svg class="icon icon-emoji">
                  <use xlinkHref="svg/sprite.svg#Hello"></use>
                </svg> */}
                <span class="icon icon-emoji">
                  <img src={HelloIcon} alt="Hello" class="hellowave padding"/>
                </span>

                {/* <div class="icon icon-emoji">
                  <img src={HelloIcon} alt="Hello" />
                </div> */}
                <br />
                My name is SAUVÉ Jean-Luc <br />
                I’m a Full-Stack <span>Software Engineer</span>
              </h1>
              <p class="info">
                  I Love Writing Code That Creates Impact.
              </p>
              <a href="https://mega.nz/file/56pVXQqA#reWvCJqhdl9Wa4JF135-J3erLQTgauSCltqMz323DnQ" class="btn padding" target="_blank">Resume</a>
              <a href="https://github.com/SauveJeanLuc" target="_blank" class="btn padding">GitHub</a>
              <a href="#" target="_blank" class="btn padding">Blog</a>
              <a href="#" target="_blank" class="btn padding">Contact Me</a>
            </div>
          </div>
        </section>        
      </main>
    </div>
    <div class="cover-layer"></div>
    <div class="loading-bar"></div>
    <script src="/assets/js/bundle.js" defer></script>
    </>
  )
}

export default App
