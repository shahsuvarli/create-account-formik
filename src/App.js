import { ErrorMessage, Field, Form, Formik } from "formik";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleError(values) {
    const error = {};

    if (!values.name) {
      error.name = "Please enter your name!";
    }
    if (!values.email) {
      error.email = "Please enter your email!";
    }
    if (!values.password) {
      error.password = "Please enter your password!";
    }
    return error;
  }
  onSubmit(values) {
    this.setState({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="form">
          <div className="form-output">
            <div className="output-header">User Info</div>
            <div id="output-name">First Name: {this.state.name}</div>
            <div id="output-email">Email: {this.state.email}</div>
            <div id="output-pass">Password: {this.state.password}</div>
          </div>
          <br />
          <div className="form-input">
            <div className="input-header">
              <div className="header-container">
                <div>Create An Account</div>
                <p>
                  Create a account to enjoy all the services without any ads for
                  free!
                </p>
              </div>
            </div>
            <div className="input-body">
              <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validate={this.handleError}
                onSubmit={this.onSubmit}
              >
                <Form className="formik-class">
                  <label htmlFor="name">Full name</label>
                  <Field
                    placeholder="Full name"
                    type="name"
                    name="name"
                    id="input-name"
                  />
                  <ErrorMessage name="name" />

                  <label htmlFor="email">Email address</label>
                  <Field
                    placeholder="Email address"
                    type="email"
                    name="email"
                    id="input-email"
                  />
                  <ErrorMessage name="email"  className="error"/>

                  <label htmlFor="password">Password</label>
                  <Field
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="input-password"
                  ></Field>
                  <ErrorMessage name="password" />

                  <button type="submit">Create Account</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
