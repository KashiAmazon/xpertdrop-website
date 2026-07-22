import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of XpertDrop's services and website.",
};

export default function TermsPage() {
  return (
    <section className="py-32">
      <div className="container-xd max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-primary dark:text-white">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-foreground-muted">
          This is a placeholder terms of service page. Replace this content with your
          finalised terms before launch.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground-muted">
          <p>
            These placeholder terms outline the sections a complete agreement should
            cover: service scope, client responsibilities, payment terms, confidentiality,
            limitation of liability, and termination.
          </p>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-secondary hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
