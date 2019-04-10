'use strict'

import { elem, closest } from '@utilities'
import { addEvent } from '@utilities/event'

const example = {
  func_1(el) {
    const parent = closest({
      el: el,
      className: 'Wrapper'
    })

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
  const el = elem('js-Example')

  if (!el) {
    return
  }

  addEvent({
    el: el,
    ev: 'click',
    func: e => {
      example.func_1(e.currentTarget)
    }
  })
}
