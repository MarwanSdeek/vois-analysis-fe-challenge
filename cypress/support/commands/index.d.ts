/// <reference types="cypress" />

import { MountOptions, MountReturn } from 'cypress/react'
import { MemoryRouterProps } from 'react-router-dom'

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-testid attribute.
     */
    getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;

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


