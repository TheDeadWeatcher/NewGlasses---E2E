/// <reference types="cypress" />
/// <reference types="@cypress-audit/lighthouse" />

describe('NewGlasses - Home (onePageSide) - E2E', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  it('Audit - lighthouse ', () => {
    cy.visit('/');
    cy.lighthouse({
      performance: 50,
      accessibility: 80,
      'best-practices': 80,
      seo: 80,
    });
  });
});
