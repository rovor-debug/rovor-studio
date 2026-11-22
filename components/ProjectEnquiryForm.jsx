"use client";

import { useState } from "react";

const initial = {
  name: "", email: "", organization: "", projectType: "Residential architecture",
  location: "", budget: "", language: "English", timeline: "", brief: "",
  website: "",
};

export default function ProjectEnquiryForm() {
  const [values, setValues] = useState(initial);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => data.append(key, value));
    if (file) data.append("attachment", file);
    try {
      const response = await fetch("/api/enquiry", { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "The enquiry could not be sent.");
      setStatus("success");
      setMessage("Thank you. Your enquiry has been received.");
      setValues(initial);
      setFile(null);
      event.target.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please email Gp.rovor@gmail.com directly.");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="enquiry-form__grid">
        <label>Full name <span>*</span><input name="name" value={values.name} onChange={update} required maxLength={120} autoComplete="name" /></label>
        <label>Email address <span>*</span><input name="email" type="email" value={values.email} onChange={update} required maxLength={254} autoComplete="email" /></label>
        <label>Company / organization <small>Optional</small><input name="organization" value={values.organization} onChange={update} maxLength={160} autoComplete="organization" /></label>
        <label>Project type <span>*</span><select name="projectType" value={values.projectType} onChange={update} required><option>Residential architecture</option><option>Interior architecture</option><option>Commercial / hospitality</option><option>Spatial strategy</option><option>3D visualization</option><option>Other</option></select></label>
        <label>Project location <span>*</span><input name="location" value={values.location} onChange={update} required maxLength={160} placeholder="City, country" /></label>
        <label>Estimated budget <small>Optional</small><input name="budget" value={values.budget} onChange={update} maxLength={100} placeholder="Range and currency, if known" /></label>
        <label>Preferred language <select name="language" value={values.language} onChange={update}><option>English</option><option>فارسی</option></select></label>
        <label>Expected timeline <small>Optional</small><input name="timeline" value={values.timeline} onChange={update} maxLength={120} placeholder="e.g. Starting in spring 2027" /></label>
      </div>
      <label className="enquiry-form__brief">Project brief <span>*</span><textarea name="brief" value={values.brief} onChange={update} required minLength={20} maxLength={5000} rows={6} placeholder="Tell us about the project, its goals, scope, and the support you are looking for." /></label>
      <label className="enquiry-form__file">Supporting file <small>Optional · PDF, JPG, PNG or WebP · Max 5 MB</small><input type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp" onChange={(event) => setFile(event.target.files?.[0] || null)} />{file ? <small>Selected: {file.name}</small> : null}</label>
      <div className="enquiry-form__trap" aria-hidden="true"><label>Leave this field empty<input name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off" /></label></div>
      <div className="enquiry-form__submit">
        <p>Your details will only be used to respond to this enquiry. Do not include confidential or sensitive information.</p>
        <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send project enquiry"} <span>↗</span></button>
      </div>
      {message ? <p className={`enquiry-form__message enquiry-form__message--${status}`} role="status">{message} {status === "error" ? <a href="mailto:Gp.rovor@gmail.com">Email the studio directly ↗</a> : null}</p> : null}
    </form>
  );
}
