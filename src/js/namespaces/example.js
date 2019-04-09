'use strict'

import { el, addEvent, closest } from '@modules/utils'

const example = {
  func_1(el) {
    const parent = closest(el, 'Wrapper')

    this.func_2(parent)
  },

  /* eslint no-console: 0 */
  func_2(el) {
    console.log(el)
  }
}

/**
 * @description currentTargetをコンソール表示する
 */
export default () => {
  const elem = el('js-Example')

  if (!elem) {
    return
  }

  addEvent({
    elem: elem,
    ev: 'click',
    func: e => {
      example.func_1(e.currentTarget)
    }
  })
}
