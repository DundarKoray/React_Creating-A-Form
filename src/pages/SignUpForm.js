import React from 'react'

class SignUpForm extends React.Component {
  render(){
    return (
      <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              
              {/*FULL NAME*/}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>
              </div>
              
              {/*PASSWORD*/}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
              </div>

              {/*E-MAIL ADDRESS*/}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" />
              </div>

              {/*CHECKBOX*/}
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I aggree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>
              
              {/*BUTTON*/}
              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button> 
                <a href="#" className="FormField__Link">I'm already member</a>
              </div>


            </form>
          </div>
    )
  }
}

export default SignUpForm