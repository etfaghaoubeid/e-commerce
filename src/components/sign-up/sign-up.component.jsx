import React from "react";
import "./sign-up.styles.scss";
import CustomButton from "../custum-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, creteUserProfileDocument } from "../../firebase/firebase.util";
// class SignUp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       displayName: "",
//       email: "",
//       password: "",
//       confirmPassword: ""
//     };
//   }
//   handleSubmit = async event => {
//     event.preventDefault();
//     const { displayName, email, password, confirmPassword } = this.state;
//     if (password !== confirmPassword) {
//       alert("password Should match");
//       return;
//     }
//     try {
//       console.log(displayName, 55555555555555555555555, this.state.displayName);
//       const { user } = auth.createUserWithEmailAndPassword(email, password);
//       await creteUserProfileDocument(user, { displayName });

//       this.setState({
//         displayName: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   render() {
//     return (
//       <div className="sign-up">
//         <h2 className="title">I do not have an account </h2>
//         <span>Sign up with email and password</span>
//         <form className="sign-up-form" onSubmit={this.handleSubmit}>
//           <FormInput
//             type="text"
//             name="displayName"
//             onChange={this.handleChange}
//             label="Display name"
//             value={this.state.displayName}
//             required
//           />
//           <FormInput
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             label="email "
//             value={this.state.email}
//             required
//           />
//           <FormInput
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             label="password"
//             value={this.state.password}
//             required
//           />
//           <FormInput
//             type="password"
//             name="confirmPassword"
//             onChange={this.handleChange}
//             label="confirmPassword"
//             value={this.state.confirmPassword}
//             required
//           />

//           <CustomButton>Sign up</CustomButton>
//         </form>
//       </div>
//     );
//   }
// }
// export default SignUp;

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await creteUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
