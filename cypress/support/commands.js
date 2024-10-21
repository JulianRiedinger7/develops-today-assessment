Cypress.Commands.add('writeOn', (selector, text) => {
  cy.get(selector).clear().type(text)
})

Cypress.Commands.add('addTrack', (title) => {
  cy.contains(title).parent().siblings().closest('button').click()
})

Cypress.Commands.add('addTracks', (titlesList) => {
  titlesList.forEach((title) => {
    cy.contains(title)
      .parent()
      .siblings()
      .first()
      .children()
      .children('input')
      .check()
  })

  cy.contains('button', 'Add').click()
})
