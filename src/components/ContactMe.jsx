import React from "react"
import { FaGithubSquare, FaLinkedin, FaDev } from "react-icons/fa"

function ContactMe() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form
        action="https://formsubmit.co/cfd14fcd11cb6dae8de22321c87a3d4a"
        method="POST"
        className="content form-content"
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

        <button type="submit" className="btn submit-btn form-control">
          Send Message
        </button>

        {/* FormSubmit Attributes */}
        <input type="text" name="_honey" className="honey" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://corymarker.com/" />
        <input type="hidden" name="_subject" value="Portfolio Reply" />
        <input type="hidden" name="_template" value="table" />
      </form>
      <article className="social-links">
        <a
          href="https://github.com/Swislok-Dev/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/cory-marker/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://dev.to/swislokdev" target="_blank" rel="noreferrer">
          <FaDev />
        </a>
      </article>
    </section>
  )
}

export default ContactMe
