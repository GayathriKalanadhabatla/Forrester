import accountpagelocators from "../locators/accountpage.cy"
class account {

    navigateToAccount() {
        accountpagelocators.leftNavAccount().click()
    }

    createAccount(accName) {
        accountpagelocators.addAccountBtn().click()
        accountpagelocators.accountName().type(accName)
        accountpagelocators.currency().click()
        accountpagelocators.createBtn().click()
    }
 
    validation(){
        
        accountpagelocators.successMessage().should('eq',"Account created Succesful!").then(()=>{
        accountpagelocators.okayBtn().click()
    })

}
}


const accountPage = new account()
export default accountPage