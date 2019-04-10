'use strict'

import { elem } from '@utilities'
import { addEvent } from '@utilities/event'

/**
 * @description コンソール表示
 */
export default () => {
  const el = elem('js-ExampleAsync')

  if (!el) {
    return
  }

  addEvent({
    el: el,
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
