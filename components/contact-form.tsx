"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactPayload } from "@/lib/contact-schema";

const initialState: ContactPayload = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
  website: "",
};

type FormStatus = "idle" | "loading" | "success" | "error";

type FormErrors = Partial<Record<keyof ContactPayload, string>>;

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [formState, setFormState] = useState<ContactPayload>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [toast, setToast] = useState<{ type: FormStatus; message: string } | null>(null);

  const updateField = (field: keyof ContactPayload, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const result = contactSchema.safeParse(formState);
    if (!result.success) {
      const nextErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactPayload;
        nextErrors[field] = issue.message;
      });
      setErrors(nextErrors);
      return false;
    }
    if (formState.website) {
      setErrors({ website: "Spam detected" });
      return false;
    }
    setErrors({});
    return true;
  };

  const storeDemoSubmission = (payload: ContactPayload) => {
    const existing = JSON.parse(localStorage.getItem("showcase-submissions") ?? "[]") as
      | ContactPayload[]
      | [];
    localStorage.setItem("showcase-submissions", JSON.stringify([payload, ...existing]));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setToast(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as { ok: boolean; demoMode?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Submission failed");
      }

      if (data.demoMode) {
        storeDemoSubmission(formState);
      }

      setStatus("success");
      setToast({
        type: "success",
        message: data.demoMode ? "Saved in demo mode." : "Message sent.",
      });
      setFormState(initialState);
    } catch {
      setStatus("error");
      setToast({ type: "error", message: "Something went wrong. Try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={formState.company}
            onChange={(event) => updateField("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            placeholder="Business name"
          />
          {errors.company && (
            <p id="company-error" className="text-xs text-red-500" role="alert">
              {errors.company}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget range</Label>
          <select
            id="budget"
            name="budget"
            value={formState.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            className="focus-ring border-border text-foreground h-12 w-full rounded-[var(--radius-sm)] border bg-transparent px-4 text-sm"
          >
            <option value="">Select a range</option>
            <option value="5k-10k">5k to 10k</option>
            <option value="10k-20k">10k to 20k</option>
            <option value="20k-40k">20k to 40k</option>
            <option value="40k+">40k+</option>
          </select>
          {errors.budget && (
            <p id="budget-error" className="text-xs text-red-500" role="alert">
              {errors.budget}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Project goals</Label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us what you want to improve"
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-500" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <div className="sr-only" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formState.website ?? ""}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send request"}
        </Button>
        <p className="text-muted-foreground text-xs">We reply within 2 business days.</p>
      </div>
      {errors.website && (
        <p className="text-xs text-red-500" role="alert">
          {errors.website}
        </p>
      )}
      {toast && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-[var(--radius-sm)] border px-4 py-3 text-sm ${
            toast.type === "success"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-500"
              : "border-red-500/30 bg-red-500/10 text-red-400"
          }`}
          aria-live="polite"
        >
          {toast.message}
        </motion.div>
      )}
    </form>
  );
}
