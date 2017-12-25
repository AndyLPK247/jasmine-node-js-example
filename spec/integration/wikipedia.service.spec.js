// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------

const frisby = require('frisby');


// --------------------------------------------------------------------------------
// Wikipedia REST API Service Call Specs
// 
// Wikipedia offers a public REST API: https://en.wikipedia.org/api/rest_v1/
// These tests call a few different endpoints to show how to write REST API tests.
// They use the frisby package: https://github.com/vlucas/frisby
// Using Jasmine matchers directly is preferred to using frisby expects
// because failure messages are cleaner.
// --------------------------------------------------------------------------------

describe("English Wikipedia REST API", function() {

  // Setup

  const ENV = require("../support/env.json");
  const BASE_URL = ENV.integration.wikipediaServiceBaseUrl;


  // /page/

  describe("GET /page/", function() {

    it("should return a list of page-related API endpoints", function(done) {
      frisby
        .get(BASE_URL + "/page/")
        .then(function(response) {
          expect(response.status).toBe(200);
          expect(response.json.items).toContain("html");
          expect(response.json.items).toContain("pdf");
          expect(response.json.items).toContain("summary");
          expect(response.json.items).toContain("title");
          expect(response.json.items).toContain("wikitext");
        })
        .done(done);
    });

  });


  // /page/html/{title}

  describe("GET /page/html/{title}", function() {

    it("should return the latest HTML for the given page title", function(done) {
      frisby
        .get(BASE_URL + "/page/html/Pikachu")
        .then(function(response) {
          expect(response.status).toBe(200);
          expect(response.body).toContain("<title>Pikachu</title>");
          // To be more robust, this test could parse the body into HTML
        })
        .done(done);
    })

  });


  // /page/summary/{title}

  describe("GET /page/summary/{title}", function() {

    it("should return the summary for the given page title", function(done) {
      frisby
        .get(BASE_URL + "/page/summary/Pikachu")
        .then(function(response) {
          expect(response.status).toBe(200);
          expect(response.json.title).toBe("Pikachu");
          expect(response.json.pageid).toBe(269816);
          expect(response.json.extract).toContain("Pokémon");
        })
        .done(done);
    })

  });

});
