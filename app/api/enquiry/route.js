const allowedTypes = new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]);
const maxFileSize = 5 * 1024 * 1024;

function clean(value, max = 1000) {
  return String(value || "").trim().slice(0, max);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
}

export async function POST(request) {
  try {
    const form = await request.formData();
    if (clean(form.get("website"), 200)) return Response.json({ ok: true });
    const fields = {
      name: clean(form.get("name"), 120),
      email: clean(form.get("email"), 254),
      organization: clean(form.get("organization"), 160),
      projectType: clean(form.get("projectType"), 100),
      location: clean(form.get("location"), 160),
      budget: clean(form.get("budget"), 100),
      language: clean(form.get("language"), 30),
      timeline: clean(form.get("timeline"), 120),
      brief: clean(form.get("brief"), 5000),
    };
    if (!fields.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) ||
        !fields.projectType || !fields.location || fields.brief.length < 20) {
      return Response.json({ message: "Please complete the required fields and provide a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.ROVOR_FROM_EMAIL;
    const to = process.env.ROVOR_ENQUIRY_TO || "Gp.rovor@gmail.com";
    if (!apiKey || !from) {
      return Response.json({ message: "The enquiry form is not connected yet. Please email the studio directly at Gp.rovor@gmail.com." }, { status: 503 });
    }

    const attachment = form.get("attachment");
    const payload = {
      from,
      to: [to],
      reply_to: fields.email,
      subject: `New ROVOR project enquiry — ${fields.projectType}`,
      text: [
        `Name: ${fields.name}`, `Email: ${fields.email}`,
        `Organization: ${fields.organization || "—"}`, `Project type: ${fields.projectType}`,
        `Location: ${fields.location}`, `Budget: ${fields.budget || "—"}`,
        `Preferred language: ${fields.language || "—"}`, `Timeline: ${fields.timeline || "—"}`,
        "", "Project brief:", fields.brief,
      ].join("\n"),
      html: `<h2>New ROVOR project enquiry</h2><dl>${Object.entries(fields).map(([key, value]) => `<dt><strong>${escapeHtml(key)}</strong></dt><dd>${escapeHtml(value || "—")}</dd>`).join("")}</dl>`,
    };

    if (attachment && typeof attachment === "object" && attachment.size > 0) {
      if (attachment.size > maxFileSize || !allowedTypes.has(attachment.type)) {
        return Response.json({ message: "The attachment must be a PDF, JPG, PNG or WebP file no larger than 5 MB." }, { status: 400 });
      }
      const bytes = Buffer.from(await attachment.arrayBuffer());
      payload.attachments = [{ filename: clean(attachment.name, 120) || "project-brief", content: bytes.toString("base64") }];
    }

    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!sent.ok) {
      return Response.json({ message: "Email delivery is temporarily unavailable. Please contact the studio directly." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "The enquiry could not be processed. Please contact the studio directly." }, { status: 500 });
  }
}
