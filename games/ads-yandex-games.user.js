// ==UserScript==
// @name          ads-yandex-games
// @namespace     ads-yandex-games
// @version       0.0.4
// @author        IgorNovozhilov
// @description   Персонализация yandex-games
// @homepage      https://github.com/IgorNovozhilov/UserScript
// @supportURL    https://github.com/IgorNovozhilov/UserScript/issues
// @include       https://yandex.ru/games/*
// @run-at        document-start
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {

  const style = document.createElement('style')

  style.type = 'text/css'
  style.innerHTML = `
    .adaptive-width:has(div[class*="feed-adv-block-renderer-critical-catalog-module__wrapper"]),
    .adaptive-width:has(div[class*="banner-carousel"]),
    .app div[class*="balance-button-critical"],
    .app a[class*="keys-shop-promo-button-critical"],
    .app a[class*="promo-events-selection-header-button-critical"],
    .app__wrapper span[class*="balance-button-critical"],
    .app__wrapper div[class*="disable-adv-button-sticky-critical-game-module__disableAdButtonContainer"],
    .app__wrapper div[class*="__action_balance"],
    .app__wrapper .stack div:has(>div[class*="adv-focusable"]):has(div[class*="desktop_right"]),
    .adv-focusable div[data-fullscreen-element-name="ad-content"],
    .play-modal.adv-focusable .play-yandex-yandex-adaptive,
    .prowo-container_advType_interstitial .prowo__content,
    .prowo-container_advType_interstitial .prowo__nav,
    .prowo-container_advType_interstitial .prowo__dots
    {
      display: none !important;
    }

    .app__wrapper > header,
    .app__wrapper .stack div:has(>iframe#game-frame),
    .app__wrapper .stack .play-similar-games
    {
      width: 100% !important;
    }

    .adaptive-width .feed_block_suggested
    {
      margin-top: 0px !important;
    }

    .prowo-container_advType_interstitial .close-button
    {
      right: 45% !important;
      top: 45% !important;
    }
  `
  document.head.append(style)

  let observerTimer = 0
  let prowoBTimer = 0
  const observer = new MutationObserver(() => {
    if (!observerTimer) observerTimer = setTimeout(onAppWrapperMutation, 10)
  })

  document.addEventListener('DOMContentLoaded', () => {
    const html = document.body.innerHTML

    console.log('hasActivePromoEvent = ', detectClassName(html, 'change-root-page-critical-catalog-module__hasActivePromoEvent'))

    observer.observe(document.querySelector('.app__wrapper'), { childList: true, subtree: true })
  });

  function onAppWrapperMutation() {
    const prowoB = document.querySelector('.prowo-container_advType_interstitial .close-button')

    if (prowoB && !prowoBTimer) {
      prowoBTimer = setTimeout(() => removeProwoB(prowoB), 10)
    }

    observerTimer = 0
  }

  /**
   *
   * @param {HTMLDivElement} prowoB
   */
  function removeProwoB(prowoB) {
    prowoB.click()
    console.log('X CLOSE --> prowoB')
    prowoBTimer = 0
  }

  /**
   * @param {string} html
   * @param {string} namePart
   * @returns
   */
  function detectClassName(html, namePart) {
    const idx1 = html.indexOf(namePart)

    if (idx1 < 0) return undefined

    const idx2 = html.indexOf('"', idx1)
    const substr = html.substring(idx1, idx2)

    return substr.split(' ')[0]
  }

})(
  // @ts-ignore
  unsafeWindow
)
