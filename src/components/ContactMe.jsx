import React from "react"

function ContactMe() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form
        action="https://formsubmit.co/cfd14fcd11cb6dae8de22321c87a3d4a"
        method="POST"
        className="content"
      >
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Enter name"
          required
        />
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Enter email address"
          required
        />
        <textarea
          className="form-control"
          type="body"
          name="body"
          rows="3"
          placeholder="Enter message"
          required
        ></textarea>

        <button type="submit" className="submit form-control">
          Send Message
        </button>

        {/* FormSubmit Attributes */}
        <input type="text" name="_honey" className="honey" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          // value="https://corymarker.com/"
          value="http://localhost:3000"
        />
        <input type="hidden" name="_subject" value="Portfolio Reply" />
        <input type="hidden" name="_template" value="table" />
      </form>
    </section>
  )
}

export default ContactMe
