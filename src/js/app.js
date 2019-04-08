'use strict'

import { mounted } from '@modules/utils'
import example from '@namespaces/example'
import exampleAsync from '@namespaces/exampleAsync'

mounted(() => {
  example()
  exampleAsync()
})
