'use strict'

/**
 * @description DOMツリー読み込み完了後指定の関数を実行する
 * @param {function} func [実行関数]
 */
export const mounted = (func) => {
  if (document.readyState !== 'loading') {
    func()
  } else {
    document.addEventListener('DOMContentLoaded', func)
  }
}

/**
 * @description Domの参照を取得する
 * @param {String} className [class名]
 * @returns {Object} 指定class名のDom参照
 */
export const el = (className) => {
  const all = document.querySelectorAll(`.${className}`)

  return all.length > 1 ? all : all[0]
}

/**
 * @description 開始要素から最も近い親要素を取得する
 * @param {String} elem [要素]
 * @param {String} className [class名]
 * @returns {Object} 指定class名のDom参照
 */
export const closest = (elem, className) => {
  for (let item = elem; item; item = item.parentElement) {
    if (item.classList.contains(className)) {
      return item
    }
  }
}

/**
 * @description 指定要素に対してイベントを設定する
 * @param {String} elem [要素]
 * @param {String} ev [イベント名]
 * @param {function} func [実行関数]
 */
export const addEvent = ({ elem, ev, func }) => {
  if (elem && elem.length) {
    for (const item of elem) {
      item.addEventListener(ev, func, false)
    }
  } else {
    elem.addEventListener(ev, func, false)
  }
}
