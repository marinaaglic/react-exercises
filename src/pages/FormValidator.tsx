/* eslint-disable @typescript-eslint/no-unused-vars */

/* TASK 
Validate a user sign-up formonce the user submits the form
When the form is submitted, validate that the user's information fits the following requirements:
-the email, password, and password confirmation fields are filled in
-the email field must have exactly one @sign in it
-the password must be eight or more characters long
-the password and password confirmation must be the same
If any of those conditions aren't met, display an error, if they are all met display a sucess message
*/
import { useState } from "react";

const FormValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <form>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormValidator;
