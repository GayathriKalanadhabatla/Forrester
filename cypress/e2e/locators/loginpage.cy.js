//This file contains css locators to locate elements
class loginpage {

    username() {
        return cy.get('input[name="j_username"]')
    }
    password() {
        return cy.get('input[name="j_password"]')
    }
    loginBtn() {
        return cy.get('button[caption=LOGIN]')
    }
    
}

const loginpagelocators = new loginpage
export default loginpagelocators

