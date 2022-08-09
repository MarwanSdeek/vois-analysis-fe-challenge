import { mount } from 'cypress/react'
import { MountOptions, MountReturn } from 'cypress/react'
import { MemoryRouterProps } from 'react-router-dom'

import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount

      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mountWithRouter(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add('mount', mount)
