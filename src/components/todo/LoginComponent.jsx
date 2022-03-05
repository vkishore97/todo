import { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:'in28minutes',
            password:'' ,
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state);
        this.setState({[event.target.name]:event.target.value})
    }

    loginClicked() {
        if(this.state.username==='in28minutes' && this.state.password==='dummy'){
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
        }
            
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className='container'>
                    Username:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className='btn btn' onClick={this.loginClicked}>Login</button>
                    {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successfull</div>}
                </div>
            </div>
        )
    }
}

export default LoginComponent