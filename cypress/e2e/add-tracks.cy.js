/// <reference types="cypress" />
import MainPage from './selectors/MainPage'

describe('Add Tracks Functionality Suite', () => {
  beforeEach('Connection to the app', () => {
    cy.visit('/')
  })

  it('Verify single track addition using + button', () => {
    //Custom commands can be found in support/commands.js
    const trackToAdd = 'Winter Winds'

    cy.addTrack(trackToAdd)

    cy.get(MainPage.playlist.title)
      .should('be.visible')
      .and('have.text', 'Your playlist')

    cy.get(MainPage.playlist.trackTitles)
      .should('have.length', 1)
      .and('have.text', trackToAdd)
  })

  it('Verify multiple track addition using checkboxes', () => {
    const tracksToAdd = ['Spring Dance', 'Rainy Mood']

    cy.addTracks(tracksToAdd)

    cy.get(MainPage.playlist.title)
      .should('be.visible')
      .and('have.text', 'Your playlist')

    tracksToAdd.forEach((track) => {
      cy.get(MainPage.playlist.trackTitles).should('contain.text', track)
    })
  })
})
