// ==UserScript==
// @name          SBIS Extended Platform API
// @version       0.0.2
// @author        Новожилов И. А.
// @description   Расширенное АПИ для работы с платформой SBIS
// @homepage      https://github.com/IgorNovozhilov/UserScript
// @supportURL    https://github.com/IgorNovozhilov/UserScript/labels/sbis
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABHVBMVEUAAAAAcbcAeL8IYZ8Ab7UCbrAAbrgAU5AAX6QqjcoBV5YBVZMqjswAdr0AZ68AbLEpjMoBVpUBf8UAaq8AWpgBZa4AX6EBaKsAdr4fh8cnisgViMkAZa0AYqYAdr4BR4EAY6cAY6UAbLEAeMAAaLAAbrYAbbMASoYASYUAWZgAaLAAaa4mjcsoisgAfMMAarIAR4IAS4gAUI0AUpAAVpQAVpUAV5QAV5cAWZkAW5sAXZ0AXp8AYKIAYqQAYqUBY6UAZqoAaq4Aaq8AarIAa7EAbLIAbbMAb7YAcLYAcbgHcK4AcroAc7sCdLUAdLwAdb0Adr0Adr4AdsAAd8AAeL8AfcEBfsUEfsECgcYGgcUOg8URh8gZh8cbiMgni8mloGbVAAAAMHRSTlMAAgICBggKDhAYICouMEBCTExOWlpicHZ4fIKGiJKSkpisrrS6vsjQ0tTa8Pj6/PyQEVB7AAAAlElEQVR42mNgYJCKY0AGjAwMsbqcSAIsShxC0To8UB4TEAvbyOpFxgiAuOwSyiBK0dQpODRKkoGB3ziQF6zOzDrILyRcmtndSg6iUcTIw98vIMLLXhtmsLqlp6e3T5ivOEyAy8DB0dXNRY0Vbre8iZ2tnQKy8zTMLcRQ3KtpKIjCV3XmRuHL6LOh8EW1ULgMfCrIPAB6zRJHrKWcUAAAAABJRU5ErkJggg==
// @icon64        data:image/png;base64,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
// @include       https://*sbis.ru/*
// @include       https://*tensor.ru/*
// @run-at        document-start
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
'use strict';
((window) => {
  const $extapi = window.$extapi = {};

  $extapi.get_visual_components_map = () => new Promise((resolve, reject) => {
    var map = [];
    window.require(['js!SBIS3.CORE.Control'], (CControl) => {
      try {
        const cs = CControl.ControlStorage._storage;
        for (let name in cs) {
          let control = cs[name];
          if (control._container) {
            let cmp_name = control._container.attr('data-component');
            if (cmp_name) {
              map.push(cmp_name);
            }
          }
        }
        map = map.filter(function (item, pos) {
          return map.indexOf(item) == pos;
        });
        resolve(map);
      } catch (err) {
        reject(err);
      }
    });
  });

})(unsafeWindow);
