// ==UserScript==
// @name          Optimize Yandex Radio
// @version       0.0.1
// @author        Новожилов И. А.
// @description   Скрытие рекламы на radio.yandex.ru, и доп опции по управлению воспроизведением
// @homepage      https://github.com/IgorNovozhilov/UserScript
// @supportURL    https://github.com/IgorNovozhilov/UserScript/issues
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAANJQTFRFAAAA/9UA/9sA/9UA/8wA/80A/80A/80E/8wA/80A/8wA/5MU/8wA/80A/6IP/8oB/8wA/8wA/8wA/8wA/80A/8cC/80A/5cT/zMz/zgy/zox/zww/z4w/0Av/0Iu/0gt/0sr/1Ep/1Qo/1cn/1gn/10l/14l/2Ek/2Uj/2Yj/2kh/2sh/2wg/3Ie/3Yd/3kc/4MZ/4YY/4oX/4wW/5AU/54Q/6EP/6UN/6gM/7AK/7EJ/7EK/7YI/7cI/70G/8EE/8YC/8YD/8cC/8kB/8sB/8wAJwdTggAAABh0Uk5TAAYHGC0uR0eClZaxv8fN2dnj8fLz9PT1I6ZakQAAAWhJREFUOMt9U2djgjAQDdoiIChaxODetu6Jq27z//9SwyUsgb4v5N695I4bCHkQRFnVDUNXZVFAUaSVIvFQVNJv7pRkkhBMKRW6rpEItMAjnwUSg8KHdz/WTxX8jZRGEqCxPCSSCAkCmMkC0wmikH+g0PoF6kNuJ9s+3QJEUUCib22HFqawhlufE5HsHs9d7KF7dlkZqfy0q+EAajtOq0hnh2MFh1A5Ml5HBnwfTfyG5gMcBhcscQRLcHyxEK96VFB/sRCQ5B7HYM+ShN9cxAkW7DehUNM4wZQVCko94lx1vFqNq9wYsVJDs2aMGlycS5cBs2asWdDuNTDtJyvOsw3mmrfbGZhfYA5uAw5gnvnAwMh1KNHwe9igZscbOWdobcr0fUGfmrY3tDD2E5qCL6BJTAJj7yzOvYetq+u/Wrh319Lh1St947krmOOfUnj1YHnLrQ3zb1rlyPLC+meyubxh5HPZTGD9/wD5aZvcDw/PFAAAAABJRU5ErkJggg==
// @include       https://radio.yandex.ru/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* globals unsafeWindow */
(function (window) {
  const document = window.document
  const myStyle = `
    .footer.footer_radio,
    .nav__banner,
    .nav__content .footer__static-text,
    .multi-auth__container .multi-auth__plus
      {
        display: none !important;
      }
    .oyr__content {
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 6px;
    }
    .oyr__autoplay_checkbox {
      display: flex;
      align-items: center;
    }
    .oyr__autoplay_checkbox input {
      margin-right: 6px;
    }
  `
  const myHtml = `
    <label class="oyr__autoplay_checkbox">
      <input id="oyr__autoplay_checkbox" type="checkbox">
      auto-play
    </label>
  `
  const style = document.createElement('style')
  const html = document.createElement('div')

  style.id = 'CSS-Optimize-Yandex-Radio'
  style.type = 'text/css'
  style.innerHTML = myStyle
  document.head.appendChild(style)
  style.addEventListener('DOMSubtreeModified', () => {
    if (style.innerHTML !== myStyle) {
      style.innerHTML = myStyle
    }
  })

  html.id = 'HTML-Optimize-Yandex-Radio'
  html.className = 'oyr__content'
  html.checked = false
  html.innerHTML = myHtml
  document.body.appendChild(html)

  const autoplayCheckbox = document.getElementById('oyr__autoplay_checkbox')
  let autoplayCheckboxInterval = null
  autoplayCheckbox.onchange = () => {
    if (autoplayCheckbox.checked) {
      autoplayCheckboxInterval = setInterval(() => {
        const isPlay = document.querySelector('.body_state_playing')
        if (!isPlay) {
          const playElm = document.querySelector('.player-controls__play')
          playElm.click()
        }
      }, 1000)
    } else {
      clearInterval(autoplayCheckboxInterval)
    }
  }
})(unsafeWindow)
