import { useState } from "react";
import "./Jobs.css";
import FormSubmitFields, { FORM_SUBMIT_URL } from "../components/FormSubmitFields";

const MIN_MESSAGE_WORDS = 10;

function Jobs() {
  const [message, setMessage] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const wordCount = message.trim().split(/\s+/).filter(Boolean).length;

  function handleSubmit(event) {
    if (wordCount < MIN_MESSAGE_WORDS) {
      event.preventDefault();
      setValidationMessage(
        `Please write at least ${MIN_MESSAGE_WORDS} words in your message. You have entered ${wordCount}.`,
      );
      event.currentTarget.elements.message.focus();
      return;
    }

    setValidationMessage("");
  }

  return (
    <main className="content-page jobs-page">
      <p className="eyebrow">CAREERS</p>
      <h1>DIET Job Opportunities</h1>
      <p>
        Apply for a vacancy by sharing your contact details and the role you are
        interested in.
      </p>

      <form
        className="job-application"
        action={FORM_SUBMIT_URL}
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <FormSubmitFields subject="New DIET Meerut job application" />
        <label>
          Full name
          <input
            name="full_name"
            type="text"
            autoComplete="name"
            maxLength="120"
            required
          />
        </label>

        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength="254"
            required
          />
        </label>

        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength="20"
            required
          />
        </label>

        <label>
          Job profile
          <select name="job_profile" defaultValue="" required>
            <option value="" disabled>
              Select a job profile
            </option>
            <option value="Faculty">Faculty</option>
            <option value="Lab Assistant">Lab Assistant</option>
            <option value="Administrative Staff">Administrative Staff</option>
            <option value="Technical Staff">Technical Staff</option>
            <option value="Clerk">Clerk / office Assistant</option>
            <option value="IT Support Staff">IT Support Staff</option>
            <option value="Network Administrator">Network Administrator</option>
            <option value="Lab Technician">Lab Technician</option>
            <option value="Placement Officer">Placement Officer</option>
            <option value="Admission Officer">Admission Officer</option>
            <option value="Security Staff">Security Staff</option>
          </select>
        </label>

        <label>
          Upload your resume
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            required
          />
          <small>PDF, DOC, or DOCX. Maximum combined upload size: 10 MB.</small>
        </label>

        <label className="job-full-width">
          Message
          <textarea
            name="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setValidationMessage("");
            }}
            rows="5"
            maxLength="4000"
            aria-describedby="job-message-word-count job-message-validation"
            required
            placeholder={`Write at least ${MIN_MESSAGE_WORDS} words about your application`}
          />
          <small id="job-message-word-count">
            {wordCount} / {MIN_MESSAGE_WORDS} words minimum
          </small>
          {validationMessage && (
            <p className="job-validation" id="job-message-validation" role="alert">
              {validationMessage}
            </p>
          )}
        </label>

        <label className="job-full-width job-consent">
          <input name="consent" type="checkbox" required />
          <span>
            I agree to send these details to the college for this job
            application.
          </span>
        </label>

        <button className="primary-button" type="submit">
          Submit application
        </button>
      </form>
    </main>
  );
}

export default Jobs;
