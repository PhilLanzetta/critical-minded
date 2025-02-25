import React, { useState } from "react"

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("")

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email })
  }

  return (
    <div>
      {status === "error" && (
        <div
          className="email-text"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && <div className="email-text">Thank you!</div>}
      {status !== "success" ? (
        <form
          className="email-form"
          onSubmit={e => handleFormSubmit(e)}
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
        >
          <input
            className="email-input"
            type="email"
            value={email}
            name="EMAIL"
            placeholder="EMAIL..."
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            className="email-submit-button"
            aria-label="submit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.509 18.396">
              <g
                id="Group_111"
                data-name="Group 111"
                transform="translate(-687.838 -762.559)"
              >
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M724.573,918.5h24.3"
                  transform="translate(-36.735 -146.767)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.8"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M748.07,908.752l9.437,8.531-9.437,8.531"
                  transform="translate(-45.502 -145.526)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.8"
                />
              </g>
            </svg>
          </button>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default CustomForm
