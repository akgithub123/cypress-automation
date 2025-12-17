describe("API Tests", () => {
  it("test 1", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
    ).as("bookdata");
    cy.get('button[routerlink="/library"]').click();
    cy.wait("@bookdata").then((resp) => {
      cy.log(JSON.stringify(resp.response.body));
      expect(resp.response.statusCode).to.equal(200);
      expect(resp.response.body[0].isbn).to.equal("LSA");
    });
  });

  it("test 2", () => {
    cy.request(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
    ).then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body[0].isbn).to.equal("LSA");
    });
  });

  it("test 3", () => {
    cy.request({
      method: "POST",
      url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      body: {
        book_name: "Learn Appium Automation with RS",
        isbn: "tpp",
      },
    }).then((resp)=>{
        expect(resp.status).to.equal(200);
        expect(resp.body.book_name).to.equal("Learn Appium Automation with RS");
    })
  });
});
