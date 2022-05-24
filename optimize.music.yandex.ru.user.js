// ==UserScript==
// @name          Optimize Yandex Music
// @version       0.0.15
// @author        Новожилов И. А.
// @description   Скрытие рекламы на music.yandex.ru
// @homepage      https://github.com/IgorNovozhilov/UserScript
// @supportURL    https://github.com/IgorNovozhilov/UserScript/issues
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA3NJREFUWIWdl09y2kgYxX+fWnjnivaw4AYjL2LvgnKCMCcY5QTJDWzfwDeAOUHwCYDKynghfALjmnLVLKEyK6TmmwVg60+jCN6O5ut+T91P72sJDaEJgc3oofSBrgj35iN3+Zr0U+dOVMbG/JrKZLlssq7fgLhrU65tSh8I9uObDdNyrYh8Q/hm9XyZ9c5HRtJbmfy7qFvfq/vTPnJtU56BOE/eAAEQW20920+d66MFaEKQzkhUuTmC1AkVuUl7nUSjdthIgM4IbcqzgHPCKRAktOqNXSIKHtid95gD260wFRiaFiO5oJHJcgisygjoOgVoQpCl/BAXufKiHnHrI5NGVMo9QgR8KIxv5Hu59O0IsjXfnduu3JszwsbkgKJzI7+6KPf5dfyf/4zKtT68v2oucv+KflPiPLY5sOynvc5ckK7x0srTvwmwqcPtyos5Iz6FvEAg/0XWnkfy050HviYENuVLhd8jrjOaRu1ws5Geokvj8SST17mrbrcTla3XZOs1v5xwsHX7oTPXqB1mKgOrEiIAglXIep3mHtm+6mOUr546jCcwPERu1RsL4sgIiZqQZzNiCwkQqBB5OASYlvvpM5Uhx0VymXwADHJDoSfwR7lQLqgYRqN2KEil9kj8Wfr9wcNx/q6ZG0ujLa6DQsGoAmFtNzwVolrbgvPwUF4Kk6HnLDTNk9AY3K+kY21PxXHeSbFhAMjkda7o0+/IVXXqyoT9e18Yg6kHVbU2dZ+3LxoDqxr+le+pM3J3eVPG3BN1bu1frkVk8jo3solUtWJUVZ0a2USHEtG1pigT2UXxglLrVOFzXQfUqB1au80QY5jXEJM+EokyLg2v/EsCAchmDCsKlYU54+KEi0dxmYTArkmQiq/+9i+JPQDTcnRDoWvXhdQ6CXbNwEG+2nN6sE0+VW4dIvrZAz9cDv4dNCHIZgyQqvlUudunreT/SB+Yi1SjGWWhHl+b3orSRyLZOJ8cVZ5aV+/9pyBgdzOaU77LvWOCMjRnTMv9QhO6dk0PIYaDsb0yLcL8XClX6IzQwqRGRFHQFk36xMpAJJeVflCFJnSzNSPncZwAVZ58IS6THxSwR/rAjYjjsnoc+W3r6vAXVq0AePPFDdCn2bEArBSGfuvd7ScLyAkJ7JpItx8c4e4bYitIeVFhIbBAGflXVC6hh/A/UVyEGh6rXaAAAAAASUVORK5CYII=
// @include       https://music.yandex.ru/*
// @run-at        document-start
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* globals unsafeWindow */
(function (window) {
  const document = window.document
  const myStyle = `
    .centerblock + .sidebar__sticky,
    .page-root > div:nth-of-type(1):not(.head),
    .page-root > div:nth-of-type(2):not(.head),
    .bar .bar-below_plus,
    .centerblock-wrapper .footer,
    .player-controls__seq-controls .hq,
    .subscription-hint
      {
        display: none !important;
      }
    .centerblock-wrapper
      {
        width: 100%;
      }
    .layout_narrow .centerblock-wrapper
      {
        margin-right: 0px;
      }
  `
  const style = document.createElement('style')
  style.id = 'CSS-Optimize-Yandex-Music'
  style.type = 'text/css'
  style.innerHTML = myStyle
  document.head.appendChild(style)
  style.addEventListener('DOMSubtreeModified', () => {
    if (style.innerHTML !== myStyle) {
      style.innerHTML = myStyle
    }
  })
})(unsafeWindow)
