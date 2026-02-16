'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Demo template only. No submission sent.');
  };

  return (
    <section id="contact" className="border-b border-[#242424] px-6 py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#8f8b84]">Contact</p>
          <h2 className="mt-4 font-[family-name:var(--font-gothic)] text-4xl uppercase tracking-[0.08em] text-[#f5f3f0] sm:text-5xl">
            STAY CONNECTED.
          </h2>
          <p className="mt-6 max-w-md text-[#c5c1ba]">
            Reach out for private events, collabs, and after-hours film screenings.
          </p>

          <ul className="mt-8 space-y-3 text-xs uppercase tracking-[0.18em] text-[#b9b6af]">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Email</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 border border-[#2d2d2d] bg-[#0d0d0d] p-7">
          <label className="block text-xs uppercase tracking-[0.18em] text-[#8f8b84]">
            Name
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full border border-[#333] bg-[#0a0a0a] px-4 py-3 text-sm text-[#f3f1ed] outline-none placeholder:text-[#5f5c57] focus:border-[#5d5a54]"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.18em] text-[#8f8b84]">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full border border-[#333] bg-[#0a0a0a] px-4 py-3 text-sm text-[#f3f1ed] outline-none placeholder:text-[#5f5c57] focus:border-[#5d5a54]"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.18em] text-[#8f8b84]">
            Message
            <textarea
              rows={5}
              placeholder="What can we help you with?"
              className="mt-2 w-full resize-none border border-[#333] bg-[#0a0a0a] px-4 py-3 text-sm text-[#f3f1ed] outline-none placeholder:text-[#5f5c57] focus:border-[#5d5a54]"
            />
          </label>

          <button
            type="submit"
            className="border border-[#5d5a54] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[#f3f1ed]"
          >
            Submit
          </button>

          {message ? <p className="text-xs uppercase tracking-[0.15em] text-[#b9b6af]">{message}</p> : null}
        </form>
      </div>
    </section>
  );
}