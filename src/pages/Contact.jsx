import React, { useState } from "react";

import ContactForm from "../components/forms/ContactForm";
import ContactDescription from "../components/pages/contact/ContactDescription";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // No backend endpoint specified; simulate success
    setStatus("Thank you! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <ContactDescription />

      <div>
        <ContactForm form={form} onChange={onChange} onSubmit={onSubmit} />
        {status && (
          <p className="mt-4 rounded-md bg-green-100 p-3 text-sm text-green-700">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
