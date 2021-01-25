// ==UserScript==
// @name          Get Git Branch - SBIS UI-Customizer
// @version       0.0.1
// @author        Новожилов И. А.
// @description   Копирование имени ветки git по tensor-flow
// @homepage      https://github.com/IgorNovozhilov/UserScript
// @supportURL    https://github.com/IgorNovozhilov/UserScript/labels/sbis
// @icon          https://github.com/IgorNovozhilov/UserScript/raw/master/sbis/get-git-branch.user.png
// @include       https://*online.sbis.ru/*
// @include       https://*online.saby.ru/*
// @run-at        document-start
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
((window) => {
  'use strict'

  const hKeys = {
    'ctrl-shift-KeyB': () => copyBranchName(),
    'ctrl-alt-KeyB': () => copyBranchName(),
    'alt-KeyB': () => copyBranchName(),
    'ctrl-KeyB': () => copyBranchName()
  }

  function copyBranchName() {
    const edoDialogs = document.querySelectorAll('.edo3-Dialog')
    const records = []

    edoDialogs.forEach(edoDialog => {
      if (edoDialog.controlNodes && edoDialog.controlNodes[0] && edoDialog.controlNodes[0].control) {
        const control = edoDialog.controlNodes[0].control
        const record = control.getRecordField ? control.getRecordField() : null

        if (record) {
          records.push(record)
        }
      }
    })

    debugger
  }

  document.addEventListener('keydown', (event) => {
    let keyName = ''
    if (event.ctrlKey) {
      keyName += 'ctrl-'
    }
    if (event.shiftKey) {
      keyName += 'shift-'
    }
    if (event.altKey) {
      keyName += 'alt-'
    }
    keyName += event.code
    if (keyName in hKeys) {
      hKeys[keyName]()
      event.stopPropagation()
    }
  }, {
    capture: true
  })
})(unsafeWindow)
