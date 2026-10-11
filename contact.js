document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-note");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const sender = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Varsha,\n\n${message}\n\nFrom: ${name}\nReply email: ${sender}`);
    if (note) note.textContent = "Your email app should open with the message prepared. Please review and send it there.";
    window.location.href = `mailto:vy9635145@gmail.com?subject=${subject}&body=${body}`;
  });
});
