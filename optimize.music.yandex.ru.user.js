// ==UserScript==
// @name          Optimize Yandex Music
// @version       0.1.7
// @author        Новожилов И. А.
// @description   Скрытие рекламы на music.yandex.ru
// @homepage      https://github.com/IgorNovozhilov/UserScript
// @supportURL    https://github.com/IgorNovozhilov/UserScript/issues
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA3NJREFUWIWdl09y2kgYxX+fWnjnivaw4AYjL2LvgnKCMCcY5QTJDWzfwDeAOUHwCYDKynghfALjmnLVLKEyK6TmmwVg60+jCN6O5ut+T91P72sJDaEJgc3oofSBrgj35iN3+Zr0U+dOVMbG/JrKZLlssq7fgLhrU65tSh8I9uObDdNyrYh8Q/hm9XyZ9c5HRtJbmfy7qFvfq/vTPnJtU56BOE/eAAEQW20920+d66MFaEKQzkhUuTmC1AkVuUl7nUSjdthIgM4IbcqzgHPCKRAktOqNXSIKHtid95gD260wFRiaFiO5oJHJcgisygjoOgVoQpCl/BAXufKiHnHrI5NGVMo9QgR8KIxv5Hu59O0IsjXfnduu3JszwsbkgKJzI7+6KPf5dfyf/4zKtT68v2oucv+KflPiPLY5sOynvc5ckK7x0srTvwmwqcPtyos5Iz6FvEAg/0XWnkfy050HviYENuVLhd8jrjOaRu1ws5Geokvj8SST17mrbrcTla3XZOs1v5xwsHX7oTPXqB1mKgOrEiIAglXIep3mHtm+6mOUr546jCcwPERu1RsL4sgIiZqQZzNiCwkQqBB5OASYlvvpM5Uhx0VymXwADHJDoSfwR7lQLqgYRqN2KEil9kj8Wfr9wcNx/q6ZG0ujLa6DQsGoAmFtNzwVolrbgvPwUF4Kk6HnLDTNk9AY3K+kY21PxXHeSbFhAMjkda7o0+/IVXXqyoT9e18Yg6kHVbU2dZ+3LxoDqxr+le+pM3J3eVPG3BN1bu1frkVk8jo3solUtWJUVZ0a2USHEtG1pigT2UXxglLrVOFzXQfUqB1au80QY5jXEJM+EokyLg2v/EsCAchmDCsKlYU54+KEi0dxmYTArkmQiq/+9i+JPQDTcnRDoWvXhdQ6CXbNwEG+2nN6sE0+VW4dIvrZAz9cDv4dNCHIZgyQqvlUudunreT/SB+Yi1SjGWWhHl+b3orSRyLZOJ8cVZ5aV+/9pyBgdzOaU77LvWOCMjRnTMv9QhO6dk0PIYaDsb0yLcL8XClX6IzQwqRGRFHQFk36xMpAJJeVflCFJnSzNSPncZwAVZ58IS6THxSwR/rAjYjjsnoc+W3r6vAXVq0AePPFDdCn2bEArBSGfuvd7ScLyAkJ7JpItx8c4e4bYitIeVFhIbBAGflXVC6hh/A/UVyEGh6rXaAAAAAASUVORK5CYII=
// @include       https://music.yandex.ru/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* globals unsafeWindow */
(function updMusic(window) {
  const document = window.document
  const myStyle = `
    html {
      overflow-y: auto !important;
    }
    .pay-promo-popup,
    .redirect-from-radio-popup__content,
    .overlay.deco-pane-overlay,
    .page-main > .rup,
    .centerblock + .sidebar__sticky,
    .page-root > div:nth-of-type(1):not(.head),
    .page-root > div:nth-of-type(2):not(.head),
    .bar .bar-below_plus,
    .centerblock-wrapper .footer,
    .player-controls__seq-controls .hq,
    .subscription-hint,
    .multi-auth__container .multi-auth__plus,
    .plus-points.head-kids__plus-points {
        display: none !important;
    }
    .centerblock-wrapper {
        width: 100%;
        padding-bottom: 70px !important;
    }
    .branding.branding-pane {
      display: none !important;
    }
    .head-kids .head-kids__wrap {
      height: auto !important;
      line-height: normal !important;
    }
    .head-kids .head-kids__controlls {
      position: inherit !important;
    }
    .head-kids .d-logo {
      margin-left: 18px;
    }
    .centerblock {
      padding: 7px 16px 0;
      min-height: 400px;
    }
    .layout_narrow .centerblock-wrapper {
        margin-right: 0px;
    }
    .page-users__tabs {
      margin: 0 0 8px;
    }
    .d-generic-page-head {
      min-height: 0;
      margin: 0 !important;
    }
    .d-generic-page-head .d-generic-page-head__aside,
    .d-generic-page-head .deco-typo-secondary.typo-add  {
      display: none !important;
    }
    .d-generic-page-head .d-generic-page-head__main {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .d-generic-page-head .page-users__title {
      margin: 0 !important;
      font-size: 24px;
    }
    .d-generic-page-head .d-generic-page-head__main-bottom {
      margin: 0;
      flex: 1;
    }
    .d-generic-page-head .d-generic-page-head__main-actions,
    .d-generic-page-head .d-generic-page-head__main-side-actions {
      display: flex;
      align-items: center;
    }
    .page-radio__dashboard {
      margin: 0;
    }
    .page-radio__dashboard-column {
      margin: 0px 8px 8px;
    }
    .page-radio .d-header__title {
      margin: 0 0 6px 0;
    }
    .page-radio .d-header__title-text {
      font-size: 24px;
      line-height: 50px;
    }
    .playlist {
      height: 250px !important;
    }
    .oym__autoplay_content {
      display: inline-block;
      height: 60px;
    }
    .oym__autoplay_container{
      height: 100%;
      display: flex;
      align-items: center;
    }
    .oym__autoplay_checkbox {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #777;
      padding: 6px 8px;
      border-radius: 6px;
      cursor: pointer;
    }
    .oym__autoplay_checkbox:hover {
      background: #eee;
    }
    .oym__autoplay_checkbox input {
      margin-right: 6px;
    }
  `
  const myHtml = `
    <div class="oym__autoplay_container">
      <label class="oym__autoplay_checkbox">
        <input id="oym__autoplay_checkbox" type="checkbox">
        auto-play
      </label>
    </div>
  `

  const style = document.createElement('style')
  const html = document.createElement('div')

  style.id = 'CSS-Optimize-Yandex-Music'
  style.type = 'text/css'
  style.innerHTML = myStyle
  document.head.appendChild(style)
  style.addEventListener('DOMSubtreeModified', () => {
    if (style.innerHTML !== myStyle) {
      style.innerHTML = myStyle
    }
  })

  html.id = 'oym__autoplay_content'
  html.className = 'oym__autoplay_content'
  html.checked = false
  html.innerHTML = myHtml
  document
    .querySelector('.player-controls__seq-controls')
    .prepend(html)

  const centerblock = document.querySelector('.centerblock')
  const playBtn = document.querySelector('.player-controls__btn_play')
  const autoPlayCheckbox = document.getElementById('oym__autoplay_checkbox')

  autoPlayCheckbox.checked = window.localStorage.getItem('oym__autoplay_checkbox') === 'true'

  let trustedAction = false

  setInterval(function playWatcher() {
    const isPlay = document.querySelector('.player-controls__btn_pause')
    const crackdownClose = document.querySelector('.crackdown-popup__close')
    if (!isPlay === autoPlayCheckbox.checked) {
      if (trustedAction) {
        autoPlay({ click: false })
      } else {
        playBtn.click()
      }
    }
    trustedAction = false
    if (crackdownClose) crackdownClose.click()
  }, 500)

  function autoPlay({ toggle = true, click = true }) {
    const isPlay = document.querySelector('.player-controls__btn_pause')
    if (toggle) autoPlayCheckbox.checked = !autoPlayCheckbox.checked
    if (click && !isPlay === autoPlayCheckbox.checked) playBtn.click()
    window.localStorage.setItem('oym__autoplay_checkbox', autoPlayCheckbox.checked + '')
  }

  function userClickPlay(event) {
    if (event.isTrusted) trustedAction = true
  }

  function userClickCenterblockPlay(event) {
    if (event.isTrusted) {
      const clsl = event.target.classList
      const trustedElm = clsl.contains('button-play') ||
        clsl.contains('d-icon_play-small') ||
        clsl.contains('deco-button-stylable') ||
        clsl.contains('radio-station-dashboard__fg') ||
        clsl.contains('radio-station-dashboard__hover') ||
        clsl.contains('radio-station-dashboard__name') ||
        clsl.contains('radio-station-dashboard__nowPlaying')
      if (trustedElm) trustedAction = true
    }
  }

  function userPressPlayKeyboard(event) {
    if (event.isTrusted && event.key === ' ') {
      trustedAction = true
    }
  }

  autoPlayCheckbox.onchange = () => autoPlay({ toggle: false })
  playBtn.onclick = event => userClickPlay(event)
  centerblock.onclick = event => userClickCenterblockPlay(event)
  document.addEventListener('keydown', userPressPlayKeyboard, { capture: true })
  if (autoPlayCheckbox.checked) autoPlay({ toggle: false, click: false })
})(unsafeWindow)
