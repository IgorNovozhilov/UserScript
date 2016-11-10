// ==UserScript==
// @name          Optimize Yandex Music v0.0.4
// @version       0.0.4
// @author        Новожилов И. А.
// @description   Скрытие рекламы на music.yandex.ru
// @homepage      https://github.com/IgorNovozhilov/UserScript
// @supportURL    https://github.com/IgorNovozhilov/UserScript/issues
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABs1BMVEUAAAD/AAD/zAH/ywH/zQH/zQH/zAH/ywD/zAL/zgH/ywH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/9gD/zAH/zAH/zAH/zAH/ywL/zQH/zQH/yQD/ygD/zwP/zQH/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/zAH/zAH/1QH/agH/AwD/AAD/AAD/AAD/AAD/zAH/zAH/zAH/0AH/owH/HAD/jQH//wH/zAH/zAH/sgH/0AH/zAH/zgH/zAH/zAH/zAH/zgH/zAH/zAH/zAH/zQH/zAH/zQH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zQH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zAH/zQH/AAD/zQH/yAH/uwH/lwH/JQD/zQH/vQH/WAD/HwD/IAD/HAD/tAH/zwH/eQH/AgD/GAD/tAH/zgH/YgD/HgD/uAH/zgH/mQH/FAD/AgD/WQD/yQH/ywH/mAH/YQD/eQH/vgH/zQH/zgH/zgH/zwH///8gtUEIAAAAa3RSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASOQ8AMuLDeDAEMu/fLDPcj8HlNAkxSGvVHg07FCmn6/r58mMDHcLvWnrLFwm59EAMxvpMBKTpME/yowgGe/L+viYGTaXFuXgbBQ4KAQJ0UmwAAAABYktHRJB4Co4MAAAAB3RJTUUH4AsKARIqYHCzZQAAAMBJREFUGNNjYMABGOXkFRQZkQWUlFVU1dQRQowamtnZWtpIAjq6evoGhlABJiNjE1MzcwtLK7AAM4u1ja2dvYOjEytEns3ZJSc3L7/A1Y2dA8Tn5HIvLCouKS0r9/DkBgnweHlXVFZlZ1fX+PjyggT4/Pxr67Kzs+sbAgL5QQICQcGNTc3ZLa1tIaGCIAEh4bDw9o7Oru6eiEgRsC2iUdExvX39sXHxYuIQeyUSEpOSU1LTJKVg7paWSc/IzJIFswEYCSsulJbtCAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0xMS0xMFQwMToxODo0Mi0wNTowMMA2P18AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMTEtMTBUMDE6MTg6NDItMDU6MDCxa4fjAAAAAElFTkSuQmCC
// @icon64        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAABlVBMVEUAAAD/AAD/AAD/AAD/AAD/zAD/1QD/AAD/zAD/0QD/1QD/AAD/yAD/zAD/zwD/0gD/xgD/yQD/zAD/ygD/zAD/AAD/zgD/zgD/AAD/zAD/zQD/ywD/ywD/zAD/ygD/AAD/AAD/AAD/AAD/AAD/AAD/zQD/zQD/zQD/ywD/AAD/AAD/zAD/AAD/ywD/zQL/ywL/ywL/AAD/zAL/AAD/zQL/zAL/zQL/AAD/zAL/zAL/zQL/ywL/zAL/zAL/ywL/AAD/AAD/zAH/zQH/zAH/zQH/AAD/ywH/zAH/zQH/AAD/zAH/zAH/AAD/zAH/zAH/zAH/zAH/zAH/zAH/zAH/AAD/zAH/zAH/zAH/AAD/zAH/AAD/zAH/AAD/zAH/zAH/BQD/zAH/AAD/zAH/zAH/zAH/zAH/AAD/zAH/zAH/AAD/AAD/AgD/AwD/BgD/CQD/CgD/DgD/EAD/IQD/IgD/IwD/MAD/OQD/OgD/UgD/VQD/VgD/VwD/WQD/WgD/WwD/XgD/qgH/rAH/xgH/yAH/yQH/zAH///8cnMeOAAAAanRSTlMAAQIDBQUGCQoLDA4ODxAREhMUGBkaGh8iIyQnLC0wMzg8Pk1VVltcXmZvfYCAhIqPkZGTk5eYmZucnZ6goaOqs7q7v8DExsnKzMzP19fa3ODh4uPm6Onq6+vu7vLy8/T09/f4+fr7+/z9Lei+iwAAAAFiS0dEhozeO10AAAGnSURBVEjH7dZnV8IwFAbgOkBw4l44cO+tqLgXOHGBCg4EUSwgIm4FUcz/tufQVCpJWvJRfT/ec5/TldyUYf5DnYYMSmiz6XVpVJBl2bWuCjrIspeL7TlUkMvpdGMmFeSy219HB7n8Wlg/uE8HGSZdpz+kglyymmbOqSCX0o5lOigjBW2TJovdbjFOnKQCtVMuAHMtH2YPeQAQwQGVHFe9DsAPCEwl0q52DyRDsKOVclVWgIJgu5jscjcAGoJVNRH2ARwEPcQXcyGAaDgUDN5GogJ0kF6QAbKPJ298N3j9EIJhwnpxQncn2oTxojMPC1vgBR9ZBATNWDgGn8+LhCNYuMJ3vLBIaMTCA77jBg2tWHjGdwTQ0IWFbr7jSuwCkhBzqyHJWzXyHRExfOPLS9Kfw5fofO+Sn0NYAGHUBQkLQH3Mt8Tuv93DJ188UslY5LFnuMhfY7A2Kntb+f2hSFQouCtT28hCeokTQLmAc/MK8tApMqOduVBqzNVsodymVnqwauaS3axGzihXdjrEzNmtkHl6lI27EpihPNVjzuPhjrnW/D/86/wFq2O8F5JPxc8AAAAASUVORK5CYII=
// @include       https://music.yandex.ru/*
// @run-at        document-start
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* jshint esnext:true */
(function(window) {
   var document = window.document;
   var style = document.createElement('style');
   style.id = 'CSS-Optimize-Yandex-Music';
   style.type = 'text/css';
   style.innerHTML = `
      div.overhead.overhead_theme_adv,
      div.sidebar__placeholder .teaser,
      div.sidebar__placeholder .slider-hider__content,
      div.sidebar__placeholder .ads-block.smalladv.ads-block_side,
      div.sidebar__placeholder .ads-block__no-ads,
      div.sidebar__placeholder .app-sms__content {
         display: none !important;
      }
      div.centerblock{
         padding: 16px 16px 0 !important;
      }
      div.centerblock-wrapper1 {
         width: auto !important;
      }
      div.footer {
         display: none !important;
      }
   `;
   document.head.appendChild(style);
   var cont_shown_style = document.createElement('style');
   cont_shown_style.id = 'CSS-Optimize-Yandex-Music__cont_shown';
   cont_shown_style.type = 'text/css';
   cont_shown_style.innerHTML = `
      div.sidebar__placeholder {
         display: none !important;
      }
      body.layout_narrow .centerblock-wrapper {
         margin-right: 0 !important;
      }
      div.centerblock-wrapper {
         width: auto !important;
      }
   `;
   document.head.appendChild(cont_shown_style);
   document.addEventListener("DOMNodeInserted", function(ev) {
      var cont_shown = document.querySelector('div.sidebar__placeholder .sidebar-cont.sidebar-cont_shown');
      if (cont_shown) {
         document.head.removeChild(cont_shown_style);
      } else {
         document.head.appendChild(cont_shown_style);
      }
   }, false);
})(unsafeWindow);
