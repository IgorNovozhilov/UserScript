// ==UserScript==
// @name          no yandex.ru/games
// @namespace     no-yandex-ru-games
// @version       0.0.1
// @author        IgorNovozhilov
// @description   Персональная настройка Ikariam
// @homepage      https://github.com/IgorNovozhilov/UserScript
// @supportURL    https://github.com/IgorNovozhilov/UserScript/issues
// @include       https://yandex.ru/games/*
// @run-at        document-body
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {
  document.body.remove()
})(
  // @ts-ignore
  unsafeWindow
)
