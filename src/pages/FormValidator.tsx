import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const FormValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (e: FormEvent) => {
    e.preventDefault();

    if (!email && !password && !passwordConfirm) {
      setErrorMessage("All fields must be filled in.");
      return;
    }

    if (email.split("@").length !== 2) {
      setErrorMessage("Email must contain exactly one '@' sign.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password != passwordConfirm) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setSuccessMessage("Form submitted successfully");
  };

  return (
    <>
      <h2>FORM VALIDATOR</h2>
      <p>Validate a user sign-up formonce the user submits the form</p>
      <ul>
        When the form is submitted, validate that the user's information fits
        the following requirements:
        <li>
          the email, password, and password confirmation fields are filled in
        </li>
        <li>the email field must have exactly one @sign in it</li>
        <li>the password must be eight or more characters long</li>
        <li>the password and password confirmation must be the same</li>
      </ul>
      <p>
        If any of those conditions aren't met, display an error, if they are all
        met display a sucess message
      </p>
      <form onSubmit={validateForm}>
        <h2>Sign Up!</h2>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="password-confirm">Confirm Password </label>
        <input
          type="password"
          name="password-confirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <input type="submit" value="Submit" />
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
      <Link to="/">Back</Link>
    </>
  );
};

export default FormValidator;
