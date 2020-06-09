import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useForm } from "react-hook-form";

import Button from "../utils/button";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState({ type: "", message: "SEND MESSAGE" });
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues,
  });
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "Message from your website",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    accessKey: "dd1f5506-d7ac-4c6f-95f1-f1ed879d9123", // get your access key from https://www.staticforms.xyz
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleFormData = async (data) => {
    if (data.name != "" && data.email != "" && data.message != "") {
      setStatus({ type: "processing", message: "Processing..." });
      try {
        await fetch("https://api.staticforms.xyz/submit", {
          method: "POST",
          body: JSON.stringify(contact),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              setStatus({ type: "success", message: data.message });
              reset({ defaultValues });
            } else {
              setStatus({ type: "error", message: data.message });
            }
          });
      } catch (err) {
        throw err;
      }
    }
  };

  return (
    <Scrollbars style={{ height: "100vh", width: "100%" }}>
      <div className={`inner ${isLoading ? "loading" : ""}`}>
        <form className="contact" onSubmit={handleSubmit(handleFormData)}>
          <div className="form-group">
            <h3>
              Interested working together?
              <br />
              Get in touch
            </h3>
          </div>
          <div className="form-group form-group--mini">
            <input
              className="input"
              name="name"
              defaultValue=""
              placeholder="Full Name"
              ref={register({
                required: "This field is required",
                minLength: { value: 2, message: "Please enter your full name" },
                maxLength: { value: 50, message: "Your Name is too long" },
              })}
              onChange={handleChange}
            />
            <span className={`error error-${errors.name ? `show` : `hide`}`}>
              {errors.name && errors.name.message}
            </span>
          </div>
          <div className="form-group form-group--mini">
            <input
              className="input"
              name="email"
              defaultValue=""
              placeholder="Email Address"
              ref={register({
                required: "This field is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address",
                },
              })}
              onChange={handleChange}
            />
            <span className={`error error-${errors.email ? `show` : `hide`}`}>
              {errors.email && errors.email.message}
            </span>
          </div>
          <input
            style={{ display: "none" }}
            name="honeypot"
            defaultValue=""
            ref={register}
          />
          <div className="form-group">
            <textarea
              className="input input--textarea"
              name="message"
              defaultValue=""
              placeholder="Message..."
              ref={register({
                required: "This field is required",
                minLength: { value: 1, message: "Say something" },
                maxLength: { value: 300, message: "Message too long" },
              })}
              onChange={handleChange}
            />
            <span className={`error error-${errors.message ? `show` : `hide`}`}>
              {errors.message && errors.message.message}
            </span>
          </div>
          {status["type"] == "success" ? (
            <p>Your message has been sent!</p>
          ) : (
            <Button type="submit" className="btn btn-primary">
              {status["type"] != "error" && status["message"]}
            </Button>
          )}
          {status["error"] && <p>{status["message"]}</p>}
        </form>
      </div>
    </Scrollbars>
  );
}
