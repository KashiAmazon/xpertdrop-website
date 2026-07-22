import Link from "next/link";
import { Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";
import { FOOTER_LINKS, SITE, SOCIALS } from "@/lib/constants";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-xd grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {SITE.tagline}. Trusted by Amazon and eBay sellers across the US, UK, Canada,
            Australia, and Europe.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={SOCIALS.facebook}
              aria-label="XpertDrop on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Facebook size={16} />
            </a>
            <a
              href={SOCIALS.linkedin}
              aria-label="XpertDrop on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={SOCIALS.upwork}
              aria-label="XpertDrop on Upwork"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-bold text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              Up
            </a>
            <a
              href={SOCIALS.fiverr}
              aria-label="XpertDrop on Fiverr"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-bold text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              Fv
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/50">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {FOOTER_LINKS.services.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/50">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/50">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={15} className="text-accent" />
              <a href={SITE.whatsappHref} className="hover:text-accent">
                {SITE.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xd flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} XpertDrop. All rights reserved.</p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
