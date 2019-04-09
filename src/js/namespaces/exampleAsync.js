'use strict'

import { el, addEvent } from '@modules/utils'

/**
 * @description コンソール表示
 */
export default () => {
  const elem = el('js-ExampleAsync')

  if (!elem) {
    return
  }

  addEvent({
    elem: elem,
    ev: 'click',
    func: async e => {
      try {
        const el = e.currentTarget
        const { confirmation } = await import('@modules/confirmation')

        confirmation(el)
      } catch (error) {
        /* eslint no-console: 0 */
        console.log(error)
      }
    }
  })
}
