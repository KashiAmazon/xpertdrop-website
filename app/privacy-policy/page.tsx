import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How XpertDrop collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-32">
      <div className="container-xd max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-primary dark:text-white">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-foreground-muted">
          This is a placeholder privacy policy. Replace this content with your finalised
          policy before launch.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground-muted">
          <p>
            XpertDrop (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This
            placeholder page outlines the sections a complete policy should cover:
            information we collect, how it is used, how it is stored, third-party sharing,
            cookies, and your rights as a user.
          </p>
          <p>
            For questions about this policy, contact us at{" "}
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
