// ==UserScript==
// @name          Ikariam Customizer
// @namespace     ikariam-customizer
// @version       0.0.1
// @author        IgorNovozhilov
// @description   Персональная настройка Ikariam
// @homepage      https://github.com/IgorNovozhilov/UserScript
// @supportURL    https://github.com/IgorNovozhilov/UserScript/issues
// @include       https://*.ikariam.gameforge.com/*
// @run-at        document-body
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {
  const style = document.createElement('style')

  style.type = 'text/css'
  style.innerHTML = `
    #city #cityCinemaLink,
    #city #cityFlyingShopContainer,
    #avatarPictureSmall,
    #GF_toolbar .premium,
    #header #globalResources .ambrosiaNoSpin,
    #header #advisors .plusteaser,
    .expandable.resourceShop,
    .expandable[onclick*="premiumTrader"],
    .btnIngameCountdown.happyHour,
    .premiumOffer,
    .premiumOfferBox,
    #footer {
      display: none !important;
    }

    #city #cityCinema,
    #city #cityAmbrosiaFountain {
      pointer-events: none;
    }

    #header #cityNav .city_nav_button {
      top: 2px;
    }

    #header #cityNav .viewCity {
      top: -2px;
    }

    .select_container.city_select {
      margin-top: 4px !important;
    }

    #header .inventory {
      top: 8px !important;
    }

    #header #topnaviResources {
      top: 16px;
    }

    #header #globalResources .transporters a {
      top: 8px !important;
    }

    #header #globalResources .freighters a {
      top: 38px !important;
    }

    #header #globalResources .gold a {
      top: 68px !important;
    }

    #header #topnavi {
      height: 124px;
      background-size: 642px 124px;
    }

    #container #breadcrumbs {
      top: 140px;
    }
  `

  document.head.append(style)
})(
  // @ts-ignore
  unsafeWindow
)
