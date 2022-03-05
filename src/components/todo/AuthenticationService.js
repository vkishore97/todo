class AuthenticationService {
    registerSuccessfullLogin(username,password){
        console.log('registerSuccessfullLogin')
        sessionStorage.setItem('autheticatedUser',username);
    }

    logout() {
        sessionStorage.removeItem('autheticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('autheticatedUser')
        if(user===null) return false
        return true
    }
}

export default new AuthenticationService()