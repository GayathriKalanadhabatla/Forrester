//This file contains css locators to locate elements
class accountpage {

    leftNavAccount() {
        return cy.get('ul li a[name="orderLink"]')
    }
    addAccountBtn() {
        return cy.get('button[name="buttonAddAccount"]')
    }
    //input
    accountName() {
        return cy.get('input[name="ledgerName_formWidget"]')
    }
    currency() {
        return cy.get('div[name="body_asset_type_formWidget"]>div>a[name="wm-switch-eur"]')
    }
    createBtn() {
        return cy.get('button[type="submit"]')
    }
    okayBtn(){
        return cy.get('button[caption="OKAY"]')

    }
    successMessage(){
        return cy.get('[name="label9"]').invoke('text')
    }

}

const accountpagelocators = new accountpage
export default accountpagelocators

