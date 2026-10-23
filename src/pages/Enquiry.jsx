import './Enquiry.css';
import { useState } from 'react';
import FormSubmitFields, { FORM_SUBMIT_URL } from '../components/FormSubmitFields';

const MIN_MESSAGE_WORDS = 10;

function Enquiry() {
  const [question, setQuestion] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const wordCount = question.trim().split(/\s+/).filter(Boolean).length;

  function handleSubmit(event) {
    if (wordCount < MIN_MESSAGE_WORDS) {
      event.preventDefault();
      setValidationMessage(
        `Please write at least ${MIN_MESSAGE_WORDS} words in your question. You have entered ${wordCount}.`,
      );
      event.currentTarget.elements.message.focus();
      return;
    }

    setValidationMessage('');
  }

  return (
    <main className="content-page">
      <p className="eyebrow">ADMISSIONS</p>
      <h1>Admission Enquiry</h1>
      <p>Share your details and the program you’re interested in.</p>

      <form className="enquiry-form" action={FORM_SUBMIT_URL} method="POST" onSubmit={handleSubmit}>
        <FormSubmitFields subject="New DIET Meerut admission enquiry" />
        
        <label>
          Full name
          <input name="full_name" type="text" maxLength="120"
          placeholder='Enter your full name' required />
        </label>

        <label>
          Email address
          <input name="email" type="email" required />
        </label>

        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder='Enter your phone number'
            title="Enter a 10-digit phone number"
            required
          />
        </label>

        <label>
          Program of interest
          <select name="program" required defaultValue="">
            <option value="" disabled>Select a program</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="Polytechnic">Polytechnic</option>
            <option value="IT">IT</option>
          </select>
        </label>

        <label className="full-width">
          Your question
          <textarea
            name="message"
            value={question}
            onChange={(event) => {
              setQuestion(event.target.value);
              setValidationMessage('');
            }}
            maxLength="4000"
            placeholder={`Write at least ${MIN_MESSAGE_WORDS} words`}
            rows="4"
            aria-describedby="enquiry-word-count enquiry-validation"
            required
          />
          <small id="enquiry-word-count">
            {wordCount} / {MIN_MESSAGE_WORDS} words minimum
          </small>
          {validationMessage && (
            <p className="enquiry-validation" id="enquiry-validation" role="alert">
              {validationMessage}
            </p>
          )}
        </label>

        <button className="primary-button" type="submit">
          Submit enquiry
        </button>
      </form>
    </main>
  );
}

export default Enquiry;
