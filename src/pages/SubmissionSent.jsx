import { Link } from "react-router-dom";

function SubmissionSent() {
  return (
    <main className="content-page submission-sent-page">
      <p className="eyebrow">THANK YOU</p>
      <h1>Your form was submitted</h1>
      <p>
        Thank you for contacting DIET Meerut. The college team will review your
        submission and get back to you if needed.
      </p>
      <Link className="primary-button" to="/">
        Return to home
      </Link>
    </main>
  );
}

export default SubmissionSent;
