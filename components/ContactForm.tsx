"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    if (!name || !email) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("Form submitted successfully!");

    setName("");
    setEmail("");
  };

  return (
    <section className="max-w-md mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Contact Form
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full p-2 border mb-4"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-2 border mb-4"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="mt-4">
          {message}
        </p>
      )}
    </section>
  );
}
