import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../App.css";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdorabbl");

  if (state.succeeded) {
    return <p className="successMessage">Thanks for your message, please look forward to our timely response!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" name="firstName" />
      <ValidationError prefix="First Name" field="firstName" errors={state.errors} />

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" name="lastName" />
      <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <h4>112 Harrisview Street, Ajax ON Canada| Phone: 4165704146 | Email: info@rangtarang.ca </h4>
    </form>
  );
}

export default ContactForm;
