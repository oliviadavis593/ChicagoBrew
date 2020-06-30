import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import Logo from '../img/chicagobrew-logo.png';
import '../styles/Login.css'


class Login extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }
    state = {
        error: null, 
    }

    //Authentication for the login form
    handleSubmitJwtAuth = ev => {
        ev.preventDefault();
        this.setState({ error: null })
        const { email, password } = ev.target; 

        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
        .then(res => {
            email.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
            this.props.history.push('/dashboard')
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        const { error } = this.state; 
        return(
            <div className='cb-login-page'>
                <header>
                    <Link to='/'>
                        <img src={Logo} alt='cb-logo' className='cb-logo' />
                    </Link>
                </header>
                <main role='main'>
                    <form
                    className='cb-login__form'
                    onSubmit={this.handleSubmitJwtAuth}
                    >   
                        <fieldset>
                            <legend><h2>Login</h2></legend>
                            <label htmlFor='user-email'>Email</label>
                            <input 
                            id='user-email'
                            type='email'
                            name='email'
                            required
                            />

                            <label htmlFor='password'>Password</label>
                            <input 
                            id='user-password'
                            type='password'
                            name='password'
                            required
                            />

                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <div className='cb-container'>
                                <button className='cb-login__button' type='submit'>Enter</button>
                            </div>
                        </fieldset>
                    </form>
                    <div className='cb-demo__container'>
                        <h2>Demo</h2>
                        <p>Email: 
                            <span>chicagobrew@brew.com</span>
                        </p>
                        <p>Password:
                            <span> chiBrew773$</span>
                        </p>
                    </div>
                    <div className='cb-login-form__links'>
                        Don't have an account?
                        <Link to='/registration' className='cb-registration__route'>Register</Link>
                    </div>
                </main>
            </div>
        )
    }
}

export default Login; 