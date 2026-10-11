"use client";

import { useState } from "react";
import { Check, Loader2, Send, MessageCircle, Mail, AlertCircle } from "lucide-react";
import {
  Button,
} from "@/components/ui/button";
import { Field, Input, Textarea, Select } from "@/components/ui/field";
import { business, whatsappHref, enquiryEndpoint } from "@/lib/business";
import { collections } from "@/lib/content";

type Values = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const initial: Values = {
  name: "",
  phone: "",
  email: "",
  interest: collections[0]?.name ?? "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "manual" | "error";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof Values) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  function validate(): boolean {
    const next: Partial<Record<keyof Values, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) next.phone = "Please leave a number we can reach you on.";
    else if (values.phone.replace(/\D/g, "").length < 7)
      next.phone = "That number looks too short.";
    if (values.email.trim() && !emailRe.test(values.email.trim()))
      next.email = "Please check the email address format.";
    if (values.message.trim().length < 10)
      next.message = "A sentence or two helps us help you.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const composedMessage = [
    `Enquiry for ${business.name}`,
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.email ? `Email: ${values.email}` : null,
    `Interest: ${values.interest}`,
    "",
    values.message,
  ]
    .filter(Boolean)
    .join("\n");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      const first = document.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }
    setStatus("submitting");

    if (enquiryEndpoint) {
      try {
        const res = await fetch(enquiryEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, source: "website" }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("success");
        setValues(initial);
      } catch {
        setStatus("error");
      }
      return;
    }

    // No delivery backend configured — be honest and hand over a direct route.
    setStatus("manual");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-sm border border-ink/12 bg-chalk p-8"
      >
        <span className="grid h-11 w-11 place-items-center rounded-full bg-eucalyptus/20 text-eucalyptus-deep">
          <Check className="h-[18px] w-[18px]" />
        </span>
        <h3 className="font-display text-2xl text-ink">Thank you.</h3>
        <p className="max-w-[42ch] text-sm leading-relaxed text-foreground/65">
          Your enquiry has been sent. The studio will respond during opening
          hours. If it is urgent, WhatsApp is the fastest route.
        </p>
        <Button asChild variant="primary" arrow>
          <a
            href={whatsappHref(`Hello ${business.name}, I've just sent a website enquiry.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
            Continue on WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  if (status === "manual") {
    return (
      <div className="rounded-sm border border-ink/12 bg-chalk p-8">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-clay/15 text-clay-deep">
          <Check className="h-[18px] w-[18px]" />
        </span>
        <h3 className="mt-4 font-display text-2xl text-ink">
          Your enquiry is ready to send.
        </h3>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-foreground/65">
          This website does not have a connected inbox yet, so nothing has been
          submitted automatically. Choose a route below and your details are
          pre-filled — or call the studio directly.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="primary" arrow>
            <a
              href={whatsappHref(composedMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              Send via WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={`${business.email.href}?subject=${encodeURIComponent(
                `Furniture enquiry — ${values.name}`,
              )}&body=${encodeURIComponent(composedMessage)}`}
            >
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
              Send via email
            </a>
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs uppercase tracking-[0.12em] text-foreground/50 underline-offset-4 hover:text-ink hover:underline"
        >
          Edit the enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your name"
          />
        </Field>

        <Field label="Phone" htmlFor="phone" required error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="03xx xxxxxxx"
          />
        </Field>
      </div>

      <Field
        label="Email"
        htmlFor="email"
        error={errors.email}
        hint="Optional — for a written reply."
      >
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={update("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : "email-hint"}
          placeholder="you@example.com"
        />
      </Field>

      <Field label="What are you looking for?" htmlFor="interest">
        <Select id="interest" name="interest" value={values.interest} onChange={update("interest")}>
          {collections.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="Interior consultation">Interior consultation</option>
          <option value="Something else">Something else</option>
        </Select>
      </Field>

      <Field label="Message" htmlFor="message" required error={errors.message}>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us about the room, the pieces or the timeline."
        />
      </Field>

      {status === "error" ? (
        <p role="alert" className="flex items-center gap-2 text-sm text-clay-deep">
          <AlertCircle className="h-[18px] w-[18px]" aria-hidden="true" />
          Something went wrong sending that. Please try WhatsApp or email.
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <Loader2 className="h-[18px] w-[18px] animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-[18px] w-[18px]" aria-hidden="true" />
          )}
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="max-w-[34ch] text-xs leading-relaxed text-foreground/45">
          We reply during opening hours. Your details are only used to answer
          your enquiry.
        </p>
      </div>
    </form>
  );
}
