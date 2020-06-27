import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Login extends Component {
    submitForm(e) {
        e.preventDefault()
        this.props.history.push('/dash');
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form action="./qc-maintenance/src/components/Dash.js" method="" onSubmit={this.submitForm.bind(this)}>
                    <br />
                    <div className="container">
                        <label htmlFor="uname"><b>Enter Name</b></label>
                        <input type="text" placeholder="Enter Name" name="uname" required />
                        <button type="submit">Demo Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);