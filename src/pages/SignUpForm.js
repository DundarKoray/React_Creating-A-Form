import React from 'react'
import { Link } from 'react-router-dom'


class SignUpForm extends React.Component {

 constructor() {
    super()
    
    this.state = {
        email: '',
        password: '',
        name: '',
        hasAgreed: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(e) {
    // input
    let target = e.target

    // value of the input, is it checkbox or not
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
            <form className="FormFields" onSubmit={this.handleSubmit}>
              
              {/*FULL NAME*/}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange}/>
              </div>
              
              {/*PASSWORD*/}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
              </div>

              {/*E-MAIL ADDRESS*/}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              {/*AGREE CHECKBOX*/}
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I aggree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>
              
              {/*BUTTON*/}
              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button> 
                <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>


            </form>
          </div>
    )
  }
}

export default SignUpForm