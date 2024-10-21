/// <reference types="cypress" />
import MainPage from './selectors/MainPage'

describe('Search Functionality Suite', () => {
  let searchData

  beforeEach('Connection to the app', () => {
    cy.visit('/')
    cy.fixture('search').then((data) => (searchData = data))
  })

  it('Verify track filtering with unique search criteria', () => {
    searchData.forEach((data) => {
      // Custom commands can be found in support/commands.js
      cy.writeOn(MainPage.search.input, data.searchCriteria)

      cy.get(MainPage.tracklist.trackTitles)
        .should('have.length', 1)
        .and('have.text', data.resultTitle)
    })
  })
})
