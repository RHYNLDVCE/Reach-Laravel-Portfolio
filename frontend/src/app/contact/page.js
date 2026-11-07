"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedback("All fields are required.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedback(
          data.reference_id
            ? `Message recorded (${data.reference_id}). Saved to Laravel database.`
            : "Message sent successfully."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(data.message || "Could not submit message. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Could not connect to Laravel backend at http://127.0.0.1:8000/api/contact.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-xs uppercase tracking-widest font-mono text-neutral-500">
          Contact
        </h1>
        <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Get in Touch
        </p>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Have an inquiry, project scope, or opportunity? Send a message directly to the Laravel backend or reach out at{" "}
          <a
            href="mailto:contact@rhyn.dev"
            className="text-neutral-900 dark:text-white underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            contact@rhyn.dev
          </a>.
        </p>
      </div>

      <div className="max-w-xl pt-2">
        {status === "success" && (
          <div className="mb-5 p-3.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono">
            ✓ {feedback}
          </div>
        )}

        {status === "error" && (
          <div className="mb-5 p-3.5 rounded-lg bg-neutral-100 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-300 text-xs font-mono">
            ✕ {feedback}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex"
                disabled={status === "submitting"}
                className="w-full px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white text-xs placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                disabled={status === "submitting"}
                className="w-full px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white text-xs placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project, timeline, and goals..."
              disabled={status === "submitting"}
              className="w-full px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white text-xs placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-5 py-2 rounded-lg bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-medium text-xs transition-colors disabled:opacity-50 inline-flex items-center gap-2 cursor-pointer"
          >
            {status === "submitting" ? (
              <span>Saving to Laravel...</span>
            ) : (
              <span>Send Message &rarr;</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
