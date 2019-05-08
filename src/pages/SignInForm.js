import React from 'react'
import { Link } from 'react-router-dom'

class SignInForm extends React.Component {
    constructor() {
        super()
        
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        // input
        let target = e.target

        // value of the input
        let value = target.type === 'checkbox' ? target.checked : target.value
        
        // name of the input, is it FulName, Password or Email
        let name = target.name

        this.setState ({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        console.log('The form was submitted with the following data:')
        console.log(this.state) 
        //it will show up what ever user wrote in Email and Password Section
    }

    render(){
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
              
                    {/*E-MAIL ADDRESS*/}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                          
                    {/*PASSWORD*/}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

              
                    {/*BUTTON*/}
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button> 
                        <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>

                </form>
          </div>
        )
    }
}

export default SignInForm