import type { Metadata } from "next";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { ThemeProvider } from "@/hooks/use-theme";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
import WhatsAppButton from "@/components/layout/whatsapp-button";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "XpertDrop | Amazon & eBay eCommerce Growth Consultants",
    template: "%s | XpertDrop",
  },
  description:
    "XpertDrop helps Amazon and eBay sellers across the US, UK, Canada, Australia, and Europe scale with store management, product research, listing optimization, and PPC.",
  keywords: [
    "Amazon consultant",
    "eBay consultant",
    "Amazon store management",
    "eBay dropshipping",
    "Amazon PPC management",
    "eCommerce growth agency",
  ],
  openGraph: {
    title: "XpertDrop | Amazon & eBay eCommerce Growth Consultants",
    description:
      "Helping eCommerce businesses scale with Amazon & eBay growth solutions.",
    url: SITE.url,
    siteName: "XpertDrop",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "XpertDrop | Amazon & eBay eCommerce Growth Consultants",
    description:
      "Helping eCommerce businesses scale with Amazon & eBay growth solutions.",
  },
  alternates: {
    canonical: SITE.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "XpertDrop",
  description:
    "Amazon and eBay eCommerce growth consulting: store management, product research, listing optimization, PPC, and business scaling.",
  url: SITE.url,
  email: SITE.email,
  areaServed: ["US", "GB", "CA", "AU", "EU"],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('xpertdrop-theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t?t==='dark':m){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
