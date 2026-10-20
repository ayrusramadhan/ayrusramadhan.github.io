import { useState } from "react";
import { EMAIL, socials, RESUME } from "../data.js";

const FIELDS = [
  ["n", "Name", "name"],
  ["e", "Email", "email"],
  ["m", "Message"],
];

// Email sudah ditampilkan secara terpisah.
const socialLinks = socials.filter(([, href]) => !href.startsWith("mailto:"));

export default function Contact() {
  const [err, setErr] = useState({});

  function submit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("n") ?? "").trim();
    const email = String(form.get("e") ?? "").trim();
    const message = String(form.get("m") ?? "").trim();

    const next = {};

    if (!name) {
      next.n = "Enter your name";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      next.e = "Enter an email like name@company.com";
    }

    if (!message) {
      next.m = "Write a short message";
    }

    setErr(next);

    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(`Project enquiry from ${name}`);

    const body = encodeURIComponent(
      `${message}\n\nName: ${name}\nEmail: ${email}`,
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="grid gap-8 rounded-[32px] bg-cobalt p-[clamp(28px,6vw,72px)] text-white lg:grid-cols-12">
      <div className="min-w-0 lg:col-span-6">
        <h1
          tabIndex={-1}
          className="mb-6 font-sans text-[clamp(40px,7vw,96px)] font-extrabold leading-[.98] tracking-[-.04em]"
        >
          Have a project in mind?
        </h1>

        <p className="mb-6 leading-relaxed">
          I'm open to UI/UX Designer roles and select freelance projects. Tell
          me what you're building, what challenges you're facing, and how I can
          help.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="mb-8 block break-all font-sans text-[clamp(24px,3vw,34px)] font-extrabold leading-tight tracking-[-.03em] underline decoration-tang decoration-4 underline-offset-4"
        >
          {EMAIL}
        </a>

        <ul>
          {socialLinks.map(([label, href]) => (
            <li key={label} className="border-t border-white/30 py-3">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-tang"
              >
                {label}
              </a>
            </li>
          ))}

          <li className="border-t border-white/30 py-3">
            <a
              href={RESUME.url}
              download={RESUME.filename}
              className="underline underline-offset-4 transition-colors hover:text-tang"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>

      <form
        noValidate
        onSubmit={submit}
        className="min-w-0 rounded-[20px] bg-surface p-5 text-ink sm:p-7 lg:col-span-6"
      >
        {FIELDS.map(([id, label, autoComplete]) => {
          const invalid = Boolean(err[id]);

          const fieldClass = [
            "min-h-[52px] w-full rounded-xl border-2",
            "bg-surface px-3.5 py-3 font-sans",
            "text-base font-medium text-ink",
            "focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-cobalt",
            invalid ? "border-err" : "border-line",
          ].join(" ");

          const fieldProps = {
            id: `f-${id}`,
            name: id,
            required: true,
            "aria-invalid": invalid,
            "aria-describedby": invalid ? `e-${id}` : undefined,
          };

          return (
            <div key={id} className="mb-5">
              <label
                htmlFor={`f-${id}`}
                className="mb-1.5 block font-sans text-sm font-semibold"
              >
                {label}
              </label>

              {id === "m" ? (
                <textarea
                  {...fieldProps}
                  className={`${fieldClass} min-h-[140px] resize-y`}
                />
              ) : (
                <input
                  {...fieldProps}
                  type={id === "e" ? "email" : "text"}
                  autoComplete={autoComplete}
                  className={fieldClass}
                />
              )}

              {invalid && (
                <p
                  id={`e-${id}`}
                  className="mt-1.5 font-sans text-sm font-medium text-err"
                >
                  {err[id]}
                </p>
              )}
            </div>
          );
        })}

        <button
          type="submit"
          className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-cobalt px-7 py-3 font-sans text-[17px] font-semibold text-white transition-colors hover:bg-tang hover:text-ink sm:w-auto"
        >
          Send message
        </button>

        <p className="mt-3 text-sm">
          Opens your email app to send the message.
        </p>
      </form>
    </div>
  );
}
