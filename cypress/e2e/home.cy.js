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

  it('Should check correct data in section "kontakt"', () => {
    cy.get('[data-anchor="kontakt"] h3').each(($el) => {
      const text = $el.text();
      cy.get('[data-anchor="kontakt"] h3').should('be.visible').and('contain', text);
    });
  });

  it('Should chechk H1 in section "Gdzie nas szukać"', () => {
    cy.checkH1('.tb_duwu548 h1');
  });

  it('Should check h1, also check contact form', () => {
    cy.checkH1('[data-css_id="bjtb545"] h1');
    cy.get('#tb_gduv149-contact-name').should('be.visible');
    cy.get('#tb_gduv149-contact-name').type('Bartosz', { force: true });
    cy.get('#tb_gduv149-contact-email').should('be.visible');
    cy.get('#tb_gduv149-contact-email').type('jasykbartosz@gmail.com', { force: true });
    cy.get('#tb_gduv149-contact-subject').should('be.visible');
    cy.get('#tb_gduv149-contact-subject').type('Test', { force: true });
    cy.get('#tb_gduv149-contact-message').should('be.visible');
    cy.get('#tb_gduv149-contact-message').type(
      'Dzień dobry, jest to atumatyczny test twojej aplikacji, proszę odpisz jeżeli otrzymałeś tego maila. Bartosz Jasyk',
      { force: true }
    );
    cy.get('#tb_gduv149-form').submit();
  });

  it('Should check visiblity and correct url of google maps', () => {
    cy.frameLoaded('#gmap_canvas').invoke('show');
    cy.iframe('#gmap_canvas').should('be.visible');
    // cy.get('#mapDiv').find('[aria-label="Wyświetl większą mapę"]').click({ force: true });
  });

  it('Should check visiblity and correct url in footer section', () => {
    cy.get('#footerwrap').should('be.visible');
    cy.checkLinksUrl('.icon-medium a');
    cy.checkH1('.one');
  });

  it('Should check correct url of "blog', () => {
    cy.contains('Blog').click();
    cy.url().should('eq', url.blogUrl);
    cy.get('[data-css_id="amw9151"]').find('article').should('be.visible').and('have.length', 2);
    cy.checkLinksUrl('.entry-title a');
  });
});
