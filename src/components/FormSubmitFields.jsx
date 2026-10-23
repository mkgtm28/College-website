export const FORM_SUBMIT_URL = "https://formsubmit.co/mkgtm28@gmail.com";

function FormSubmitFields({ subject }) {
  return (
    <>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_next"
        value={`${window.location.origin}/submission-sent`}
      />
      <input
        type="hidden"
        name="_url"
        value={`${window.location.origin}${window.location.pathname}`}
      />
    </>
  );
}

export default FormSubmitFields;
