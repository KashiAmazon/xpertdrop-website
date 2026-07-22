"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { SITE } from "@/lib/constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background-soft py-24 sm:py-28">
      <div className="container-xd">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your store"
          description="Tell us a little about your business and we'll get back to you within one business day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Send size={22} />
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-primary dark:text-white">
                    Message received
                  </h3>
                  <p className="max-w-sm text-sm text-foreground-muted">
                    Thanks for reaching out. Our team will reply to your email within one
                    business day.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="text-sm font-medium text-primary dark:text-white">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-secondary"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="text-sm font-medium text-primary dark:text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-secondary"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="company" className="text-sm font-medium text-primary dark:text-white">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your business name"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-secondary"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="platform" className="text-sm font-medium text-primary dark:text-white">
                      Business Platform
                    </label>
                    <select
                      id="platform"
                      name="platform"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-secondary"
                    >
                      <option>Amazon</option>
                      <option>eBay</option>
                      <option>Shopify</option>
                      <option>TikTok Shop</option>
                      <option>Walmart</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary dark:text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your store and what you'd like help with"
                      className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-secondary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.55)] transition-all hover:bg-secondary-light hover:-translate-y-0.5 sm:w-auto"
                    >
                      Send Message
                      <Send size={15} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-primary dark:text-white">
                Get in touch directly
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MessageCircle size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-medium text-primary dark:text-white">WhatsApp</p>
                    <a href={SITE.whatsappHref} className="text-foreground-muted hover:text-secondary">
                      {SITE.whatsapp}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-medium text-primary dark:text-white">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-foreground-muted hover:text-secondary">
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-medium text-primary dark:text-white">Office Hours</p>
                    <p className="text-foreground-muted">Mon–Fri, 9:00 AM – 6:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex min-h-[180px] flex-1 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-border bg-card p-7 text-center text-foreground-muted/60">
              <MapPin size={22} />
              <p className="text-sm">Google Maps placeholder</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
