import "./AdmissionForm.css";
import { useState } from "react";
import FormSubmitFields, { FORM_SUBMIT_URL } from "../components/FormSubmitFields";

function AdmissionForm() {
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");

  const branches = {
    "B.Tech": ["Computer Science", "Civil", "Mechanical"],
    BCA: ["Computer Applications"],
    BBA: ["Business Administration"],
    Polytechnic: ["Civil", "Mechanical", "Computer Science"],
    IT: ["Information Technology"],
  };

  return (
    <main className="content-page admission-page">
      <p className="eyebrow">ADMISSIONS</p>
      <h1>College Admission Form</h1>
      <p>Enter the applicant’s details to complete the application.</p>

      <form className="admission-form" action={FORM_SUBMIT_URL} method="POST">
        <FormSubmitFields subject="New DIET Meerut admission application" />
        <h2>Applicant information</h2>

        <label>
          Full name
          <input name="full_name" type="text" autoComplete="name" maxLength="120" required />
        </label>

        <label>
          Date of birth
          <input name="date_of_birth" type="date" required />
        </label>

        <label>
          Father's name
          <input type="text" name="father_name" maxLength="120" required />
        </label>

        <label>
          Email address
          <input name="email" type="email" autoComplete="email" required />
        </label>

        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Enter your phone number"
            maxLength={10}
            title="Enter a 10-digit phone number"
            required
          />
        </label>

        <label className="admission-full-width">
          Address
          <textarea
            name="address"
            rows="3"
            maxLength="1000"
            autoComplete="street-address"
            required
          />
        </label>

        <h2>Program and education</h2>

        <label>
          Course
          <select
            name="course"
            value={course}
            onChange={(event) => {
              setCourse(event.target.value);
              setBranch("");
            }}
            required
          >
            <option value="" disabled>
              Select a course
            </option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="Polytechnic">Polytechnic</option>
            <option value="IT">IT</option>
          </select>
        </label>

        <label>
          Branch
          <select
            name="branch"
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
            required
            disabled={!course}
          >
            <option value="" disabled>
              {course ? "Select a branch" : "First select a course"}
            </option>
            {branches[course]?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label>
          Most recent qualification
            <input name="qualification" type="text" maxLength="120" required />
        </label>

        <label>
          Board or university
            <input name="board" type="text" maxLength="120" required />
        </label>

        <label>
          Marks or percentage
          <input
            name="marks"
            type="text"
            maxLength="40"
            placeholder="For example: 78% or 8.1 CGPA"
            required
          />
        </label>

        {/* <h2>Parent or guardian</h2>

        <label>
          Parent or guardian name
          <input name="guardianName" type="text" required />
        </label>

        <label>
          Parent or guardian phone
          <input
            name="guardianPhone"
            type="tel"
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            required
          />
        </label> */}

        <label className="admission-full-width consent">
          <input name="consent" type="checkbox" value="true" required />
          <span>I confirm that the information provided is correct.</span>
        </label>

        <button className="primary-button" type="submit">
          Submit application
        </button>
      </form>
    </main>
  );
}

export default AdmissionForm;
