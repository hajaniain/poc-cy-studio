## Pour tester

        npm install

        ng serve

        npm run cypress:open


* Créer un nouveau fichier de test dans cypress/integration/{nom-fichier}.js

```js
describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:4200");
  });
});
```

* Suivre le guide proposé [ici](https://docs.cypress.io/guides/core-concepts/cypress-studio.html#Step-1-Run-the-spec)

PS: Le contenu du fichier `cypress/integration/address-form_spec.js` a été généré par Cypress Studio


## Historique des commandes


        ng add @angular/material

        ng generate @angular/material:address-form address-form

        npm install cypress --save-dev

        ng serve

        npm run cypress:open


