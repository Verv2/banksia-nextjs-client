"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendContactEmail } from "@/actions/contact.action";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await sendContactEmail(form);
      setStatus({
        type: "success",
        text: "Thanks for reaching out! We'll get back to you shortly.",
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <Input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Type your message here."
          className="min-h-[140px]"
          required
        />
      </div>

      {status && (
        <p
          className={`text-sm font-medium ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.text}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#F16232] hover:bg-[#F16232]/90 text-white transition-colors duration-200 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
};

export default ContactForm;