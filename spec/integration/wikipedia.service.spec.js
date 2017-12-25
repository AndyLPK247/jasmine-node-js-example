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

  const BASE_URL = "https://en.wikipedia.org/api/rest_v1";


  // /page/

  const R_PAGE = "/page/";

  describe(R_PAGE, function() {

    it("should return a list of page-related API endpoints", function(done) {
      frisby
        .get(BASE_URL + R_PAGE)
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

});
