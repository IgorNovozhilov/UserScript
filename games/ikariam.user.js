// ==UserScript==
// @name          Ikariam Customizer
// @namespace     ikariam-customizer
// @version       0.0.4
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
    .mainContent .center:has(a[onclick*="premium"]),
    .btnIngameCountdown.happyHour,
    #tab_tradeAdvisor .contentBox01h:has(.premiumOffer),
    #militaryAdvisor .contentBox01h:has(.premiumOffer),
    #researchAdvisor .contentBox01h:has(.premiumOffer),
    #diplomacyAdvisor .contentBox01h:has(.premiumOffer),
    .premiumOffer,
    .premiumOfferBox,
    #researchAdvisor .premium_research_link,
    #sidebar .accordionItem:has(#premiumAdvisorSidebar),
    #sidebar .accordionItem:has(#ambrosiaDonateForm),
    #setWorkersBox .adVideoPremiumOffer,
    #dailyTasks .modifiedHint:has(.adVideoButton),
    #footer {
      display: none !important;
      _border: solid 2px #ff00ff !important;
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

    #header #cityResources li.actions,
    #header #cityResources li.population {
      top: -31px !important;
    }

    #header #cityResources li.wood,
    #header #cityResources li.wine,
    #header #cityResources li.marble,
    #header #cityResources li.glass,
    #header #cityResources li.sulfur {
      top: -1px !important;
    }

    #header #topnavi {
      height: 124px;
      background-size: 642px 124px;
    }

    #container #breadcrumbs {
      top: 140px;
    }

    #GF_toolbar {
      width: 100%;
    }

    #sidebarWidget {
      padding-bottom: 0px;
      display: flex;
      flex-direction: column;
    }

    #sidebarWidget .accordionItem {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    #sidebarWidget .accordionItem:last-child {
      margin-bottom: 3px;
    }

    #setWorkers .content {
      min-height: 0;
    }

    #finances hr {
      margin: -1px !important;
    }

    #finances .table01 tr {
      height: 26px !important;
    }

    #finances .table01 td {
      padding: 1px 7px !important;
    }

    .buildingDescription:not(:has(p)) {
      padding: 0px;
    }
  `

  document.head.append(style)
})(
  // @ts-ignore
  unsafeWindow
)
