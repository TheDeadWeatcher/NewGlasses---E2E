/// <reference types="cypress" />

describe('NewGlasses - Home (onePageSide) - E2E', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.homeUrl);
    cy.title().should('contain', 'Optyk');
  });

  it('Should check all links in main nav ( desktop and mobile )', () => {
    cy.requestCheckLink('#header a');
    cy.requestCheckLink('#mobile-menu a');
  });

  it('should chechk lenght and exist of sliders ', () => {
    cy.get('ul.tf_abs.row-slider-slides.tf_clearfix').find('li').should('exist').and('have.length', 7);
  });

  it('Should check visibility of img,h1,p -section "o nas"', () => {
    cy.get('.tb_d85h484').should('be.visible').find('h1').should('contain', 'ZAUFANIE, LUDZIE');
    cy.get('.tb_d85h484').should('be.visible').find('p').should('contain', 'Dzięki wieloletniemu');
    cy.get('.tb_d85h484').find('img').should('be.visible').and('have.length', 1);
  });

  it('Should check visiblity of paralax slider in between section "o nas" and "badanie wzroku"', () => {
    cy.checkLength('[data-css_id="xlhy259"]', 1);
  });

  it('Should check visibility of img,h1,p - section "badanie wzroku"', () => {
    cy.get('[data-anchor="Badaniewzroku"]').should('be.visible').find('h1').should('contain', 'Badanie wzroku');
    cy.get('[data-anchor="Badaniewzroku"]').should('be.visible').find('p').should('contain', 'Dzięki wieloletniemu');
    cy.get('[data-anchor="Badaniewzroku"]').find('.tb_7t3n72').should('be.visible').and('have.length', 1);
  });

  it('Should check visiblity,h2,svg of section "oferta" ', () => {
    cy.get('[data-anchor="Oferta"] h2').should('have.text', 'OFERTA');
    cy.get('[data-anchor="Oferta"] svg').should('be.visible').and('have.length', 12); //also mobile version
  });

  it('Should check visiblity,h2,svg of section "szkła korekcyjne" ', () => {
    cy.get('.tb_cpbx115 h2').should('have.text', 'SZKŁA KOREKCYJNE');
    cy.get('.tb_cpbx115 svg').should('be.visible').and('have.length', 8); //also mobile version
    cy.get('.tb_7ch9941 svg').should('be.visible').and('have.length', 8); //also mobile version
  });

  it('Should check visibility and lenght of brand slider, desktop and mobile', () => {
    cy.get('.tb_3oyb527').find('div.tf_swiper-slide').should('not.be.visible').find('img').should('have.length', 11);
  });

  it('Should check visbility of 4 parts - section kontakt', () => {
    cy.get('[data-anchor="kontakt"]').should('be.visible').and('have.length', 4);
  });

  it.only('Should check correct data in section "kontakt"', () => {
    // cy.get('[data-anchor="kontakt"] svg').should('be.visible').and('have.length', 6);
    //   cy.get('[data-anchor="kontakt"] svg').each(($el) => {
    //     const text = $el.attr('h3');
    //     cy.wrap(text).then(($el2) => {
    //       cy.get($el2).should('contain', text);
    //     });
    //   });

    cy.get('[data-anchor="kontakt"] h3').each(($h3) => {
      const text = $h3.text;
      cy.wrap($h3).should('be.visible').and('contain', text);
    });
  });
});
