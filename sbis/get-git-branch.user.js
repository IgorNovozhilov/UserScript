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
// @require       https://cdn.jsdelivr.net/npm/@notml/core@^0.0.5/core-global.min.js
// ==/UserScript==
/* global unsafeWindow, $oom */

class GetGitBranchDialog extends unsafeWindow.HTMLElement {

  isOpen = false

  toggleOpen() {
    if (this.isOpen) {
      this.isOpen = false
      this.style.display = 'none'
    } else {
      this.prepareCurrentBranches()
      this.isOpen = true
      this.style.display = ''
    }
  }

  prepareCurrentBranches() {
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

    if (records.length > 0) {
      debugger
    }

  }

  shadowRootInit = { mode: 'open' }

  template = () => $oom
    .div({ style: { display: 'none' } })

  hKeysEvents = {
    'ctrl-shift-KeyB': () => this.toggleOpen(),
    'ctrl-alt-KeyB': () => this.toggleOpen(),
    'alt-KeyB': () => this.toggleOpen(),
    'ctrl-KeyB': () => this.toggleOpen()
  }

  onkeydown(event) {
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
    if (keyName in this.hKeysEvents) {
      this.hKeysEvents[keyName](event)
      event.stopPropagation()
    }
  }

  constructor() {
    super()
    this._onkeydown = event => this.onkeydown(event)
  }

  connectedCallback() {
    unsafeWindow.addEventListener('keydown', this._onkeydown, {
      capture: true
    })
  }

  disconnectedCallback() {
    unsafeWindow.removeEventListener('keydown', this._onkeydown)
  }

}


unsafeWindow.document.body.append($oom.define(GetGitBranchDialog)
  .GetGitBranchDialog({ style: { display: 'none' } }).dom)
