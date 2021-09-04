import { makeServer } from '../../src/miragejs.js'
import { Response } from 'miragejs'

context('Auth', () => {
  let server;
  beforeEach(() => {
    server = makeServer({ environment: 'test' })
  })
  afterEach(() => {
    server.shutdown()
  })
  it('should auth', () => {
    server.post('/auth/login', () => {
      return new Response(
        200,
        {},
        {
          data: {
            token: 'token',
          }
        }
      )
    })
    server.get('/auth/me', () => {
      return new Response(
        200,
        {},
        {
          data: {
            id: 'teste',
            name: 'Administrador',
            email: 'emailt@teste.com',
          }
        }
      )
    })

    cy.visit('/auth/login')
    cy.get('input[type="email"]')
      .type('admin@teste.dev.br')
      .should('have.value', 'admin@teste.dev.br')

    cy.get('input[type="password"]')
      .type('abc123')
      .should('have.value', 'abc123')

    cy.get('form').submit()

    cy.url().should('contain', '/')
    cy.get('button[data-testid="username"]').contains('Administrador')
  })
})
