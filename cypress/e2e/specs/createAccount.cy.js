import accountPage from "../pages/account.cy"
describe('account flow', function () {
    //This hook runs before each it block 
    beforeEach(function () {
        cy.fixture('credentials').then(function(logindata) {
            this.logindata = logindata
            cy.fixture('account').then(function(accountData) {
                this.accountData = accountData
     
        })
    })

})
    it('create account', function () {
        cy.visit('/')
        .login({username:this.logindata.username,password:this.logindata.password})
        .title().should('eq', 'Dashboard')
        accountPage.navigateToAccount()
        cy.title().should('eq','Managed Accounts')
       accountPage.createAccount(this.accountData.accountname)
        accountPage.validation()

    })

    })
