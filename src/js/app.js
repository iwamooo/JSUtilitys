'use strict'

import { mounted } from '@utilities'
import example from '@namespaces/example'
import exampleAsync from '@namespaces/exampleAsync'

mounted(() => {
  example()
  exampleAsync()
})
